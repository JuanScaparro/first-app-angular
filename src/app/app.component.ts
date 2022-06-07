import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  message = 'HOLA MUNDO!!!';
  name = '';
  isVisible = false;

  arr = ['hola', 'dia', 'feliz']

  constructor(){
  }

  private setName(name: string) {
    this.name = name;
  };

  public setMessageLolo(e: any) {
    console.log(e)
  }

  public toggleVisible() {
    this.isVisible = !this.isVisible
    this.isVisible ? this.setName('Juan') : this.setName('')
    
  }


}

