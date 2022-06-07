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
    // this.setName('juan')


  }

  setName(name: string) {
    this.name = name;
    setTimeout(() =>{
      this.name = 'beto'
      this.isVisible = true
    }, 3000)
  };

  public setMessageLolo(e: any) {
    console.log(e)
  }

  public toggleVisible() {
    this.isVisible = !this.isVisible
  }


}

