import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('Home Init')
  }

  ngOnDestroy(): void {
    console.log('Home Destroy')
  }

}
