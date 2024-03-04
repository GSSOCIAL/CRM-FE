export default class BaseHttpService{
    fetchConfig = {
        withCredentials: true,
        baseURL: `https://localhost:7036/api/`,
        headers: {
            'Cache-Control': 'no-cache',
        },
    }

    constructor(config = {}) {
        this.fetchConfig = Object.assign(this.fetchConfig, config)
    }

    async get(endpoint:string){
        return await $fetch(`${this.fetchConfig.baseURL}${endpoint}`)
    }

    /**
     * Perform POST fetch request
     * @param endpoint String 
     * @param body Object
     * @returns 
     */
    async post(endpoint:string, body: Object){
        console.log(body);
        
        return await $fetch(`${this.fetchConfig.baseURL}${endpoint}`,{
            method: "POST",
            body: body
        })
    }
}