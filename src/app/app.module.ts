import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscaModule } from './busca/busca.module';
import { CompartilhadoModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuscaModule,
    CommonModule,
    HttpClientModule,
    CompartilhadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
