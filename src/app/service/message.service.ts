import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {
constructor(private _http: HttpClient) { }
sendMessage(textitos:any) {
 return this._http.post('https://back-pre.vercel.app/send-mail', textitos);
 }
}