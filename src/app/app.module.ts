import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibretinasComponent } from './componentes/libretinas/libretinas.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AddLibretinaComponent } from './componentes/add-libretina/add-libretina.component';
import { LibretinaJournalComponent } from './componentes/libretina-journal/libretina-journal.component';

@NgModule({
  declarations: [
    AppComponent,
    LibretinasComponent,
    AddLibretinaComponent,
    LibretinaJournalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
