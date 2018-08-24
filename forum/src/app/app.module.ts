import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './user/user.component';
import { TopicsComponent } from './topics/topics.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    TopicsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
