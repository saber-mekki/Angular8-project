import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  constructor(private http: HttpClient) { }

  enregister(statistique){
    return this.http.post("http://localhost:9000/statistique/save",statistique,{responseType:'text' as 'json'});
  }

  getStat(){
    return this.http.get("http://localhost:9000/statistique/getValues")
  }
}
