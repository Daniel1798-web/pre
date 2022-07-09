import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pre';  
  activa = false
  so:boolean = false

  ngOnit(){ 
    this.co(this.so)
    
  }
  co(mensaje:boolean){
    this.so = mensaje
    this.activa = !this.activa
  }
 
}
