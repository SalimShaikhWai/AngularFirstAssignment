import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicArrayComponents } from './DynamicArrayComponent/DynamicArrayComponent';
import { MYComponent } from './MyFirstComponent/MYComponent';
import { Component1 } from './WaiComponants/Component1';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    MYComponent,
    DynamicArrayComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
