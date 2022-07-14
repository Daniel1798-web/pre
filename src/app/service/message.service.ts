import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
constructor(private _http: HttpClient) { }
sendMessage(body:any){
    
 return this._http.post('https://back-pre.vercel.app/formulario', body);
 }

rec() {
    return this._http.get('https://back-pre.vercel.app/products');
    }
}