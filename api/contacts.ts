import BaseHttpService from "@/api/base"

export default class ContactsHttpService extends BaseHttpService{
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
