import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent {
  @Input() movieTitle : string = "";
  @Input() id : string = "";
  @Input() path : string = "";
  @Input() altTitle : string = "";
}
