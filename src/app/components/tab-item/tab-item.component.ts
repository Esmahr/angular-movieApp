import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent {
  @Input() title : string = "";
  @Input() id : string = "";
  @Input() target : string = "";
  @Input() controls : string = "";
}
