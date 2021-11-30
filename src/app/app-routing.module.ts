import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentOneComponent} from "./module-one/component-one/component-one.component";

const routes: Routes = [
  {
    path: 'module-one',
    loadChildren: () => import('./module-one/module-one.module').then(m => m.ModuleOneModule)
  },
  {
    path: '',
    component: ComponentOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
