import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor( private storeService: StoreService ) { }

  ngOnInit(): void {
    console.log('Productos Init')
    this.storeService.products$.subscribe( prods => console.log(prods))
  }

  ngOnDestroy(): void {
    console.log('Productos Destroy')
  }

}
