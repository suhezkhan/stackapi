import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeDetailComponent} from './home/home-detail/home-detail.component';
import {HomeComponent} from './home/home.component';



const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'detail', component: HomeDetailComponent },
  { path: 'detail/:id',  component: HomeDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
