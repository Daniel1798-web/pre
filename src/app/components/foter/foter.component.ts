import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foter',
  templateUrl: './foter.component.html',
  styleUrls: ['./foter.component.scss']
})
export class FoterComponent implements OnInit {

  constructor() { }

  opinion:boolean = false; 
  outImages:boolean = false;
  outOpinion:boolean = false;

  textOpinion:string = "Do you like rate my web ?"
  ngOnInit(): void {
  }

  showOpinion(){
    if(this.opinion === false){
      this.textOpinion = "You dont need to do"
      this.outImages = true
      setTimeout(() => {
        this.opinion = true
        const scrollToOptions: ScrollToOptions = {
          top: document.body.scrollHeight,
          behavior: "smooth" // La opción "smooth" habilita el desplazamiento suave
        };
      
        window.scrollTo(scrollToOptions);

    }, 500);
    }
    else{
      this.outOpinion = true;
      this.textOpinion = "Do you like rate my web ?"
      setTimeout(() => {
        this.opinion = false
        this.outImages = false
        this.outOpinion = false
    }, 500);
    }

  }

}
