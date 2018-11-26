import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialInfoComponent } from './social-info/social-info.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { ItemsComponent } from './items/items.component';
import { PhoneNumberPipe } from './items/item/phone-number.pipe';
import { AppService } from './app.service';
import { NavComponent } from './nav/nav.component';
import { ImageComponent } from './image/image.component';
import { ItemComponent } from './items/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialInfoComponent,
    WeatherInfoComponent,
    ItemsComponent,
    PhoneNumberPipe,
    NavComponent,
    ImageComponent,
    ItemComponent
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
