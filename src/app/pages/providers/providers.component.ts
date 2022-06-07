import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('Proveedores Init')
  }

  ngOnDestroy(): void {
    console.log('Prodeedores Destroy')
  }

}
