import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImpressumComponent } from './impressum/impressum.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'impressum', component: ImpressumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }