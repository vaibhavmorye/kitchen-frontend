import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitchendisplayComponent } from './kitchendisplay/kitchendisplay.component';
import { OrderUpdaterComponent } from './order-updater/order-updater.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PredictionComponent } from './prediction/prediction.component';
import { OrderComponentComponent } from './order-component/order-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KitchendisplayComponent,
    OrderUpdaterComponent,
    PredictionComponent,
    OrderComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([{ path: 'home', component: HomeComponent },
    { path: 'addProduct', component: OrderUpdaterComponent },
    { path: 'kitchenDisplay', component: KitchendisplayComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
