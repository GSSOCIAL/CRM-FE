export default class HotelsHttpService extends useApiService() {
  override name = "hotels";

  constructor() {
    super({
      baseURL: `https://localhost:7005/api/resorts/hotels`,
    });
  }
}
