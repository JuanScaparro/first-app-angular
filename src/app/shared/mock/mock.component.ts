import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit {


  @Input() message: string;

  constructor() { 
    this.message = '';
  }

  ngOnInit(): void {
  }

}
