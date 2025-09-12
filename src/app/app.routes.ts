import { Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';


export const routes: Routes = [
    {path: '', component: HeroSectionComponent},
    {path: 'app-projects', component: ProjectsComponent},
    {path: 'project-detail/:id/:language', component: ProjectDetailComponent},
    {path:'legalnotice/:language', component:LegalnoticeComponent},
    {path:'header-hero/:language', component:HeroSectionComponent}
];
