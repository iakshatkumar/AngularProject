import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';


import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module'; 

import 'hammerjs';
import {MenuComponent} from './menu/menu.component';
import {DishdetailComponent} from './dishdetail/dishdetail.component';

import {DishService} from './services/dish.service';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';


import {PromotionService} from './services/promotion.service';
import {LeaderService} from './services/leader.service';
import {LoginComponent} from './login/login.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {baseURL} from './shared/baseurl';
// import {HighlightDirective} from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent ,
    MenuComponent ,
    DishdetailComponent ,
    HeaderComponent ,
    FooterComponent ,
    AboutComponent ,
    HomeComponent ,
    ContactComponent ,
    LoginComponent 
    // HighlightDirective
  ] ,
  imports: [
    BrowserModule ,
    BrowserAnimationsModule ,
    FlexLayoutModule ,
    MatButtonModule , MatCheckboxModule , MatDatepickerModule , MatFormFieldModule ,
    MatInputModule , MatRadioModule , MatSelectModule , MatSliderModule ,
    MatSlideToggleModule , MatToolbarModule , MatListModule , MatGridListModule ,
    MatCardModule , MatIconModule , MatProgressSpinnerModule , MatDialogModule , FlexLayoutModule ,
    FormsModule ,
    ReactiveFormsModule ,
    HttpClientModule,
    AppRoutingModule
  ] ,
  entryComponents: [
    LoginComponent
  ] ,
  providers: [
    DishService ,
    PromotionService ,
    LeaderService ,
    {provide: 'BaseURL' , useValue: baseURL}
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule {
}
