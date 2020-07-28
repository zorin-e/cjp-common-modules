import { PayloadInterface } from '../Payload.interface';

export interface ResponseFormatInterface {
    readonly status: number;
    readonly payload: PayloadInterface;
}