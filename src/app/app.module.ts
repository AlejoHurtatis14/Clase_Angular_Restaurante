import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './pages/pages.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './shared/modal/modal.component';
import { MurcielagoPipe } from './shared/pipes/murcielago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    FooterComponent,
    ProductosComponent,
    HomeComponent,
    PedidosComponent,
    ModalComponent,
    MurcielagoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
