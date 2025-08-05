import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import * as moment from "moment";  // moment js libray mai all methods and property used



export class CustomValidators {

//phone number validator
// static phoneNumberValidator(control : AbstractControl) : ValidationErrors | null{
//     const val = control.value as string ;
 
//      if(!val){
//         return null //value nsl tr null return kro 
//     } 
//     const regex = /^[6-9]\d{9}$/
 
   
//     let isValid = regex.test(val) //test
//     if(isValid){
//         return null
//     }else{
//       return{
//         inValidPhoneNumber: `10 digit and starts with 6,7,8 or 9`
//       }  
//     }
// }


static phoneNumberValidator() : ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
      const val = control.value as string ;
 
     if(!val){
        return null //value nsl tr null return kro 
    } 
    const regex = /^[6-9]\d{9}$/
 
   
    let isValid = regex.test(val) //test
    if(isValid){
        return null
    }else{
      return{
        inValidPhoneNumber: `10 digit and starts with 6,7,8 or 9`
      }  
    }
  }
}



static dateOfBirthValidator () :  ValidatorFn{
    return (control : AbstractControl) : ValidationErrors | null => {
          const val = control.value;

          console.log(val);

            let dob = moment(val, 'YYYY-MM-DD')
             console.log(dob);

             const today = moment()
             console.log(today)

             //const diff = today.diff(dob, "hour")
             //const diff = today.diff(dob, "days")
            // const diff = today.diff(dob, "months")
             const diff = today.diff(dob, "years")

             if(diff >= 21){
                return null
             }else{
                return {
                invalidValidDateBirth : `Youmust be at least 21 years old `
                }
             }
             console.log(diff)

          return null
    }
}


// *************************pancard ch pattern validation 
static panCardValidator () : ValidatorFn {// vadiation funcrtion sathi regular expression pahijay  const regex = /^[A-Z]{4}[0-9]{4}[A-Z]{1}$/;
  return  (control : AbstractControl) : ValidationErrors | null => {
    let val = control.value as string ;
   
   if(!val){
    return null
   }
   
    const regex = /^[A-Z]{4}[0-9]{4}[A-Z]{1}$/; //regular expercence vr ek method aastay test >>	5 uppercase letters + 4 digits + 1 letter
    let isValid = regex.test(val)

    if(isValid){
      return null
    }else{
      return {
        inValidPancard : `Invalid Pan Number (AAAAA1111Z)`
      }
    }



  }

}

//**********************************function adhar card stahi
static adharCardValidator() : ValidatorFn{
  return (control : AbstractControl) : ValidationErrors | null => {
       let val = control.value as string;

       if(!val){ // he nahi write krl tr required sobt error show hotay.
        return null

       }

       //regular expresion
       const regex = /^\d{12}$/  //Exactly 12 digits

      // let isValid = regex.test(val)
      return regex.test(val) ? null : {invalidAdharNumber : 'Invalid Adhar Number (12 digit)'}
  }
}
}