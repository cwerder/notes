import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/Note.service';
import { NoteInterface } from '../NoteInterface';

@Component({
    selector: "pastnote",
    templateUrl: "./pastnote.component.html",
    styleUrls: ["./pastnote.component.less"]
})

export class PastNoteComponent implements OnInit { 

    // notes: string[];
    notes: NoteInterface[];
    constructor(private noteService: NoteService) { }

    ngOnInit() {
        this.getNotes();
    }

    getNotes() {
        this.noteService.getNotes().subscribe(result => {
            this.notes = Object.keys(result).map(key => result[key]);
            console.log(this.notes);
            console.log(this.notes.length);
        })
    }

    deleteNote(id: string) {
        console.log(id)
        this.noteService.deleteNote(id).subscribe(res => {
            console.log(res);
            this.getNotes();
        });
    }
}