export default class ResortsHttpService extends useApiService() {
  override name = "resorts";

  constructor() {
    super({
      baseURL: `https://localhost:7005/api/resorts`,
    });
  }
}
