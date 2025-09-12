import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  @Input({}) currentLanguage:number = 1;
  stickerMode:number = 0;
  pullMessage = ['Hier ziehen', 'Pull to peel']
  alsoInterested  = ['Außerdem interessiere ich mich für:', `Also I'm interested in diving into:`]
  myStack = ['WAS ICH KANN', 'MY STACK'];
  skillsText = ['Ich habe Erfahrung in der Umsetzung von Projekten mit einer Vielzahl von Frontend-Technologien und -Konzepten gesammelt. Mit meiner ausgeprägten Wachstumsorientierung bin ich stets auf der Suche nach neuen Bereichen, um meine Skills zu erweitern.'
                ,`I have gained experience in building projects with a variety of frontend technologies and concepts. With a strong growth-mindset, I'm always exploring new areas to enhance my skill set.`,]
  


  pullSticker(){
    if (this.stickerMode == 0) {
      this.stickerMode ++
      setTimeout(() => {
        this.stickerMode++
      }, 425);
    }
    else{
      this.stickerMode = 0;
    }
  }


}
