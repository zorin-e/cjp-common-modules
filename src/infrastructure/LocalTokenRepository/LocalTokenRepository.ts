import {
  ACCESS_TOKEN,
  REFRESH_TOKEN
} from "../../constants/token"
import { HttpTransportInterface } from '../HttpTransport'
import { StorageInterface } from "../Storage"
import qs from "qs"
import { tokenResponse } from "./tokenResponse.type"
import { Connection } from "./Connection.interface";

export class LocalTokenRepository implements Connection {
  private storage: StorageInterface
  private transport: HttpTransportInterface
  constructor({ storage, transport } :{ storage: StorageInterface, transport: HttpTransportInterface }) {
    this.storage = storage
    this.transport = transport
  }

  getRefreshToken (): tokenResponse {
    return this.storage.get(REFRESH_TOKEN) && this.storage.get(REFRESH_TOKEN)["token"]
  }

  getAccessToken(): tokenResponse {
    return this.storage.get(ACCESS_TOKEN) && this.storage.get(ACCESS_TOKEN)["token"]
  }

  getNewToken(): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const { payload } = await this.transport.post({
          url: "/auth/realms/cjpartners/protocol/openid-connect/token",
          payload: qs.stringify({
            grant_type: REFRESH_TOKEN,
            client_id: "platform",
            refresh_token: this.getRefreshToken()
          })
        })
        resolve(payload[ACCESS_TOKEN])
      } catch(error) {
        reject(error)
      }
    })
  }

  setAccessToken (token: string) {
    this.storage.set(ACCESS_TOKEN, { token })
  }

  setRefreshToken (token: string) {
    this.storage.set(REFRESH_TOKEN, { token })
  }

  deleteAccessToken () {
    this.storage.delete(ACCESS_TOKEN)
  }

  deleteRefreshToken () {
    this.storage.delete(REFRESH_TOKEN)
  }
}
