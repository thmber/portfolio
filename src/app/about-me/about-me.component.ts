import { Component, Input } from '@angular/core';
import { CommonModule} from '@angular/common';



@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss', 
})
export class AboutMeComponent {




  @Input({}) currentLanguage:number = 1;
  
  papersMoving:boolean = false;

  subHeadline = ['WER BIN ICH?',`WHO'S THOMAS?`];
  headlineAboutme = [['Ü','b','e','r','','m','i','c','h'],['A', 'b', 'o', 'u','t', '', ' m', 'e']];
  aboutMeText = ['Als ich zum ersten Mal gesehen habe, wie man mit ein paar Zeilen Code etwas zum Leben erwecken kann, war ich sofort fasziniert. Programmieren gibt mir die Möglichkeit, kreativ zu sein und gleichzeitig logisch zu denken.',
                'When I first saw how you can bring something to life with a few lines of code, I was immediately fascinated. Programming gives me the opportunity to be creative and think logically at the same time.'];
  aboutMeText2 = [`Lass' uns zusammenarbeiten und zusammen etwas Tolles bauen!`, 
                  `Let's collaborate and build something remarkable together!`]
  paper1Text = ['Zuhause in Berlin', 'Based in Berlin'];
  paper2Text = ['Offen für Homeoffice', 'Open to work remote'];
  paper3Text = ['Offen für Ortswechsel', 'Open to relocate']
  buttonText = ['Kontaktieren', `Let's talk`]
  headlineDefaultColor = [true, true, true, true, true, true, true, true];


movePapers(){
  this.papersMoving = true;
}

doNotMovePapers(){
  this.papersMoving = false;
}

changeColor(index:number){
  this.headlineDefaultColor[index] = false;
}

backToDefaultColor(index:number){
  this.headlineDefaultColor[index] = true;
}

}
