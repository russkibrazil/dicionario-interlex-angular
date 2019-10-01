import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscaModule } from './busca/busca.module';
import { CompartilhadoModule } from './shared/shared.module';
import { PalavrasComponent } from './manuten/palavras/palavras.component';
import { FraseologiaComponent } from './manuten/fraseologia/fraseologia.component';
import { PalavraGuiaComponent } from './manuten/palavra-guia/palavra-guia.component';

@NgModule({
  declarations: [
    AppComponent,
    PalavrasComponent,
    FraseologiaComponent,
    PalavraGuiaComponent
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
