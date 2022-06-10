import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy {

  constructor( private storeService: StoreService ) { }

  ngOnInit(): void {
    console.log('Customers Init')
  }

  ngOnDestroy(): void {
    console.log('Customers Destroy')
  }

  addProduct() {
    const product = {
      name: 'Milanesas Pollo',
      category: 'Congelados',
      price: Math.ceil(Math.random() * 100)
    }
    this.storeService.addProduct(product)
  }

}
