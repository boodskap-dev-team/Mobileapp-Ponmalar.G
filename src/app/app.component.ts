import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    // {
    //   title: 'Login',
    //   url: '/login',
    //   icon: 'log-in'
    // },
    {
      title: 'Floating Action Button',
      url: 'badge',
      icon: 'mail'
    },

    {
      title: 'Radio',
      url: '/radio',
      icon: 'radio'
    },
    {
      title: 'Input',
      url: '/input',
      icon: 'heart'
    },
    {
      title: 'Checkbox',
      url: '/checkbox',
      icon: 'speedometer'
    },
    {
      title: 'Action',
      url: '/action',
      icon: 'book'
    },
    {
      title: 'Button',
      url: 'button',
      icon: 'radio-button-on'
    },
    {
      title: 'Card',
      url: 'card',
      icon: 'create'
    },
    {
      title: 'Range',
      url: '/range',
      icon: 'mail'
    },
    {
      title: 'Date & Time Pickers',
      url: '/datepicker',
      icon: 'calendar'
    },    
    {
      title: 'Popover',
      url: 'popover',
      icon: 'aperture'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
