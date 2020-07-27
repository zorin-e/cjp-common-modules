import { HttpTransport, AxiosClient } from "./app";
import { PayloadInterface } from './infrastructure/Payload.interface';

const transport: HttpTransport = new HttpTransport(
    new AxiosClient({
      headers: {
        accept: "application/json",
        contentType: "application/json"
      }
    })
  )

export default function(params: PayloadInterface = {
  accept: "application/json",
  contentType: "application/json"
}) {
  return new HttpTransport(
    new AxiosClient({
      headers: {
        ...params
      }
    })
  )
};