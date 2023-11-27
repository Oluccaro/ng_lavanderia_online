
import { Directive, OnInit } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[appNotzero]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NotzeroDirective,
    multi: true
  }]
})
export class NotzeroDirective implements Validator, OnInit {
  onChange: any;
  onTouched: any;

  constructor() {}
  ngOnInit(): void {}

  validate(c: FormControl) {
    let v: number = +c.value;
    if (isNaN(v)){
      return { 'notzero': true, 'requiredValue': 1 }
    }
    if (v < 1) {
      return { 'notzero': true, 'requiredValue': 1 }  
    }
    return null;
  }

}