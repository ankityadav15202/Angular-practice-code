import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  standalone: true, // Declare this as a standalone component
  imports: [ReactiveFormsModule ,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
    registrationForm: FormGroup;

  constructor() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      skills: new FormArray([
        new FormControl('', [Validators.required]),
      ])
    });
  }

  get skills(): FormArray{
    return this.registrationForm.get('skills') as FormArray;
  }

  addSkill(skills : string){
    this.skills.push(new FormControl(skills, Validators.required))
  }


  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
    } else {
      console.error('Form is invalid!');
    }
  }
}