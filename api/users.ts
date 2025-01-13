import BaseHttpService from "@/api/base";

export default class UsersHttpService extends BaseHttpService {
  constructor() {
    super({
      baseURL: `https://localhost:7133/api/`,
    });
  }

  /**
   * Get User entry
   * @returns
   */
  async getUser(id: string) {
    return await this.get(`identity/${id}`);
  }

  /**
   * Get list of entries
   * @returns
   */
  async getUsers() {
    return await this.get(`identity`);
  }

  /**
   * Create user
   * @returns
   */
  async createUser(payload) {
    return await this.post(`identity`, payload);
  }
}
