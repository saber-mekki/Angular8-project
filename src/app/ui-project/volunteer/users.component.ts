import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
userForm: FormGroup;
hide = true;
hideConfirm = true;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      lastName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
  });
  }

}
