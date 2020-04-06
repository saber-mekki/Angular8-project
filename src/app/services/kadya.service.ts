import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Kadya } from './kadya';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class KadyaService {

  constructor(private http:HttpClient) { }
  public doRegistration(kadya):Observable<any>{
    return this.http.post("http://localhost:9000/kadya/save",kadya,{responseType:'text' as 'json'});
  }

  public getall():Observable<any>{
    return this.http.get("http://localhost:9000/kadya/all");  
  }
public deletekadya(id:Kadya):Observable<any>{
  return this.http.post('http://localhost:9000/kadya/delete'+id,{responseType:'text' as 'json'})
}


}
