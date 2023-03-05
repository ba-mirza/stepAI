import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Angular Dependencies
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// NGRX
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import {ProductsEffects} from "./Effects/products.effects";


@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatMenuModule,
    MatSlideToggleModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot([ProductsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
