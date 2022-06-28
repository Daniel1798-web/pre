import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  section2Active:boolean = false;
  section2Up:boolean = false

  arrow:string="../../assets/down-arrow .png"

  bottomArrow:string = "../../assets/down-arrow .png"
  upArrow:string = "../../assets/up-arrow.png";
  texto:string = "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

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
