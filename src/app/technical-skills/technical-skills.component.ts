import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.sass']
})
export class TechnicalSkillsComponent implements OnInit {

  colors = [
    'primary', 'accent', 'warn'
  ];

  constructor() {
  }

  ngOnInit() {
  }

  chipColor() {
    let index = 1;
    console.log(index)
    return this.colors[index];
  }

}
