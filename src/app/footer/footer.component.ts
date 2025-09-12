import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router){

  }

  
  letters:string[]= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  logoLetter1:string = 'T';
  logoLetter2:string = 'M';
  legalLink = ['Rechtliches', 'Legal Notice']

  @Input({}) lightModus:boolean = false;
  @Input({}) currentLanguage:number = 1;


  // hier werden die Buchstaben erstellt, die sich beim Hovern des Logos ändern. 

  changeLetter(){
    setTimeout(() => {
      this.changeBothLetters();
      setTimeout(() => {
        this.changeBothLetters();
        setTimeout(() => {
          this.changeBothLetters();
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

  // beim jeweiligen Hovern entstehen zufällige Buchstaben durch diese Funktion

  changeBothLetters(){
    this.logoLetter1 = this.letters[Math.floor(Math.random() * 25)];
      this.logoLetter2 = this.letters[Math.floor(Math.random() * 25)];
  }



  goToLegal(language:number){
      this.router.navigate(['legalnotice', `${language}`])
  }

  goBackToTop(){
    window.scroll({ 
      top: 0, 
      left: 0, 
    });
  }
}