import { CJRequestHeaders } from './CJRequestHeaders.interface';

export default class RequestHeaders implements CJRequestHeaders {
    readonly accept: string;
    readonly contentType: string;
    readonly authorization? :string;

    constructor({accept, contentType, authorization} : {accept: string, contentType: string, authorization?:string}) {
        this.accept = accept;
        this.contentType = contentType;
        this.authorization = authorization || ''
    }
}