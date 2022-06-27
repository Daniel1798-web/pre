import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pre';  
  section2Active:boolean = false;
  section2Up:boolean = false

  arrow:string="../assets/down-arrow .png"

  bottomArrow:string = "../assets/down-arrow .png"
  upArrow:string = "../assets/up-arrow.png";

   activeSection2(){
    this.section2Active = !this.section2Active
    if(this.arrow === this.bottomArrow){
      this.section2Up = false
      return this.arrow = this.upArrow
    }
    else{
      this.section2Up = true
     return this.arrow = this.bottomArrow
    }
  }

  activeAboutMe(){
    this.section2Active = true
    if(this.arrow === this.bottomArrow){
      return this.arrow = this.upArrow
    }
    else{
     return this.arrow = this.upArrow
    }
  }
}
