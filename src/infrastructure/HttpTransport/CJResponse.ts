import { CJResponseFormat } from './CJResponseFormat.interface';

export default class CJResponse implements CJResponseFormat {
    readonly status: number;
    readonly payload: object;
    constructor(status: number, payload: object) {
        this.status = status;
        this.payload = payload;
    }

}
