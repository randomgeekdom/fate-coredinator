import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { FormsModule } from '@angular/forms';
import { RandomizeComponent } from './randomize/randomize.component';

@NgModule({
  declarations: [AppComponent, CharacterSheetComponent, RandomizeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
