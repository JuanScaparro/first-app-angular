import { Component, EventEmitter, Input, Output, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lolo',
  templateUrl: './lolo.component.html',
  styleUrls: ['./lolo.component.css']
})
export class LoloComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() title: string = '';
  @Output() emitter: EventEmitter<string> = new EventEmitter<string>()

  constructor() { 
    console.log('constructor')
  }
  
  ngOnInit(): void {
    console.log('OnInit')
    this.emitter.emit('Lolo emitiendo un mensaje!!')
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }

  ngOnDestroy(): void {
    console.log('OnDestroy')
  }

}
