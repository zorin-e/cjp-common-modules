import { RequestParamsInterface } from './RequestParams.interface';
import { Response } from './Response';

export interface HttpTransportInterface {
  get(params: RequestParamsInterface): Promise<Response>;
  post(params: RequestParamsInterface): Promise<Response>;
  put(params: RequestParamsInterface): Promise<Response>;
  delete(params: RequestParamsInterface): Promise<Response>;
}