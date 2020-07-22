import { AxiosInstance, AxiosResponse, AxiosRequestConfig, Method } from "axios";
import CJResponse from './CJResponse';
import axios from "axios";
import { CJRequest } from './CJRequest.interface';
import { CJRequestHeaders } from './CJRequestHeaders.interface';
import { CJRequestParams } from './CJRequestParams.interface';

export default class AxiosClient implements CJRequest {

  private client: AxiosInstance

  constructor({ headers }: { headers: CJRequestHeaders }) {
    this.client = axios.create({
      headers: {
        Accept: headers.accept,
        "Content-Type": headers.contentType,
        Authorization: headers.authorization || ''
      }
    });
  }

  async request(params: CJRequestParams) : Promise<CJResponse> {
    let _method: string = params.method || 'get';
    let _payload: object | undefined = _method === 'get' ? { params: params.payload } : params.payload;
    let _request: AxiosRequestConfig = {
      url: params.url,
      method: ( _method as Method),
      data: _payload
    }

    const _response: AxiosResponse = await this.client.request(_request);
    return new CJResponse(_response.status, _response.data);
  }
}
