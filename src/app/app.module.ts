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
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListaComprasComponent } from './pages/lista-compras/lista-compras.component';
import { TarjetaComidaComponent } from './pages/tarjeta-comida/tarjeta-comida.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    FooterComponent,
    ProductosComponent,
    HomeComponent,
    PedidosComponent,
    ModalComponent,
    MurcielagoPipe,
    CarritoComprasComponent,
    ListaComprasComponent,
    TarjetaComidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
