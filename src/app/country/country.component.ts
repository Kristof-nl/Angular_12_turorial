import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
    <h2 class="custom">
      Country
    </h2>
  `,
  styles: [
    `
      .custom{
        color: blue;
      }
    `
  ]
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
