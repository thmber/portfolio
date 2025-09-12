import { CommonModule } from '@angular/common';
import { Component, inject, Input} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-legalnotice',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './legalnotice.component.html',
  styleUrl: './legalnotice.component.scss'
})
export class LegalnoticeComponent {
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  @Input({}) currentLanguage:any;

    Data = inject(AppService);
  

  receiveMessage($event:number){
        setTimeout(() => {
      this.currentLanguage = $event;
    }, 100);
  } 


  
ngOnInit(): void {
  this.currentLanguage = this.route.snapshot.paramMap.get('language')
  window.scroll({ 
    top: 0, 
    left: 0, 

});
}

goBackToHeroSection(language:number){
  this.router.navigate(['header-hero', `${language}`])
}


}
