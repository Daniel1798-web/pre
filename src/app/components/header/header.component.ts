import { NgModel } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
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

  this.texto1 = ""
  this.texto2 = ""
  this.texto3 = ""

  this.enviado = true
 }



}
