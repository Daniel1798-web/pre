import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  angularText:string = "My favorite framework, it's so powerful and always amazes me (this site has been built from scratch using Angular)";
  tsText:string = "It was difficult to learn but every day you discover something great like not using 'any' ";
  jsText:string = "The first tool I learned in web development, with infinite uses, the most solid base";
  vueText:string = "It's lightweight, fast, but I didn't like its syntax and the community is small, it was the first framework I learned";
  bugsText:string = "They accompany you from the first day. to exterminate them you have to learn to love them, or at least love the process to solve them. they just need love...";
  nodeText:string = "the power of js in the backend, mailing, data validation, magic, love it"
  acti = false
  constructor() { }

  ngOnInit(): void {
  }

  cli() {
    this.acti = !this.acti
  }

}
