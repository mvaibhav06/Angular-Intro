import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-2',
  templateUrl: './assignment-2.component.html',
  styleUrl: './assignment-2.component.css',
})
export class Assignment2Component {
  userName = '';

  onClick() {
    this.userName = '';
  }
}
