import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pre';  
  section2Active= false;

   activeSection2(){
    this.section2Active = !this.section2Active
    
  }
}
