import { StorageInterface } from './Storage.interface';
import { StorageResultInterface } from './StorageResult.interface';
import { PayloadInterface } from "../Payload.interface";

export class StorageLocalStorage implements StorageInterface {
    get(key: string): StorageResultInterface {
        let result: string | null = localStorage.getItem(key);
        return JSON.parse(result as string)
    }
    set(key: string, payload: PayloadInterface) : void  {
        localStorage.setItem(key, JSON.stringify(payload));
    }
    delete(key: string) : void {
        localStorage.removeItem(key);
    }
}
