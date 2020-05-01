import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BurgerComponent } from './burger/burger.component';
import { TacosComponent } from './tacos/tacos.component';
import { PaperComponent } from './paper/paper.component';
import { PenComponent } from './pen/pen.component';
import { MediaComponent } from './media/media.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';


const routes: Routes = [
  { path: 'book', component: BookComponent },
  { path: 'burger', component: BurgerComponent },
  { path: 'tacos', component: TacosComponent },
  { path: 'paper', component: PaperComponent },
  { path: 'pen', component: PenComponent },
  { path: 'media', component: MediaComponent },
  { path: 'tacos/media', component: MediaComponent },
  { path: '', component: HomeComponent, },
  {
    path: 'bootstrap-prototype',
    loadChildren: () => import('./modules/application/example-bootstrap-prototype/example-bootstrap-prototype.module')
      .then(mod => mod.ExampleBootstrapPrototypeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/signin/signin.module')
      .then(mod => mod.SigninModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
