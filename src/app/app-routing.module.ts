import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bookslot1Component } from './bookslot1/bookslot1.component';
import { Login1Component } from './login1/login1.component';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [

  {path:'mainpage',component:MainpageComponent},
  {path:'mainpage/bookslot1',component:Bookslot1Component},
  {path:'',component:Login1Component}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
