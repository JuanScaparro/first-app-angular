import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('Ventas Init')
  }

  ngOnDestroy(): void {
    console.log('Ventas Destroy')
  }

}
