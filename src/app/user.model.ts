import {
  RxwebValidators,
  RxFormBuilder,
  RxFormGroup,
} from '@rxweb/reactive-form-validators';
import { FormArray } from '@angular/forms';

// RxFormBuilder create object
const formBuilder = new RxFormBuilder();

export const addressFormGroup = () => {
  return <RxFormGroup>formBuilder.group({
    country: [null, [RxwebValidators.required()]],
    city: [null, [RxwebValidators.required(), RxwebValidators.unique()]],
  });
};

export const User = (res: any = null) => {
  let formObject: any = {
    emailAddress: ['', [RxwebValidators.required()]],
    addresses: formBuilder.array([addressFormGroup()]),
  };

  // create form
  const form: any = formBuilder.group(formObject);

  if (res) {
    form.patchModelValue(res);
  }

  form.commit();

  return form;
};
