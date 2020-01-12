import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-country', pathMatch: 'full' },
  { path: 'app-country', component: CountryComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
