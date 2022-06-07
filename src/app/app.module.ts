import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ValenComponent } from './components/valen/valen.component';
import { LoloComponent } from './components/lolo/lolo.component';

@NgModule({
  declarations: [
    AppComponent,
    ValenComponent,
    LoloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
