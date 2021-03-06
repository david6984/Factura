import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


//Import del archivo que tiene las rutas, se debe agregar a los imports
import { AppRoutingModule } from './app.routes.module';

// Componentes que deben ser agregados a los declarations
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDisplayComponent } from './productos/producto-display/producto-display.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProductoAgregarComponent } from './productos/producto-agregar/producto-agregar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioDisplayComponent } from './usuarios/usuario-display/usuario-display.component';
import { UsuarioAgregarComponent } from './usuarios/usuario-agregar/usuario-agregar.component';
import { LugaresComponent } from './lugares/lugares.component';
import { LugaresDisplayComponent } from './lugares/lugares-display/lugares-display.component';
import { LugaresAgregarComponent } from './lugares/lugares-agregar/lugares-agregar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { SliderAgregarComponent } from './slider/slider-agregar/slider-agregar.component';
import { SliderDisplayComponent } from './slider/slider-display/slider-display.component';
import { FacturaComponent } from './factura/factura.component';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyAgregarComponent } from './currency/currency-agregar/currency-agregar.component';
import { CurrencyDisplayComponent } from './currency/currency-display/currency-display.component';

//servicios creados deben ser agregados en los providers 
import { ProductosService } from './services/productos.service';
import { UsuariosService } from './services/usuarios.service';
import { LugaresService } from './services/lugares.service';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { SliderService } from './services/slider.service';
import { TextContainsValidator } from './shared/text-contains.directive';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import { DatasharingService } from './services/datasharing.service';
import { CurrencyService } from './services/currency.service';
import { CondicionventaComponent } from './condicionventa/condicionventa.component';








@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoDisplayComponent,
    AboutComponent,
    NavComponent,
    HomeComponent,
    ProductoAgregarComponent,
    UsuariosComponent,
    UsuarioDisplayComponent,
    UsuarioAgregarComponent,
    TextContainsValidator,
    LugaresComponent,
    LugaresDisplayComponent,
    LugaresAgregarComponent,
    FooterComponent,
    SliderComponent,
    LoginComponent,
    CarouselComponent,
    SliderAgregarComponent,
    SliderDisplayComponent,
    FacturaComponent,
    CurrencyComponent,
    CurrencyAgregarComponent,
    CurrencyDisplayComponent,
    CondicionventaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2CarouselamosModule
  ],
  providers: [
    ProductosService,
    UsuariosService,
    LugaresService,
    SliderService,
    CurrencyService,
    DataService,
    AuthService,
    DatasharingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
