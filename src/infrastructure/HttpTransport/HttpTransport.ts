import { RequestInterface } from './Request.interface';
import { RequestParamsInterface } from './RequestParams.interface';
import { HttpTransportInterface } from './HttpTransport.interface';
import { ResponseFormatInterface } from '.';

export class HttpTransport implements HttpTransportInterface {
  client: RequestInterface;

  constructor(client: RequestInterface) {
    this.client = client;
  }

  get(params: RequestParamsInterface): Promise<ResponseFormatInterface> {
    return this.client.request({ ...params, ...{method: 'get'}});
  }

  post(params: RequestParamsInterface): Promise<ResponseFormatInterface> {
    return this.client.request({ ...params, ...{method: 'post'}});
  }

  put(params: RequestParamsInterface): Promise<ResponseFormatInterface> {
    return this.client.request({ ...params, ...{method: 'put'}});
  }

  delete(params: RequestParamsInterface): Promise<ResponseFormatInterface> {
    return this.client.request({ ...params, ...{method: 'delete'}});
  }
}