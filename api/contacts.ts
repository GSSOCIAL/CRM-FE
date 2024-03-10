import BaseHttpService from "@/api/base"

export default class ContactsHttpService extends BaseHttpService{
    constructor(){
        super({
            baseURL: `https://localhost:7213/api/`,
        });
    }
    /**
     * Get contacts list
     * @returns Array<Contact>
     */
    async getContactsList(){
        return await this.get(`contacts`)
    }

    /**
     * Create contact instance
     * @returns Array<Contact>
     */
    async createContact(instance){
        return await this.post(`contacts`, instance)
    }
}
