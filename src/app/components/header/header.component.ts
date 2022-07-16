import { NgModel } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _MessageService: MessageService) { }
  texto0 = "";
  texto1 = "";
  texto2 = "";
  texto3 = "";
  enviado = false;
  enviadoErr = false;
  state:boolean = true;

  activeMenu:boolean = false;

  activeTalk:boolean = false;



  @Output()
  propagar = new EventEmitter<boolean>() 

  ngOnInit(): void {
  }



  menu(){
    this.activeMenu = !this.activeMenu
  }

  talk(){
    this.activeTalk = !this.activeTalk
    this.activeMenu = false
    this.propagar.emit(this.activeTalk)
  }

  backeando(){
    this.activeTalk = false
    this.propagar.emit(this.activeTalk)

  }

  

  
 verificar(){
  this.texto0 = ""
  this.texto1 = ""
  this.texto2 = ""
  this.texto3 = ""

 }

 verificar2(){
  if(this.texto0.length && this.texto1.length && this.texto2.length && this.texto3.length > 0){
   return this.state = false
  }
  else{
   return this.state = true
  }
 }

 contactForm(form:any) {
  console.log("ss")

  this._MessageService.sendMessage(form).subscribe(()=>{
    try{
      console.log("exito")
      this.co()
      this.verificar()
      this.enviado = true
    }
    catch(error){
      console.log(error + "falló")
      this.enviadoErr = true;

  
    }
  })
  
  }

  co(){
    this._MessageService.rec().subscribe(c => console.log(c))
  }


}
