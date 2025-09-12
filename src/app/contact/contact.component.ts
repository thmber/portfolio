import { Component, inject, Input } from '@angular/core';
import { StickerButtonComponent } from '../sticker-button/sticker-button.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StickerButtonComponent, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

contactMe:string[] = ['KONTAKT', 'CONTACT ME']
contactMeTitle = ['Bereit zur Zusammenarbeit?','Ready to work together'];
placeHolderMail:string[] = ['deinemail@mail.com', 'youremail@email.com']
placeHolderName:string[] = ['Hier kommt dein Name hin', 'Your name goes here']
placeHolderSubject:string[] = ['Hi Thomas, ich habe ein Problem...', 'Hi Thomas, I have a problem ...']
inputTitleName:string[] = ['Wie heißt Du?', `What's your name?`]
inputTitleMail:string[] = ['Wie ist Deine Mail-Adresse?', `What's your email?`]
inputTitleSubject:string[] = [`Wie kann ich Dir helfen?`, 'How can I help you?']
privacyText = [[`Ich habe die`,`I've read the`],[` gelesen und stimme der beschriebenen Datenverarbeitung zu`,` and agree to the processing of my data as outlined`]]
contactMeText = [['Bitte kontaktiere mich über dieses Formular. Ich freue mich darauf, von Dir zu hören, Deine Ideen kennenzulernen und an Deinem Projekt mitzuarbeiten.', 'Please contact me through this form. I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.'],
                ['Ich helfe Dir gern bei der Erstellung einer Website, die Deinen Anforderungen entspricht!',`Feel free to get in touch with your project details. I'd love the opportunity to help create a website that meets your needs!`]] 
contactData = {
  name: '',
  email: '',
  message: '',
  privacyRead: false
          };
  emailError:string[] = [`Huch, das ist noch gültige Email-Adresse!`, 'Hoppla, your email is required!'];
  nameError:string[] = [`Hoppla, hier fehlt dein Name!`, 'Oops your name is missing!'];
  subjectError:string[] = [`Oh, hier fehlt noch ein Nachrichtentext!`, 'Oh, your message is too short!'];
  subjectCorrect:string[] = [`Nachricht`, 'Message'];
  messageSentMessage:string[] = ['Deine Nachricht wurde gesendet!', 'Your message was sent!']
  

  http = inject(HttpClient);

  mailtest = true;
  mailWasSent = false;

@Input({}) currentLanguage:number = 1;

  post = {
    endPoint: 'https://thmahler.net/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailtest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => 
            console.info('send post complete'),
        });
    } else if (this.mailtest) {
      this.animateSentMail(ngForm)

    }
  }

  animateSentMail(ngForm: NgForm) {
    this.mailWasSent = true;
    ngForm.resetForm();
    setTimeout(() => {
      this.mailWasSent = false;
    }, 1500);
  }
}