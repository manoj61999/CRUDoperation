import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ReaduserComponent } from './readuser/readuser.component';
import { ShowAllUserComponent } from './show-all-user/show-all-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserloginComponent,
    ReaduserComponent,
    ShowAllUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
