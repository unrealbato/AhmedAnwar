import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-project-shots',
  templateUrl: './project-shots.component.html',
  styleUrls: ['./project-shots.component.sass']
})
export class ProjectShotsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit() {
  }

  shotSrc() {
    if (this.data.name === 'ad3ely') {
      return 'assets/projects/ad3ely_1.JPG';
    }
    if (this.data.name === 'salon') {
      return 'assets/projects/salon_1.JPG';
    }
    if (this.data.name === 'dr-egypt') {
      return 'assets/projects/dr-egypt_1.JPG';
    }
    if (this.data.name === 'viendofit') {
      return 'assets/projects/viendofit_1.JPG';
    }
  }
}
