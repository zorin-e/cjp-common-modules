import { StorageResultInterface } from './StorageResult.interface';
import { PayloadInterface } from "../Payload.interface";

export interface StorageInterface {
    get(key: string): StorageResultInterface;
    set(key: string, payload: PayloadInterface) : void ;
    delete(key: string) : void ;
}