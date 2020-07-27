import { StorageInterface } from "./Storage.interface"
import { StorageResultInterface } from "./StorageResult.interface"
import { PayloadInterface } from "../Payload.interface";

export class StorageMock implements StorageInterface {
    storageEmulator:PayloadInterface
    constructor(storageEmulator: PayloadInterface) {
        this.storageEmulator = storageEmulator
    }

    get(key: string): StorageResultInterface {
        return { payload: this.storageEmulator[key] }
    }
    set(key: string, payload: PayloadInterface) : void  {
        this.storageEmulator[key] = payload
    }
    delete(key: string) : void {
        delete this.storageEmulator[key]
    }
  }