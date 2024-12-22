import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  stepList: any[] = [
    { stepName: 'Basic Details', isComplete: false },
    { stepName: 'Skills', isComplete: false },
    { stepName: 'Experience', isComplete: false },
  ];

  activeStep: any= this.stepList[0]

  changeState(i: number){
    this.activeStep = this.stepList[i]
    console.log(this.activeStep);
    
  }
}
