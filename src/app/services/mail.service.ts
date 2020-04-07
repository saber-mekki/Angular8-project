import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { }

  public sendContactMail(message){
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post("http://localhost:9000/mail/contactMail",message, {headers: header})
  }

}