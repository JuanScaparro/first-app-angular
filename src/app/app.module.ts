import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { ProductsComponent } from './pages/products/products.component';
import { SalesComponent } from './pages/sales/sales.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { MockComponent } from './shared/mock/mock.component';

import { UserService } from './services/user.service';
import { ObjToArrayPipe } from './pipes/obj-to-array.pipe';
import { CartComponent } from './shared/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
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
    path: '**',
    redirectTo: ''
  }
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
    SalesComponent,
    NotfoundComponent,
    MockComponent,
    ObjToArrayPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
    providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
