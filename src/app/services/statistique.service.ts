import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  constructor(private http: HttpClient) { }

  enregister(statistique){
    return this.http.post("http://92.222.67.238:9000/statistique/save",statistique,{responseType:'text' as 'json'});
  }

  getStat(){
    return this.http.get("http://92.222.67.238:9000/statistique/getValues")
  }
}
