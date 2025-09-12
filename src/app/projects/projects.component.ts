import { CommonModule} from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { StickerButtonComponent } from '../sticker-button/sticker-button.component';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HeaderComponent, StickerButtonComponent, ProjectDetailComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @Input({}) currentLanguage:number = 1;

  craft = ['MEIN HANDWERK', 'MY CRAFT']
  projectHeadlines = ['Projekte', 'Projects']
  projectDetails = ['Projekt Details', 'Project Details']
  projectHeadlineText = ['Hier sind meine Coding-Fähigkeiten in Aktion: Jedes Projekt steht für meinen Ansatz, benutzerfreundliche Designs mit effizientem Code umzusetzen.',
                        'Take a look at some of my projects and see my front-end skills in action. Each project highlights my approach to building responsive, user-friendly designs with efficient code.']
  bonus = [`Schau Dir die 'Projekt Details' an und entdecke ein Bonus Projekt!`, `Click 'Project Details' to discover a secret Bonus Project! `]
  projectTitles = ['', 'Pokedex', 'Join'];
  projectDescription = [['Objektorientiertes Jump-and-Run-Spiel. Hilf dem Zauberer, seinen Bruder zu finden, und kämpfe dich durch 3 atemberaubende, atmosphärische Levels!',
                        'Jump and run game based on object-oriented approach. Help the wizard find his brother and fight your way through 3 dazzling, atmospheric levels!'
                        ],
                      ['Eine Übersicht aller Pokémons, erstellt in JS und HTML, wunderschön gestaltet mit CSS. Sortiere die Karten nach allen möglichen Statistiken und finde dein Lieblings-Pokémon!',
                        'Index of Pokemons, build in JS and Html, beautifully styled with CSS. Sort the cards by all kinds of stats and find your favourite Pokemon!'], 
                      ['Task Manager, inspiriert durch das Kanban System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
                        'Task Manager inspired by the Kanban System. Create and Organise Tasks using drag and drop functions, assign users and categories'
                       ]]


  constructor(private router: Router){
  }


  goToProjectDetail(id:number, language:number){
    this.router.navigate(['project-detail', `${id}`, `${language}`])
  }

}
