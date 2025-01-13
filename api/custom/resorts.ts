import BaseHttpService from "@/api/base";

export default class ResortsHttpService extends BaseHttpService {
  constructor() {
    super({
      baseURL: `https://localhost:7005/api/resorts`,
    });
  }
}
