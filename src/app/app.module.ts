import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicArrayComponents } from './DynamicArrayComponent/DynamicArrayComponent';
import { LoginComponent } from './LoginComponent/LoginComponent';
import { MYComponent } from './MyFirstComponent/MYComponent';
import { PracticeComponent } from './PracticeComponent/PracticeComponent';
import { TemplateRef } from './TemplateReference/TemplateRef';
import { Component1 } from './WaiComponants/Component1';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { DisplayChildComponent } from './display-child/display-child.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    MYComponent,
    DynamicArrayComponents,
    TemplateRef,
    LoginComponent,
    PracticeComponent,
    ParentComponentComponent,
    DisplayChildComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
