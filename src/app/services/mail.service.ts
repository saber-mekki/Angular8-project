import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { }

  public sendContactMail(message){
    return this.http.post("http://localhost:9000/mail/contactMail",message)
}
}