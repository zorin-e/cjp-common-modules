import { ResponseFormatInterface } from './ResponseFormat.interface'

export class Response implements ResponseFormatInterface {
    readonly status: number;
    readonly payload: object;
    constructor(status: number, payload: object) {
        this.status = status;
        this.payload = payload;
    }

}