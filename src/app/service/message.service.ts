import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
constructor(private _http: HttpClient) { }
sendMessage(mail:any):Observable<any> {
 return this._http.post('https://back-pre.vercel.app/formulario', mail);
 }

rec() {
    return this._http.get('https://back-pre.vercel.app/products');
    }
}