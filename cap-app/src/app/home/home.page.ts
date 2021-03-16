import { Component, OnInit } from '@angular/core';
import { 
    Plugins, 
    PushNotification, 
    PushNotificationToken,
    PushNotificationActionPerformed
} from '@capacitor/core';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ngOnInit(){
    console.log('Initializing HomePage');
    PushNotifications.requestPermission().then(result =>{
        if (result.granted){
            PushNotifications.register();
        }
        else{
            console.log('Error n. 1.');
        }
    });
    PushNotifications.addListener('registration',
    (token: PushNotificationToken)=>{
        alert('Push registration success, token: '+token.value);
    }
    );
    PushNotifications.addListener('registrationError',
        (error:any)=>{
            alert('Error on registration: '+JSON.stringify(error));
        }
    );
    PushNotifications.addListener('pushNotificationReceived',
        (notification:PushNotification)=>{
            alert('Push received: ' + JSON.stringify(notification));
        }
    );
    PushNotifications.addListener('pushNotificationActionPerformed',
        (notification:PushNotificationActionPerformed)=>{
            alert('Push action performed: '+JSON.stringify(notification));
        }
    );
  }
  constructor() {}

}
