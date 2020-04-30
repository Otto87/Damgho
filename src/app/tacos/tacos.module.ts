import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TacosComponent } from '../tacos/tacos.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [TacosComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [TacosComponent]
})
export class TacosModule { }
