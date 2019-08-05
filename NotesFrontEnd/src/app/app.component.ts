import { Component } from '@angular/core';
import { NoteInterface } from './NoteInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Notes';
  notesList: NoteInterface[];

  notesListFromMain(listFromMain) {
    this.notesList = listFromMain;
  }
}
