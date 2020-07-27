import { StorageInterface } from "./Storage.interface";
import { StorageResultInterface } from "./StorageResult.interface";
import { PayloadInterface } from "../Payload.interface";

export class Storage implements StorageInterface {
    private _client: StorageInterface;
    constructor ( client: StorageInterface ) {
        this._client = client;
    }
    get(key :string): StorageResultInterface {
        return this._client.get(key);
    };
    set(key: string, payload: PayloadInterface) : void {
        this._client.set(key, payload);
    };
    delete(key: string) : void {
        this._client.delete(key);
    };
}