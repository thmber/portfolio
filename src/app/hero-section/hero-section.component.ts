import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../contact/contact.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AppService } from '../app.service';
import { RouterModule } from '@angular/router';





@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent,
    AboutMeComponent, SkillsComponent, ProjectsComponent, FooterComponent,
    ContactComponent, MatDialogModule, RouterModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {


  currentLanguage = 1;
  lettersHovered:number[] = [-1, -1];
  hello = [['Hallo Welt','Ich bin THOMAS MAHLER'], ['Hello World',`I'm THOMAS MAHLER`]]
  nameOrHello = 0;
  getTouch:string[] = ['Loslegen', 'Get in Touch'];
  polaroidSmile:string = `:)`;
  testarray = [1, []];
  coloredPicture:boolean = false;
  


  receiveMessage($event:number){
      this.currentLanguage = $event;
  } 

  Data = inject(AppService)



  changeCases(letter:string, index:number, titleOnorTwo:number){
     if (letter.toLowerCase() == letter && this.lettersHovered[titleOnorTwo] == index) {
        return letter.toUpperCase();
      }
     if (letter.toUpperCase() == letter && this.lettersHovered[titleOnorTwo] == index){
        return letter.toLowerCase();
      }
    else{
      return letter; 
    }
  }

  mouseOnTitle(index:number, whichTitle:number){
    this.lettersHovered[whichTitle] = index;
  }

  mouseLeftTitle(whichTitle:number){
    this.lettersHovered[whichTitle] = -1;
  }

  showName(){
    this.nameOrHello = 1;
  }

  backToHello(){
    this.nameOrHello = 0;
  }

  showSmile(){
    this.polaroidSmile = `:D`
  }

  showBracket(){
    this.polaroidSmile = `:)`
  }

  showColors(){
  this.coloredPicture = true;
  }

  doNotShowColors(){
    this.coloredPicture = false;
  }
}
