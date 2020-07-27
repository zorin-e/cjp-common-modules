import { AxiosInstance, AxiosResponse, AxiosRequestConfig, Method } from "axios";
import { Response } from './Response';
import axios from "axios";
import { RequestInterface } from './Request.interface';
import { RequestParamsInterface } from './RequestParams.interface';
import { ResponseFormatInterface } from '.';

export class AxiosClient implements RequestInterface {
  private client: AxiosInstance

  constructor({ headers }: { headers: object | undefined }) {
    this.client = axios.create({
      headers: {
        ...headers
      }
    });
  }

  async request(params: RequestParamsInterface) : Promise<ResponseFormatInterface> {
    let _method: string = params.method || 'get';
    let _payload: object | undefined = _method === 'get' ? { params: params.payload } : params.payload;
    let _request: AxiosRequestConfig = {
      url: params.url,
      method: ( _method as Method),
      data: _payload
    }

    const _response: AxiosResponse = await this.client.request(_request);
    return new Response(_response.status, _response.data);
  }
}