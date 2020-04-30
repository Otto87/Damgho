import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BurgerComponent } from './burger/burger.component';
import { TacosComponent } from './tacos/tacos.component';
import { PaperComponent } from './paper/paper.component';
import { PenComponent } from './pen/pen.component';
import { MediaComponent } from './media/media.component';


const routes: Routes = [
  { path: 'book', component: BookComponent },
  { path: 'burger', component: BurgerComponent },
  { path: 'tacos', component: TacosComponent },
  { path: 'paper', component: PaperComponent },
  { path: 'pen', component: PenComponent },
  { path: 'media', component: MediaComponent },
  { path: 'tacos/media', component: MediaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
