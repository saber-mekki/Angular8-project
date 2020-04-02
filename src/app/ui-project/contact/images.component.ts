import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
 imageForm: FormGroup;
  constructor() {
    this.imageForm = new FormGroup ({
      name: new FormControl('', Validators.required),
      registry: new FormControl('')
    })
  }

  ngOnInit() {
  }

}
