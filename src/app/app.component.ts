import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pre';  
  
  so:boolean = false

  ngOnit(){
    
  }

  co(mensaje:boolean){
    this.so = mensaje
  }
}
