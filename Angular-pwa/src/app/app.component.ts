import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import  { SwPush, SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-pwa';

  apiData: any;
  private  publicKey: 'BDw9rsFllBr0w5Yu7f6lgC8O_yAF4QLOmrHDin8MR3cikeJOQcZNpzSlEM4RUUajWz2n8L52wCyLSFWemGuyTJI';
  constructor(private http: HttpClient, private update: SwUpdate
    , private swPush: SwPush) { 
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
    
    this.updateClient();
  }

updateClient(){
  if(!this.update.isEnabled){
    console.log('not enabled');
    return;
  }
this.update.available.subscribe((Event) => {
  
  console.log(`current`, Event.current, `available`, Event.available);
  if(confirm('update avaliable for the app please confirm')){
    this.update.activateUpdate().then(() => console.log('Activated'));
  }
});
this.update.activated.subscribe((Event) => {
  
  console.log(`current`, Event.previous, `available`, Event.current);
});
  
  
}
PushSubscription(){
if(!this.swPush.isEnabled){
  console.log('Notification is not enabled');
  return;
}
this.swPush.requestSubscription({
  serverPublicKey: this.publicKey,
}).then(sub => {console.log(JSON.stringify(sub));}).catch(err => console.log(err));
}



}
