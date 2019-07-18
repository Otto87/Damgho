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
import { TacosService } from './tacos.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    PenComponent,
    PaperComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TacosModule
  ],
  providers: [TacosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
