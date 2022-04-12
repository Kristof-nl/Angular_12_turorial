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
  count: number = 0;
  name: string = "Peter";
  disable: boolean = false;
  show= false;
  color = "orange";
  bgColor = "red";
  users = ['Anil', "Bruce", "Sam", "Mark"]
  userDetails = [
    {name: 'Anil', email: 'anil@test.com', phone: '12345', accounts: ['facebook', 'gmail', 'twitter']},
    {name: 'Bruce', email: 'bruce@test.com', phone: '32888', accounts: ['naszaklasa', 'Instagram', 'twitter']},
    {name: 'Sam', email: 'sam@test.com', phone: '277745', accounts: ['Twich', 'gmail', 'facebook']},
    {name: 'Mark', email: 'mark@test.com', phone: '856342', accounts: ['Skype', 'Outlook', 'twitter']}
  ]


  updateColor() {
    this.color = "skyblue";
    this.bgColor = "yellow"
  }




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

  counter(type: string)
  {
    type === 'add' ? this.count++ : this.count--;
  }
}
