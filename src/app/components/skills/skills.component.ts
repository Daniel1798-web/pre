import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  angularText:string = "My favorite framework, it's so powerful and always amazes me (this site has been built from scratch using Angular)"
  constructor() { }

  ngOnInit(): void {
  }

}
