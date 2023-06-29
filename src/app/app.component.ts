import { Component } from '@angular/core';
import { VisitCountService} from './service/visit-count.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private visitCount : VisitCountService){}
  title = 'pre';  
  activa = false
  so:boolean = false

  ngOnit(){ 
    this.co(this.so)
    this.prueba()
  
  }

  prueba(){
    this.visitCount.visitCount().subscribe((res:any)=>{
      (data:any)=>{
        console.log(data)

      }
      (error:any)=>{
        console.log(error)
      }
    })
  }

  co(mensaje:boolean){
    this.so = mensaje
    this.activa = !this.activa
  }


 
}
