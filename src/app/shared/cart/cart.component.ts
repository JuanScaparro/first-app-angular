import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any[] = [];
  public totalProducts: number = 0;
  public totalPrice: number = 0;

  constructor( private storeService: StoreService ) { }

  ngOnInit(): void {
    this.storeService.products$.subscribe( products => {
      this.products = products;
      this.totalProducts = products.length;
      // total price con reduce
    } )
  }

}
