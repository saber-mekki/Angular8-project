import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent implements OnInit {
  containerForm: FormGroup;
  portMapping: FormArray;

  constructor() { }

  ngOnInit() {
    this.containerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      registry: new FormControl('', [Validators.required]),
      portMapping: new FormArray([]),
    });
  }
  deletePort(i): void {
    if (this.portMapping.length > 1) {
      this.portMapping = this.containerForm.get('portMapping') as FormArray;
      this.portMapping.removeAt(i);
    }
  }
  addPort(): void {
    this.portMapping = this.containerForm.get('portMapping') as FormArray;
    this.portMapping.push(this.createPort());
  }
  createPort(): FormGroup {
    return new FormGroup({
       portIn: new FormControl(null, [Validators.required, Validators.min(0)]),
       portOut: new FormControl(null, [Validators.required, Validators.min(0)]) });
  }
  setValue(event) {
    this.containerForm.controls['registry'].setValue(event);
  }
}
