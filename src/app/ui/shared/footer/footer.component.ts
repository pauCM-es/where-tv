import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  storesButtons = [
    {
      name: 'App Store',
      imgSrc: './assets/button/app store@2x.png',
      link: 'https://www.apple.com/app-store/'
    },
    {
      name: 'Google Play',
      imgSrc: './assets/button/google play@2x.png',
      link: 'https://play.google.com/store/'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
