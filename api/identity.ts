import BaseHttpService from "@/api/base";

export default class IdentityHttpService extends BaseHttpService {
  constructor() {
    super({
      baseURL: `https://localhost:7133/api/`,
    });
  }

  /**
   * Request authorize
   * @returns
   */
  async login(payload: { email: String; password: String }) {
    return await this.post(`identity/authenticate`, {
      email: payload.email,
      password: payload.password,
    });
  }
}
