import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialInfoComponent } from './social-info/social-info.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { ItemsComponent } from './items/items.component';
import { PhoneNumberPipe } from './phone-number.pipe';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    SocialInfoComponent,
    WeatherInfoComponent,
    ItemsComponent,
    PhoneNumberPipe
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
