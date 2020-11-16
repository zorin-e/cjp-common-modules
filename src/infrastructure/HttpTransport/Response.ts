import { ResponseFormatInterface } from './ResponseFormat.interface'
import { PayloadInterface } from '../Payload.interface';

export class Response implements ResponseFormatInterface {
    readonly status: number;
    readonly payload: PayloadInterface;
    constructor(status: number, payload: PayloadInterface) {
        this.status = status;
        this.payload = payload;
    }

}
