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
      return this.http.get('https://backendportfolio-production-6b35.up.railway.app/traervisitas');
      }

      ruta() {
        return this.http.get('https://backendportfolio-production-6b35.up.railway.app/visitas');
        }
      

}
