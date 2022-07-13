import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
constructor(private _http: HttpClient) { }
sendMessage(nombre:any,asunto:any,email:any,mensaje:any){
    const obj = {
        nombre: nombre,
        asunto:asunto,
        email: email,
        mensaje: mensaje,
      };
 return this._http.post('https://back-pre.vercel.app/formulario', obj);
 }

rec() {
    return this._http.get('https://back-pre.vercel.app/products');
    }
}