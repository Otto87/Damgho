import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.css']
})
export class TacosComponent implements OnInit {

  clickCounter: number = 0
  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clickCounter++
  }

}
