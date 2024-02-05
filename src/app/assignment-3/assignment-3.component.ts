import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-3',
  templateUrl: './assignment-3.component.html',
  styleUrl: './assignment-3.component.css',
})
export class Assignment3Component {
  displayPara = true;
  clicks = [];
  index = 0;

  onClick() {
    this.displayPara = !this.displayPara;
    this.index++;
    // this.clicks.push(this.index);
    this.clicks.push(new Date());
  }
}
