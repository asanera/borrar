import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SearchModule} from './search/search.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { PuebloComponent } from './pueblo/pueblo.component';
import {FotoModule} from './foto/foto.module';
import { MenuComponent } from './menu/menu.component';
import { PipeComponent } from './pipe/pipe.component';





@NgModule({
  declarations: [
    AppComponent,
    TodoDetailsComponent,
    PuebloComponent,
    MenuComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SearchModule,
    FotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
