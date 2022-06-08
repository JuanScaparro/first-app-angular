import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { IUser } from './interfaces/iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  public navBarTitle: string;
  public mockMessage: string;
  public footerCopy: string;
  public homeUserData: IUser[];
  private users: any;


  constructor( private userService: UserService ){
    this.navBarTitle = 'Distribuidora Naturalmente';
    this.mockMessage = 'Este es un mensaje de app component para mock component';
    this.footerCopy = 'Desarrollado por Juan Manuel';
    this.homeUserData = [];
  };

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => this.userData( data )
    )
  };

  userData( data: any ) {
    this.users = data;
    this.homeUserData = this.users.users;
    console.log(this.homeUserData)
  };

};

