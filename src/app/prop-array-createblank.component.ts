import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';

import { RxFormGroup } from '@rxweb/reactive-form-validators';

import { User, addressFormGroup } from './user.model';

@Component({
  selector: 'app-propArray-createblank',
  templateUrl: './prop-array-createblank.component.html',
})
export class PropArrayCreateblankComponent implements OnInit {
  userFormGroup: RxFormGroup;

  constructor() {}

  ngOnInit() {
    this.userFormGroup = User();
  }

  addAddress() {
    let addresses = this.userFormGroup.controls.addresses as FormArray;
    addresses.push(addressFormGroup());
  }

  onSubmit() {
    console.log(this.userFormGroup);
  }
}
