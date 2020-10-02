import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SwPush, SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-pwa';

  apiData: any;
  public publicKey: 'BIa-vDuPs1XdOvvnrBEQ-4QLBWIwqlUxl2oHdst7auFhR-UVCFq-b6FsLXGTNj8g5Bcpo4ECg-82qazvwev511U';
  constructor(private http: HttpClient, private update: SwUpdate
    , private swPush: SwPush) {
    this.updateClient();
  }

  ngOnInit() {
    this.PushSubscription();
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(
      (res: any) => {
        this.apiData = res.data;
      }, err => {
        console.error(err);
      }
    )


  }

  updateClient() {
    if (!this.update.isEnabled) {
      console.log('not enabled');
      return;
    }
    this.update.available.subscribe((Event) => {

      console.log(`current`, Event.current, `available`, Event.available);
      if (confirm('update avaliable for the app please confirm')) {
        this.update.activateUpdate().then(() => location.reload());
      }
    });
    this.update.activated.subscribe((Event) => {

      console.log(`current`, Event.previous, `available`, Event.current);
    });


  }
  PushSubscription() {
    if (!this.swPush.isEnabled) {
      console.log('Notification is not enabled');
      return;
    }
    this.swPush.requestSubscription({
      serverPublicKey: this.publicKey,
    }).then(sub => { console.log(JSON.stringify(sub)); }).catch(err => console.log(err));
  }



}
