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
  displayVal: string ="";

  getVal() {
    return "Code step by step"
  }

  getName(name: string | number) {
    alert(name);
  }

  getData(val: string) {
    console.warn(val)
  }

  getValue(val: string) {
    console.warn(val);
    this.displayVal = val;
  }
}
