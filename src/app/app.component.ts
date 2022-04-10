import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '12';
  data = 'hello code'
  num = 100;

  getVal() {
    return "Code step by step"
  }
}
