import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      raison: new FormControl('', [Validators.required]),
      corps: new FormControl('', [Validators.required]),
    });
  
   
 }}

