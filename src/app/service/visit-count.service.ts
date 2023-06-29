import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitCountService {

  constructor(private http : HttpClient) { 
  }

  /*visitCount() {
    return this.http.get('http://localhost:3000/visitas');
    }*/

    visitCount() {
      return this.http.get('https://back-pre.vercel.app/visitas');
      }

      ruta() {
        return this.http.get('https://back-pre.vercel.app/ruta');
        }
}