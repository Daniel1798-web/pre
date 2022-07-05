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

  @HostListener('scroll', ['$event'])
  onElementScroll(_$event: any) {
  console.log( "esto"+_$event)
  }
}
