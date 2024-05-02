import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {RouterModule} from "@angular/router";
import {AppRouting} from "./app.routing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRouting),
    LayoutModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
