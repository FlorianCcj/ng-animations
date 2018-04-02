import { Component } from '@angular/core';

@Component({
  selector: 'app-css-anim',
  templateUrl: './app-css-anim.component.html',
  styleUrls: ['./app-css-anim.component.scss']
})
export class AppCssAnimComponent {

  // #section3
  divClicked = false;

  doAnimate = false;

  toogleClicked() {
    this.divClicked = true;
  }
}
