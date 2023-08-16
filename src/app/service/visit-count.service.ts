import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

      mandarVisita() {
        return this.http.get('https://backendportfolio-production-6b35.up.railway.app/visitas');
      }
      
      mandarOpinion(data:any): Observable<any>{
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
        return this.http.post('https://backendportfolio-production-6b35.up.railway.app/opinion', data, { headers: headers });
      
      }

      opinionData() {
        return this.http.get('https://backendportfolio-production-6b35.up.railway.app/traeropinion');
        }
}
