import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Kadya } from 'src/app/services/kadya';
import { KadyaService } from 'src/app/services/kadya.service';
@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss']
})
export class VolumesComponent implements OnInit {
  Kadya:Kadya;
  userForm: FormGroup;
  message:any;
  test=true;
  list:any;
  constructor(private routr:ActivatedRoute,private router:Router,
    private kadyaService : KadyaService) {
 
  

   }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      raison: new FormControl('', [Validators.required]),
      corps: new FormControl('', [Validators.required]),
    });

  }
  register(){
    let resp=this.kadyaService.doRegistration(this.userForm.value);
    resp.subscribe((data)=>this.message=data);
    console.log("good")
    this.list=this.userForm.value;
 console.log(this.list)
 this.test=false;
  }
}
