import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProjectShotsComponent} from '../project-shots/project-shots.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  openDialog(projectName: string) {
    const dialogRef = this.dialog.open(ProjectShotsComponent, {
      height: 'auto',
      width: '80vw',
      data: {name: projectName}
    });
  }
}
