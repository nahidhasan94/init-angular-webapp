import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ModuleOneRoutingModule } from './module-one-routing.module';



@NgModule({
  declarations: [ComponentOneComponent],
  imports: [
    CommonModule,
    ModuleOneRoutingModule
  ]
})
export class ModuleOneModule { }
