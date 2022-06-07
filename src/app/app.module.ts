import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { ProductsComponent } from './pages/products/products.component';
import { SalesComponent } from './pages/sales/sales.component';


const routes: Routes = [
  {
    path: 'clientes',
    component: CustomersComponent
  },
  {
    path: 'proveedores',
    component: ProvidersComponent
  },
  {
    path: 'productos',
    component: ProductsComponent
  },
  {
    path: 'ventas',
    component: SalesComponent
  },
  {
    path: '',
    component: HomeComponent
  },
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomersComponent,
    ProvidersComponent,
    ProductsComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
