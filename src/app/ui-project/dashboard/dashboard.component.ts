import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { KadyaService } from 'src/app/services/kadya.service';
import { StatistiqueService } from 'src/app/services/statistique.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //userForm: FormGroup;
  listVolunteers:any;
  kadya:any;
  SatistiqueForm: FormGroup;

  constructor( private kadyaService : KadyaService,private routr:ActivatedRoute,private router:Router, private volunteerService : VolunteerService, private statistiqueService: StatistiqueService) { }

  ngOnInit() {
    this.SatistiqueForm = new FormGroup({
      contamination: new FormControl('', [Validators.required]),
      healing: new FormControl('', [Validators.required]),
      analyse: new FormControl('', [Validators.required]),
      death: new FormControl('', [Validators.required]),
    });

    /*this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      raison: new FormControl('', [Validators.required]),
      corps: new FormControl('', [Validators.required]),
    });*/
    
    this.volunteerService.getNonAcceptedYet().subscribe(
      data=>{
        this.listVolunteers=data;
      })
     
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

acceptVolunteer(id){
this.volunteerService.updateVolenteer(id).subscribe(
  (response)=>{})
    }


save(){
  if(this.SatistiqueForm.status=="VALID"){
  this.statistiqueService.enregister(this.SatistiqueForm.value).subscribe()
  this.ngOnInit()}
}

}

