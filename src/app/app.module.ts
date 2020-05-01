import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { PenComponent } from './pen/pen.component';
import { PaperComponent } from './paper/paper.component';
import { BurgerComponent } from './burger/burger.component';
import { TacosModule } from './tacos/tacos.module';
import { HttpClientModule} from '@angular/common/http';
import { MediaComponent } from './media/media.component';
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
