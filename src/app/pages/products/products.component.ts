import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('Productos Init')
  }

  ngOnDestroy(): void {
    console.log('Productos Destroy')
  }

}
