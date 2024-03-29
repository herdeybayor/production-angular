import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'production-angular-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() toggleSideNav = new EventEmitter();
  @Output() logout = new EventEmitter();
}
