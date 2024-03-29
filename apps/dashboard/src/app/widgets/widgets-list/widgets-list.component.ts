import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '@production-angular/api-interfaces';

@Component({
  selector: 'production-angular-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss'],
})
export class WidgetsListComponent {
  @Input() widgets: Widget[] = [];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
