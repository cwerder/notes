import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { NewNoteComponent } from './newnote/newnote.component';
import { PastNoteComponent } from './pastnote/pastnote.component'

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainComponent,
    NewNoteComponent,
    NewNoteComponent,
    PastNoteComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
