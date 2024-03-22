import { Component, OnInit } from '@angular/core';
import { Widget } from '@production-angular/api-interfaces';
import { WidgetsService } from '@production-angular/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'production-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  widgets$!: Observable<Widget[]>;
  constructor(private widgetService: WidgetsService) {}

  ngOnInit(): void {
    this.widgets$ = this.widgetService.all();
  }

  toggleSideNav() {
    console.log('toggleSideNav');
  }
}
