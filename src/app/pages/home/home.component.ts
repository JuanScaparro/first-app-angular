import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  @Input() homeUserData: IUser[];
  
  private users: any;
  private userSubscription$: Subscription;
  
  constructor( private userService: UserService ) {
    this.homeUserData = [];
    this.userSubscription$ = new Subscription;
   }

  ngOnInit(): void {
    
    console.log( 'Home Init' )
    this.userSubscription$ = this.userService.getUsers().subscribe(
      (data: any) => this.userData( data.users )
    );
  };

  ngOnDestroy(): void {
    console.log( 'Home Destroy' );
    this.userSubscription$.unsubscribe();
  };

  userData( users: any ) {
    this.homeUserData = users;
    console.log( this.homeUserData );
    this.mappedDataUser();
  };

  private mappedDataUser( ) {
    const mappedUsers = this.homeUserData.map( user => {
      const {id, firstName, maidenName, lastName, birthDate, age, gender } = user
      return {
        id,
        firstName,
        maidenName,
        lastName,
        birthDate,
        age,
        gender
      }
    })
    console.log('mappedUsers =>', mappedUsers)
  }

};
