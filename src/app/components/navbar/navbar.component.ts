import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  @Input() title : string = "";
  @Input() buttonImgUrl : string = "";
  @Output() buttonFunction = new EventEmitter();

  constructor(private location: Location){}

  goBack(){ 
    this.location.back();
  }
}
