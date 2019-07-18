import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TacosComponent } from '../tacos/tacos.component';

@NgModule({
  declarations: [TacosComponent],
  imports: [
    CommonModule
  ],
  exports:[TacosComponent]
})
export class TacosModule { }
