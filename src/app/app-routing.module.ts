import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './ui/pages/landing/landing.component';
import { DetailsComponent } from './ui/pages/details/details.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'title/:titleId', component: DetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
