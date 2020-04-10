import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
userForm: FormGroup;
hide = true;
hideConfirm = true;
message:any;
list:any;
  constructor(private routr:ActivatedRoute,private router:Router,
    private volunteerService : VolunteerService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      corps: new FormControl('', [Validators.required]),
    });
 this.volunteerService.getall().subscribe(
  data=>{
    
    this.list=data;
  } 
 )
 
  }
  register(){
    let resp=this.volunteerService.doRegistration(this.userForm.value);
    resp.subscribe((data)=>this.message=data);
    console.log("good")
 
 console.log("good")

  }
}
