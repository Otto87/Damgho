import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  public progress: number;
  public message: string;
  public media: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  async upload(files) {
    if (files.length === 0) {
      return;
    }

    const formData = new FormData();

    for (const file of files) {
      formData.append('blobs', file);
    }

    const url = 'https://localhost:44396/api/Media/' + this.media + '/upload';
    const uploadReq = new HttpRequest('POST', url, formData, {
      reportProgress: true,
    });


    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = 'uploaded with success';
      }
    });
  }

}
