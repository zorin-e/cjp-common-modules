import { Response } from './Response';
import { RequestParamsInterface } from './RequestParams.interface';

export interface RequestInterface {
    request(params: RequestParamsInterface): Promise<Response>;
}