import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  template: `
    <h2 class="custom">
      Students list
    </h2>
  `,
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
