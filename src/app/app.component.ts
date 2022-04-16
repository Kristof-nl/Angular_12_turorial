import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = {
    name: "Krzysztof",
    age: 35
  }

  title = 'I like apple';
  today = Date();
  data: any = '';
  num = 100;
  displayVal: string ="";
  count: number = 0;
  name: string = "Peter";
  age:number = 35;
  disable: boolean = false;
  show= false;
  color = "orange";
  bgColor = "red";
  users = ['Anil', "Bruce", "Sam", "Mark"]
  userDetails2 = [
    {name: 'Anil', email: 'anil@test.com', phone: '12345', accounts: ['facebook', 'gmail', 'twitter']},
    {name: 'Bruce', email: 'bruce@test.com', phone: '32888', accounts: ['naszaklasa', 'Instagram', 'twitter']},
    {name: 'Sam', email: 'sam@test.com', phone: '277745', accounts: ['Twich', 'gmail', 'facebook']},
    {name: 'Mark', email: 'mark@test.com', phone: '856342', accounts: ['Skype', 'Outlook', 'twitter']}
  ]
  userData: any = {};
  display = true;
  list:any[]= [];
  userDetails = [
    {name: "Krzysztof", email: "krzysztof@test.com"},
    {name: "Sam", email: "sam@test.com"},
    {name: "Jane", email: "jane@test.com"},
    {name: "Leon", email: "leon@test.com"},
    {name: "Xavier", email: "xavier@test.com"}
  ]

  loginUser(item: any)
  {
    console.warn(item)
  }

  getVal(item: string)
  {
    console.warn(item);
  }

  updateValue(item: string) {
    console.warn(item);
    this.data = item;
  }
  

  // updateData() {
  //   this.data = Math.floor(Math.random()*10);
  // }

  addTask(item: string) {
    this.list.push({id: this.list.length + 1, taskName: item});
    console.warn(item);
  }

  removeTask(id: number)
  {
    this.list = this.list.filter(item => item.id !== id);
  }

    

  getData(data: NgForm) {
    console.warn(data);
    this.userData = data;
  }

  updateColor() {
    this.color = "skyblue";
    this.bgColor = "yellow"
  }


  toggle() {
    this.display = !this.display;
  }

  // getVal() {
  //   return "Code step by step"
  // }

  getName(name: string | number) {
    alert(name);
  }

  // getData(val: string) {
  //   console.warn(val)
  // }

  getValue(val: string) {
    console.warn(val);
    this.displayVal = val;
  }

  counter(type: string)
  {
    type === 'add' ? this.count++ : this.count--;
  }

}
