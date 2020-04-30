import { Component, OnInit } from '@angular/core';
import { BrewsService } from '../http.service';
import { BreweryModel } from '../Common/Brewery';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pen',
  templateUrl: './pen.component.html',
  styleUrls: ['./pen.component.css']
})
export class PenComponent implements OnInit {

  brews: BreweryModel[];
  values: {};
  constructor(private http: BrewsService, private httpClient: HttpClient) { }

  async ngOnInit() {
    // this._http.getBeer().subscribe(data => {
    //   this.brews = data;
    //   console.log(this.brews);
    // });

    this.brews = await this.http.getBeerAsync();
    this.values = await this.http.getValuesAsync();
    this.httpClient.get('https://localhost:5005/api/MyApi').subscribe(data => console.log(data));
    //console.log(this.values);
  }

}
