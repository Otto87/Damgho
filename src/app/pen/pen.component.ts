import { Component, OnInit } from '@angular/core';
import { BrewsService } from '../http.service';
import { BreweryModel } from '../Common/Brewery';

@Component({
  selector: 'app-pen',
  templateUrl: './pen.component.html',
  styleUrls: ['./pen.component.css']
})
export class PenComponent implements OnInit {

  brews: BreweryModel[];
  constructor(private _http: BrewsService) { }

  async ngOnInit() {
    // this._http.getBeer().subscribe(data => {
    //   this.brews = data;
    //   console.log(this.brews);
    // });

    this.brews = await this._http.getBeerAsync();
    console.log(this.brews);
  }

}
