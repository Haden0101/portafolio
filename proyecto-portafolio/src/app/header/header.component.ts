import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  element = false;

  showData() {/*
    return (this.element = true); */

    if(this.element != true) {
      return this.element = true;
    }else if (this.element = false){
      return this.element = false;
    }

    return false;
  }

}
