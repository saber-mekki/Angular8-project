import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { KadyaService } from 'src/app/services/kadya.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userForm: FormGroup;
  list:any;
  kadya:any;
  constructor( private kadyaService : KadyaService,private routr:ActivatedRoute,private router:Router, private volunteerService : VolunteerService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      raison: new FormControl('', [Validators.required]),
      corps: new FormControl('', [Validators.required]),
    });
    this.volunteerService.getall().subscribe(
      data=>{
      
        this.list=data;
      } 
     )
     
 this.kadyaService.getall().subscribe(
   data=>{
this.kadya=data;
   }
 )

     
   
 }
deleteVolunteer(id){
  this.volunteerService.deleteVolenteer(id).subscribe
  (data=>{
    this.ngOnInit();
  })


}

deleteKadya(id){
  this.kadyaService.deletekadya(id).subscribe
  (data=>{
    this.ngOnInit(); 
  })


}

updateVolunteer(volunteer){
this.volunteerService.updateVolenteer(volunteer).subscribe(
  (response)=>{
    
  }
)
}

}

