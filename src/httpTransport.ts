import { HttpTransport, AxiosClient } from "./app";
import { PayloadInterface } from './infrastructure/Payload.interface';
import { HttpParamsInterface } from './infrastructure/HttpTransport';

const transport: HttpTransport = new HttpTransport(
    new AxiosClient({
        accept: "application/json",
        contentType: "application/json"
    })
  )

export default function(params: HttpParamsInterface = {
  accept: "application/json",
  contentType: "application/json"
}) {
  return new HttpTransport(
    new AxiosClient(params)
  )
};