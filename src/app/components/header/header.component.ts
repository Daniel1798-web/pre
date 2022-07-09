import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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

}
