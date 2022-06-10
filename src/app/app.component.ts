import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  
  public navBarTitle: string;
  public mockMessage: string;
  public footerCopy: string;


  constructor(){
    this.navBarTitle = 'Distribuidora Naturalmente';
    this.mockMessage = 'Este es un mensaje de app component para mock component';
    this.footerCopy = 'Desarrollado por Juan Manuel';
  };

  ngOnInit() {
  };

  ngOnDestroy(): void {
  };

};

