import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkExperienceComponent} from './work-experience/work-experience.component';
import {EducationComponent} from './education/education.component';
import {TechnicalSkillsComponent} from './technical-skills/technical-skills.component';
import {ProjectsComponent} from './projects/projects.component';
import {MiscComponent} from './misc/misc.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'work-experience',
    component: WorkExperienceComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'technical-skills',
    component: TechnicalSkillsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'misc',
    component: MiscComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
