import { CJRequestParams } from './CJRequestParams.interface';
import CJResponse from './CJResponse';

export default interface CJHttpTransport {
  get(params: CJRequestParams): Promise<CJResponse>;
  post(params: CJRequestParams): Promise<CJResponse>;
  put(params: CJRequestParams): Promise<CJResponse>;
  delete(params: CJRequestParams): Promise<CJResponse>;
}
