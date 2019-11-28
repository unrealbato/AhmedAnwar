import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatButtonModule, MatChipsModule, MatGridListModule, MatExpansionModule, MatDialogModule, MatRippleModule
} from '@angular/material';

import {WorkExperienceComponent} from './work-experience/work-experience.component';
import {EducationComponent} from './education/education.component';
import {TechnicalSkillsComponent} from './technical-skills/technical-skills.component';
import {ProjectsComponent} from './projects/projects.component';
import {MiscComponent} from './misc/misc.component';
import { ProjectShotsComponent } from './project-shots/project-shots.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    EducationComponent,
    TechnicalSkillsComponent,
    ProjectsComponent,
    MiscComponent,
    ProjectShotsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    MatRippleModule,
  ],
  entryComponents: [
    ProjectShotsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
