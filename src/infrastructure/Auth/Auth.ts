import { Connection } from "../LocalTokenRepository/Connection.interface"

export class Auth {
  private localTokenRepository: Connection
  private pathToLogout: string
  constructor(localTokenRepository: Connection, pathToLogout: string) {
    this.localTokenRepository = localTokenRepository
    this.pathToLogout = pathToLogout
  }
  logout () {
    this.localTokenRepository.deleteAccessToken();
    this.localTokenRepository.deleteRefreshToken();
    window.location.href = this.pathToLogout
  }
}
