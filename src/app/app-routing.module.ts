import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { DisplayModule } from './display/display.module';

const routes: Routes = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'display', loadChildren: () => DisplayModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
