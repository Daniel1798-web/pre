import { Component, OnInit } from '@angular/core';
import {HostListener} from '@angular/core'
@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {


  activoDad:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  activarDad(){
    this.activoDad = true
  }

  @HostListener("scroll", ['$event'])
  doSomethingOnScroll($event:Event){
    let scrollOffset = $event;
    console.log("scroll: ", scrollOffset);
  }
}
