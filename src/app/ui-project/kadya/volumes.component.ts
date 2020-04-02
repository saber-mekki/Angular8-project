import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss']
})
export class VolumesComponent implements OnInit {
  volumeForm: FormGroup;
  userForm: FormGroup;
  constructor() {
 
    this.userForm = new FormGroup({
      lastName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      cause: new FormControl('', [Validators.required]),
  });



   }

  ngOnInit() {
  }

}
