import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { NewNoteComponent } from './newnote/newnote.component';
import { PastNoteComponent } from './pastnote/pastnote.component';
import { NoteCardComponent } from './notecard/notecard.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './services/Note.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainComponent,
    NewNoteComponent,
    NewNoteComponent,
    PastNoteComponent,
    NoteCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
