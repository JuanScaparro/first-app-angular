import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lolo',
  templateUrl: './lolo.component.html',
  styleUrls: ['./lolo.component.css']
})
export class LoloComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
