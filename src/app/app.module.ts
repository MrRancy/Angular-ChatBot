import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { MessagecolorDirective } from "./messagecolor.directive";

@NgModule({
  declarations: [
    AppComponent,
    MessagecolorDirective
  ],
  imports: [
    BrowserModule,
    ChatModule
  ],
  exports : [
    MessagecolorDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
