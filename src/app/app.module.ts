import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";;




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterSkoobComponent } from './skoob-store-app/components/footer-skoob/footer-skoob.component';
import { NavSkoobComponent } from './skoob-store-app/components/nav-skoob/nav-skoob.component';
import { ProductListSkoobComponent } from './skoob-store-app/components/product-list-skoob/product-list-skoob.component';
import { SkoobStoreAppComponent } from './skoob-store-app/skoob-store-app.component';
import { FilterSkoobComponent } from './skoob-store-app/components/filter-skoob/filter-skoob.component';
import { AvaliacaoSkoobComponent } from './skoob-store-app/components/avaliacao-skoob/avaliacao-skoob.component';
import { LoginPageComponent } from './skoob-store-app/components/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterSkoobComponent,
    NavSkoobComponent,
    ProductListSkoobComponent,    
    SkoobStoreAppComponent,
    FilterSkoobComponent,
    AvaliacaoSkoobComponent,
    LoginPageComponent    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
