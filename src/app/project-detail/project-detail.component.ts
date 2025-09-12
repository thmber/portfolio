import { Component, Input, OnInit, inject } from '@angular/core';
import { StickerButtonComponent } from '../sticker-button/sticker-button.component';
import { CommonModule, ViewportScroller } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import {MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import { AppService } from '../app.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [StickerButtonComponent, CommonModule, HeaderComponent, MatDialogModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router) { }
  
  Data = inject(AppService);

  receiveMessage($event:number){
    setTimeout(() => {
      this.currentLanguage = $event;
    }, 100);
  } 


  @Input({}) projectNumber:any;
  @Input({}) currentLanguage:any;
  @Input({}) backgroundLight:boolean = false;


  backProjectDetails = ['Zurück', 'Go back']
  nextProjectDetails = ['Weiter', 'Next']
  

  projectTitles = [`Wizards' King`,'Pokedex', 'Join', 'Ring XO'];

  testen = ['Testen', 'Live Test']

  

  ngOnInit(): void {
    this.projectNumber = this.route.snapshot.paramMap.get('id');
    this.currentLanguage = this.route.snapshot.paramMap.get('language')
    window.scroll({ 
      top: 0, 
      left: 0, 
    });

  }
  
  nextProject(){
      this.projectNumber++
    if (this.projectNumber == 4) {
      this.projectNumber = 0;
    }
  }

  goBackToHeroSection(language:number){
    this.router.navigate(['header-hero', `${language}`])
  }

}