import CJResponse from './CJResponse';
import { CJRequestParams } from './CJRequestParams.interface';

export interface CJRequest {
    request(params: CJRequestParams): Promise<CJResponse>;
}
