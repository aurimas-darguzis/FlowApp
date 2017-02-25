import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, ItemsComponent } from './components';

import { ItemsService } from './services';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, ItemsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [ ItemsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
