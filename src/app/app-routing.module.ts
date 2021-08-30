import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ReaduserComponent } from './readuser/readuser.component';
import { ShowAllUserComponent } from './show-all-user/show-all-user.component';

const routes: Routes = [
{path:'',component:UserComponent},
{path:'userlogin',component:UserloginComponent},
{path:'readuser',component:ReaduserComponent},
{path:'showalldata',component:ShowAllUserComponent}





];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
