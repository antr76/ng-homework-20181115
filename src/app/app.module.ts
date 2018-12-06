import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './store';
import { ItemsEffects } from './store/effects/items.effects';
import { AppComponent } from './app.component';
import { SocialInfoComponent } from './social-info/social-info.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { ItemsComponent } from './items/items.component';
import { PhoneNumberPipe } from './items/item/phone-number.pipe';
import { NavComponent } from './nav/nav.component';
import { ImageComponent } from './image/image.component';
import { ItemComponent } from './items/item/item.component';
import { environment } from '../environments/environment';

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
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ItemsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
