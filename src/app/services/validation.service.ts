import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

let currentTitle = "";

@Injectable({
  providedIn: 'root'
})

export class ValidationService {

  constructor() { }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any): string {
    let config = {
      'required': 'Required',
      'title': "This title already exists",
      'minlength': `Min length ${validatorValue.requiredLength}`,
      'maxlength': `Max length ${validatorValue.requiredLength}`,
      'year': "Invalid Year",
      'max': `Max value ${validatorValue.max}`,
      'pattern': "Invalid pattern"
    };

    return config[validatorName];
  }

  static yearValidator(control: FormControl): object {
    const year: number = new Date(control.value.toString()).getFullYear();

    if (year <= new Date().getFullYear()) {
      return null
    } else {
      return { 'year': true }
    }
  }

  static titleValidator(control: FormControl, titles: Array<string>): object {
    const title = control.value.toLowerCase();

    if (!control.dirty && control.value != "") {
      currentTitle = title;
    }

    if (currentTitle == title) {
      return null;
    }

    if (!titles.includes(title)) {
      return null;
    } else {
      return { 'title': true }
    };
  };
}
