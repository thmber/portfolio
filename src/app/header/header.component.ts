import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  currentLanguage = 1;
  test = 0;
  drawingShown = false;
  letters:string[]= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  logoLetter1:string = 'T';
  logoLetter2:string = 'M';
  aboutMe:string[] = ['Über mich', 'About me'];
  contact:string[] = ['Kontakt', 'Contact'];
  projects:string[] = ['Projekte', 'Projects'];
  burgerMenuOpen:boolean = false;

  constructor(private route: ActivatedRoute) { }

  @Input({}) backgroundLight:boolean = false;
  @Input({}) passedLanguage:number = 1;
  @Input({}) routedFromHero:boolean = false;
  @Output() receiveMessage = new EventEmitter<number>();


  intervalTimed:any;
  burgerDrawn:boolean = false;


  passData() {
    this.receiveMessage.emit(this.currentLanguage);
  }

  ngOnInit(): void {
    if (this.routedFromHero) {
      this.currentLanguage = this.passedLanguage;
    }
    if (this.route.snapshot.paramMap.get('language') == '0') {
      this.currentLanguage = 0;
      this.receiveMessage.emit(this.currentLanguage);
    }
  }


  changeLanguage(){
    if (this.currentLanguage == 1) {
      this.currentLanguage = 0;
    }
    else{
      this.currentLanguage = 1;
    }
  }

  changeLetter(){
    setTimeout(() => {
      this.changeBothLetters();
      setTimeout(() => {
        this.changeBothLetters();
        setTimeout(() => {
          this.changeOneLetter();
          setTimeout(() => {
            this.logoLetter1 = 'T'
            this.logoLetter2 = this.letters[Math.floor(Math.random() * 25)];
            setTimeout(() => {
              this.logoLetter2 = this.letters[Math.floor(Math.random() * 25)];
              setTimeout(() => {
                this.logoLetter2 = 'M';
              }, 25);
            }, 25);
          }, 25);
        }, 25);
      }, 25);
    }, 25);
  }


  changeBothLetters(){
    this.logoLetter1 = this.letters[Math.floor(Math.random() * 25)];
      this.logoLetter2 = this.letters[Math.floor(Math.random() * 25)];
  }

  changeOneLetter(){
    this.logoLetter1 = this.letters[Math.floor(Math.random() * 25)];
  }

  openBurgerMenu(){
    if (!this.burgerMenuOpen) {
      this.burgerMenuOpen = true;
    }
    else{
      this.burgerMenuOpen = false;
    }
  }

  showDrawing(){
    this.drawingShown = true;
  }

  doNotShowDrawing(){
    this.drawingShown = false;
  }
}