import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../services/Note.service';
import { NoteInterface } from '../NoteInterface';

@Component({
    selector: "pastnote",
    templateUrl: "./pastnote.component.html",
    styleUrls: ["./pastnote.component.less"]
})

export class PastNoteComponent implements OnInit { 

    @Input() notes: NoteInterface[];
    selectedNote: NoteInterface;

    constructor(private noteService: NoteService) { }

    ngOnInit() {
        this.getNotes();
    }

    getNotes() {
        this.noteService.getNotes().subscribe(result => {
            this.notes = Object.keys(result).map(key => result[key]);
            console.log(this.notes);
        })
    }

    modifyNote(note: NoteInterface, id: string) {
        this.selectedNote = note;
    }

    noteModifiedFormSubmitted() {
        this.selectedNote = null;
        this.getNotes();
    }

    deleteNote(id: string) {
        console.log(id)
        this.noteService.deleteNote(id).subscribe(res => {
            console.log(res);
            this.getNotes();
        });
    }
}