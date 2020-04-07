import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  contactForm: FormGroup;
  constructor( private mailService: MailService) {
    
  }

  ngOnInit() {
    this.contactForm = new FormGroup ({
      name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    })
  }

  send(){
    if(this.contactForm.status=="VALID"){
      let message=[this.contactForm.value.name,this.contactForm.value.subject,this.contactForm.value.email,this.contactForm.value.message]
      this.mailService.sendContactMail(message).subscribe()
      this.ngOnInit()
    }
    
  }
  
}
