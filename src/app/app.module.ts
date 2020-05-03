import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './modules/application/book/book.component';
import { PenComponent } from './modules/application/pen/pen.component';
import { PaperComponent } from './modules/application/paper/paper.component';
import { BurgerComponent } from './modules/application/burger/burger.component';
import { TacosModule } from './modules/application/tacos/tacos.module';
import { HttpClientModule} from '@angular/common/http';
import { MediaComponent } from './modules/application/media/media.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    PenComponent,
    PaperComponent,
    BurgerComponent,
    MediaComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TacosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
