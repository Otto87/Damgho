import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  btnName:string= "haha";
  paperId:number = 10;
  paperStatus:string = 'available';
  allowNewpaper = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewpaper=true;
      this.btnName = "abzzaaaaaaa";
    }, 3000);
  }

  ngOnInit() {
  }

  getPaperStatus(){
    return this.paperStatus;
  }

  onPaperCreated(){
this.paperStatus = "Paper was created";
  }

}
