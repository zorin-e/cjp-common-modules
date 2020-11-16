import { tokenResponse } from "./tokenResponse.type"
export interface Connection {
  getRefreshToken(): tokenResponse;
  getAccessToken(): tokenResponse;
  deleteRefreshToken(): void;
  deleteAccessToken(): void;
  setAccessToken(token: string): void;
  setRefreshToken(token: string): void;
  getNewToken(): Promise<string>;
}
