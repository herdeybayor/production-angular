import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {
  CoreStateModule,
  coreStateRoutes,
} from '@production-angular/core-state';
import { MaterialModule, materialRoutes } from '@production-angular/material';
import { CoreDataModule, coreDataRoutes } from '@production-angular/core-data';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    CoreStateModule,
    MaterialModule,
    CoreDataModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
