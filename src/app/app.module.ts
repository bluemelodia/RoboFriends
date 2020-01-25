import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SearchReducer } from './store/reducer';
import { SearchEffects } from './store/effects';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './search/search.component';
import { ScrollComponent } from './scroll/scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContainerComponent,
    SearchComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    /* Register the reducer in the StoreModule with a unique id. */
    StoreModule.forRoot({ search: SearchReducer }),
    /* Register effects with the EffectsModule. */
    EffectsModule.forRoot([SearchEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
