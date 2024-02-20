import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  display: string = '';

  constructor() { }

  toDisplay(input: string) {
    this.display += input;
  }

  math() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Error';
    }
  }

  clear() {
    this.display = '';
  }
}
