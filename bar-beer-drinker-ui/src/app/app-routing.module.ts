import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeersDetailsComponent } from './beers-details/beers-details.component';
import { DrinkersDetailsComponent } from './drinkers-details/drinkers-details.component';
import { BeerInfoComponent } from './beer-info/beer-info.component';
import { DrinkerInfoComponent } from './drinker-info/drinker-info.component';
import { ModifyDetailsComponent } from './modify-details/modify-details.component';
import {ModDrinkersComponent } from './mod-drinkers/mod-drinkers.component';
import {ModBeersComponent} from './mod-beers/mod-beers.component';
import {ModBarsComponent} from './mod-bars/mod-bars.component';
import {ModBillsComponent} from './mod-bills/mod-bills.component';
import {ModLikesComponent} from './mod-likes/mod-likes.component';
import {ModSellsComponent} from './mod-sells/mod-sells.component';
import {ModFreqComponent} from './mod-freq/mod-freq.component';
import {ModBordComponent} from './mod-bord/mod-bord.component';

const routes: Routes = [
  {
    path:'static',
    pathMatch:'full',
    redirectTo: 'bars'
  },
  {
    path: 'bars',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'bars/:bar',
    pathMatch: 'full',
    component: BarDetailsComponent
  },
  {
    path: 'Beers',
    pathMatch: 'full',
    component: BeersDetailsComponent
  },
  {
    path: 'Beers/:beer',
    pathMatch: 'full',
    component: BeerInfoComponent
  },
  {
    path: 'Drinkers',
    pathMatch: 'full',
    component: DrinkersDetailsComponent
  },
  {
    path: 'Drinkers/:drinker',
    pathMatch: 'full',
    component: DrinkerInfoComponent
  },
  {
    path: 'Modify',
    pathMatch: 'full',
    component: ModifyDetailsComponent
  },
  {
    path: 'Modify/Drinkers',
    pathMatch: 'full',
    component: ModDrinkersComponent
  },
  {
    path: 'Modify/Beers',
    pathMatch: 'full',
    component: ModBeersComponent
  },
  {
    path: 'Modify/Bars',
    pathMatch: 'full',
    component: ModBarsComponent
  },
  {
    path: 'Modify/Bills',
    pathMatch: 'full',
    component: ModBillsComponent
  },
  {
    path: 'Modify/Likes',
    pathMatch: 'full',
    component: ModLikesComponent
  },
  {
    path: 'Modify/Sells',
    pathMatch: 'full',
    component: ModSellsComponent
  },
  {
    path: 'Modify/Frequents',
    pathMatch: 'full',
    component: ModFreqComponent
  },
  {
    path: 'Modify/BeersOrdered',
    pathMatch: 'full',
    component: ModBordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
