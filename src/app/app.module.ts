import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitchendisplayComponent } from './component/kitchendisplay/kitchendisplay.component';
import { OrderUpdaterComponent } from './component/order-updater/order-updater.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PredictionComponent } from './component/prediction/prediction.component';
import { OrderComponentComponent } from './component/order-component/order-component.component';
import { ReportgenratorComponent } from './component/reportgenrator/reportgenrator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KitchendisplayComponent,
    OrderUpdaterComponent,
    PredictionComponent,
    OrderComponentComponent,
    ReportgenratorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([{ path: 'home', component: HomeComponent },
    { path: 'addProduct', component: OrderUpdaterComponent },
    { path: 'kitchenDisplay', component: KitchendisplayComponent },
    { path: 'reportgenrator', component: ReportgenratorComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
