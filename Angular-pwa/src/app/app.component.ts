import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-pwa';

  apiData: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(
      (res: any) => {
        this.apiData = res.data;
      }, err => {
        console.error(err);
      }
    )
  }
}