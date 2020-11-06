import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  Method,
  AxiosError
} from "axios";
import { Response } from './Response';
import { RequestInterface } from './Request.interface';
import { RequestParamsInterface } from './RequestParams.interface';
import { ResponseFormatInterface, HttpParamsInterface } from '.';
import { InterceptorHandlers } from "./InterceptorHandlers.interface";

export class AxiosClient implements RequestInterface {
  protected client: AxiosInstance

  constructor(headers: HttpParamsInterface, interceptors?: InterceptorHandlers) {
    this.client = axios.create({
      headers: {
        'Accept': headers.accept,
        'Content-Type': headers.contentType,
        'Authorization': headers.authorization
      }
    });

    if (interceptors) this.interceptResponse(interceptors)
  }

  async request(params: RequestParamsInterface) : Promise<ResponseFormatInterface> {
    let _method: string = params.method || 'get';
    let _payload: object | undefined | string = _method === 'get' ? { params: params.payload } : params.payload;
    let _request: AxiosRequestConfig = {
      url: params.url,
      method: ( _method as Method),
      data: _payload
    }

    const _response: AxiosResponse = await this.client.request(_request);
    return new Response(_response.status, _response.data);
  }

  private interceptResponse(props?: InterceptorHandlers) {
    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        if (props?.successHandler) {
          return props.successHandler(response)
        }
        return response
      },
      async (error: AxiosError) => {
        if(error.response?.status === 401) {
          if(props?.errorHandler) {
            const data = await props.errorHandler(error)
            const payload = Array.isArray(data.payload) ? [...data.payload] : {...data.payload}
            return Promise.resolve({
              data: payload,
              ...data
            })
          }
        }
        return Promise.reject(error)
      }
    )
  }
}
