import { Component, OnInit } from '@angular/core';
import { Burger } from './burger';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  inputName: string;
  inputPrice: number;
  burgerList: Burger[] = new Array<Burger>(0);
  constructor() {    
  }

  ngOnInit() {
  }

  onSubmit() {
    //alert(this.name);
    let bur1 = new Burger(this.inputName, this.inputPrice);

    this.burgerList.push(bur1);
    
  }

}
