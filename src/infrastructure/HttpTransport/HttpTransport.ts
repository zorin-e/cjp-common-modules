import CJResponse from './CJResponse';
import { CJRequest } from './CJRequest.interface';
import { CJRequestParams } from './CJRequestParams.interface';
import CJHttpTransport from './CJHttpTransport.interface';

export default class HttpTransport implements CJHttpTransport {
  private client: CJRequest;

  constructor(client: CJRequest) {
    this.client = client;
  }

  get(params: CJRequestParams): Promise<CJResponse> {
    return this.client.request({ ...params, ...{method: 'get'}});
  }

  post(params: CJRequestParams): Promise<CJResponse> {
    return this.client.request({ ...params, ...{method: 'post'}});
  }

  put(params: CJRequestParams): Promise<CJResponse> {
    return this.client.request({ ...params, ...{method: 'put'}});
  }

  delete(params: CJRequestParams): Promise<CJResponse> {
    return this.client.request({ ...params, ...{method: 'delete'}});
  }
}
