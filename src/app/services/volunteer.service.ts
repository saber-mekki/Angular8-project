import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Volunteer } from './volunteer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private http:HttpClient) { }



  public doRegistration(volunteer):Observable<any>{
    return this.http.post("http://localhost:9000/volunteer/save",volunteer,{responseType:'text' as 'json'});
  }
  public getall():Observable<any>{
    return this.http.get("http://localhost:9000/volunteer/all");  
  }

}
