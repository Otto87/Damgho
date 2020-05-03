import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './modules/application/book/book.component';
import { BurgerComponent } from './modules/application/burger/burger.component';
import { TacosComponent } from './modules/application/tacos/tacos.component';
import { PaperComponent } from './modules/application/paper/paper.component';
import { PenComponent } from './modules/application/pen/pen.component';
import { MediaComponent } from './modules/application/media/media.component';
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
  {
    path: 'httpclient',
    loadChildren: () => import('./modules/application/items/items.module')
      .then(mod => mod.ItemsModule)
  },
  {
    path: 'template-driven-forms',
    loadChildren: () => import('./modules/application/example-template-driven-forms/example-template-driven-forms.module')
      .then(mod => mod.ExampleTemplateDrivenFormsModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/application/example-components/example-components.module')
      .then(mod => mod.ExampleComponentsModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/application/example-services/example-services.module')
      .then(mod => mod.ExampleServicesModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./modules/application/example-reactive-form/example-reactive-form.module')
      .then(mod => mod.ExampleReactiveFormModule)
  },
  {
    path: 'bootstrap-prototype',
    loadChildren: () => import('./modules/application/example-bootstrap-prototype/example-bootstrap-prototype.module')
      .then(mod => mod.ExampleBootstrapPrototypeModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
