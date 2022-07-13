import { NgModel } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

 contactForm(form:any) {
  console.log("ss")

  this._MessageService.sendMessage(this.texto0,this.texto1,this.texto2,this.texto3).subscribe(()=>{
    try{
      console.log("exito")
      this.co()
    }
    catch(error){
      console.log(error + "falló")
     this.verificar()

  
    }
  })
  
  }

  co(){
    this._MessageService.rec().subscribe(c => console.log(c))
  }


}
