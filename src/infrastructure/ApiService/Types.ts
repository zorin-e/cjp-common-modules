import CJResponse from './CJResponse';

export interface CJRequest {
  request(params: CJRequestParams): Promise<CJResponse>;
}

export interface CJResponseFormat {
  readonly status: number;
  readonly payload: object;
}

export interface CJRequestParams {
  url: string;
  method?: string;
  payload: object;
}

export interface CJRequestHeaders {
  readonly accept: string;
  readonly contentType: string;
}

export interface CJApiServiceInterface {
  get(params: CJRequestParams): Promise<CJResponse>;
  post(params: CJRequestParams): Promise<CJResponse>;
  put(params: CJRequestParams): Promise<CJResponse>;
  delete(params: CJRequestParams): Promise<CJResponse>;
}
