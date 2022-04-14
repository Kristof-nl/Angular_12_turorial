import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-deatail',
  templateUrl: './user-deatail.component.html',
  styleUrls: ['./user-deatail.component.css']
})
export class UserDeatailComponent implements OnInit {

  constructor() { }
  @Input() item: {name:string, email:string} = {name:'', email:''};



  ngOnInit(): void {
  }

}
