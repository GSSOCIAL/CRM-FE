import type {FetchContext, FetchResponse} from "ofetch";

export interface fetchConfig{
    withCredentials?: boolean;
    baseURL: string;
    retryCount?: number;
    retryDelay?: number;
    headers?: {
        'Cache-Control'?: 'no-cache',
    },
};

export default class BaseHttpService{
    fetchConfig: fetchConfig = {
        withCredentials: true,
        baseURL: `https://localhost:7036/api/`,
        headers: {
            'Cache-Control': 'no-cache',
        },
    }
    fetch: typeof $fetch = null as unknown as typeof $fetch

    _beforeRequest: (context: FetchContext)=>void = ()=>{}
    _afterRequest: (context: FetchContext & {
        response: FetchResponse<any>;
    })=>void = ()=>{}
    _requestFailed: (context: FetchContext & {
        error: Error;
    })=>void = ()=>{}
    _responseFailed: (context: FetchContext)=>void = ()=>{}

    constructor(config: fetchConfig = {} as fetchConfig){
        this.build(config)
    }

    /**
     * Perform GET fetch request
     * @param endpoint 
     * @returns 
     */
    async get(endpoint:string){
        return await this.fetch(`${this.fetchConfig.baseURL}${endpoint}`)
    }

    /**
     * Perform POST fetch request
     * @param endpoint String 
     * @param body Object
     * @returns 
     */
    async post(endpoint:string, body: Object){
        return await $fetch(`${this.fetchConfig.baseURL}${endpoint}`,{
            method: "POST",
            body: body,
        })
    }

    /**
     * Add before request interceptor
     * @returns 
     */
    beforeRequest(callback: (context: FetchContext)=>void){
        this._beforeRequest = callback
        return this
    }

    /**
     * Add after request interceptor
     * @returns 
     */
    afterRequest(callback: (context: FetchContext & {
        response: FetchResponse<any>;
    })=>void){
        this._afterRequest = callback
        return this
    }

    /**
     * Add request failed interceptor
     * @returns 
     */
    requestFailed(callback: ()=>void){
        this._requestFailed = callback
        return this
    }

    /**
     * Add response failed interceptor
     * @returns 
     */
    responseFailed(callback: ()=>void){
        this._responseFailed = callback
        return this
    }

    /**
     * Build fetch instance
     * @param config 
     * @returns 
     */
    build(config: fetchConfig = {} as fetchConfig){
        this.fetchConfig = Object.assign(this.fetchConfig, config)
        this.fetch = $fetch.create({
            headers: {},
            onRequest: this._beforeRequest,
            onRequestError: this._requestFailed,
            onResponse: this._afterRequest,
            onResponseError: this._responseFailed
        });
        return this;
    }
}