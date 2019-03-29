import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import { RouterModule, Routes } from '@angular/router';

const displayRoutes: Routes = [{ path: '', component: DisplayComponent }];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(displayRoutes)],
  declarations: [DisplayComponent]
})
export class DisplayModule {}
