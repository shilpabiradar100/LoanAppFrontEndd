import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../validators/custom-validators';
import { COUNTRIES_META_DATA } from '../../const/countriesData';
import { Icountry } from '../../model/country';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {
  contriesArr : Array<Icountry> = COUNTRIES_META_DATA ;  //Array hai

personalDetailsForm !: FormGroup;
documentUploadForm !: FormGroup;
addressDetailForm !: FormGroup;


  constructor(private fb : FormBuilder) { 
    //personal detail
    this.personalDetailsForm = this.fb.group({
      name : [null, [Validators.required]],
       email : [null, [Validators.required]],
       phone : [null, [Validators.required, CustomValidators.phoneNumberValidator()]],
       dob : [null, [Validators.required,CustomValidators.dateOfBirthValidator()]],
      gender : [null, [Validators.required]],
      maritalStatus: ['', [Validators.required]],
    })

    //document form
    this.documentUploadForm = this.fb.group({
      pan: [null, [Validators.required, CustomValidators.panCardValidator()]],
      adhar : [null, [Validators.required, CustomValidators.adharCardValidator()]]
    })

    //AddressDeatilForm
    this.addressDetailForm = this.fb.group({
        permanentAddress : this.fb.group({
            addressline1 : [null, [Validators.required]],
            addressline2 : [null, [Validators.required]],
            city : [null, [Validators.required]],
            state: [null, [Validators.required]],
            pincode : [null, [Validators.required]],
            country: [null, [Validators.required]],
        }),
       currentAddress : this.fb.group({
            addressline1 : [null, [Validators.required]],
            addressline2 : [null, [Validators.required]],
            city : [null, [Validators.required]],
            state: [null, [Validators.required]],
            pincode : [null, [Validators.required]],
            country: [null, [Validators.required]],
       })
     })

  }

  ngOnInit(): void {
  }


  onSubmit(){
    //console.log(this.personalDetailsForm);
    console.log(this.documentUploadForm);
  }

}
