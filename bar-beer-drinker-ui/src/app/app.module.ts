import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { TableModule} from 'primeng/table';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeersDetailsComponent } from './beers-details/beers-details.component';
import { DrinkersDetailsComponent } from './drinkers-details/drinkers-details.component';
import { BeerInfoComponent } from './beer-info/beer-info.component';
import { DrinkerInfoComponent } from './drinker-info/drinker-info.component';
import { ModifyDetailsComponent } from './modify-details/modify-details.component';
import { ModDrinkersComponent } from './mod-drinkers/mod-drinkers.component';
import { ModBeersComponent } from './mod-beers/mod-beers.component';
import { ModBarsComponent } from './mod-bars/mod-bars.component';
import { ModBillsComponent } from './mod-bills/mod-bills.component';
import { ModLikesComponent } from './mod-likes/mod-likes.component';
import { ModSellsComponent } from './mod-sells/mod-sells.component';
import { ModFreqComponent } from './mod-freq/mod-freq.component';
import { ModBordComponent } from './mod-bord/mod-bord.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    BeersDetailsComponent,
    DrinkersDetailsComponent,
    BeerInfoComponent,
    DrinkerInfoComponent,
    ModifyDetailsComponent,
    ModDrinkersComponent,
    ModBeersComponent,
    ModBarsComponent,
    ModBillsComponent,
    ModLikesComponent,
    ModSellsComponent,
    ModFreqComponent,
    ModBordComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
