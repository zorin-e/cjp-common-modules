import { AxiosInstance, AxiosResponse, AxiosRequestConfig, Method } from "axios";
import { Response } from './Response';
import axios from "axios";
import { RequestInterface } from './Request.interface';
import { RequestParamsInterface } from './RequestParams.interface';
import { ResponseFormatInterface, HttpParamsInterface } from '.';

export class AxiosClient implements RequestInterface {
  private client: AxiosInstance

  constructor(headers: HttpParamsInterface) {
    this.client = axios.create({
      headers: {
        'Accept': headers.accept,
        'Content-Type': headers.contentType,
        'Authorization': headers.authorization
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