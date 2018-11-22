import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialInfoComponent } from './social-info/social-info.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { ItemsComponent } from './items/items.component';
import { PhoneNumberPipe } from './items/phone-number.pipe';
import { AppService } from './app.service';
import { NavComponent } from './nav/nav.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialInfoComponent,
    WeatherInfoComponent,
    ItemsComponent,
    PhoneNumberPipe,
    NavComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: AppService, useClass: AppService }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
