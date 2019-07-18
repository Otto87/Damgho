import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  name:string = '';
  price:number=0;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
alert(this.name);
  }

}
