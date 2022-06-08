import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  @Input() homeUserData: IUser[];

  constructor() {
    this.homeUserData = [];
   }

  ngOnInit(): void {
    console.log('Home Init')
  }

  ngOnDestroy(): void {
    console.log('Home Destroy')
  }

}
