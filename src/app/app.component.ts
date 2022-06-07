import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public navBarTitle: string;
  public mockMessage: string;
  public footerCopy: string;

  constructor( private userService: UserService ){
    this.navBarTitle = 'Naturalmente';
    this.mockMessage = 'Este es un mensaje de app component para mock component';
    this.footerCopy = 'Desarrollado por Juan Manuel'
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => console.log(data)
    )
    
  }


}

