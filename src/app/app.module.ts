import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, ItemsComponent, ItemAddUpdateComponent } from './components';

import { ItemsService } from './services';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, ItemsComponent, ItemAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ ItemsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
