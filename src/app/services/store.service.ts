import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  private readonly _productsSource = new BehaviorSubject<any[]>([]);

  // Exposed observable (read-only).
  readonly products$ = this._productsSource.asObservable();




  constructor() { }


  getProducts(): any[] {
    return this._productsSource.getValue();
  }

  private _setProducts(products: any[]): void {
    this._productsSource.next(products);
  }

  addProduct(product: any): void {
    const products = [...this.getProducts(), product];
    this._setProducts(products);
  }

}
