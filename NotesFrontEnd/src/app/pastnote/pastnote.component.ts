import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/Note.service';

@Component({
    selector: "pastnote",
    templateUrl: "./pastnote.component.html",
    styleUrls: ["./pastnote.component.less"]
})

export class PastNoteComponent implements OnInit { 

    notes: string[];
    constructor(private noteService: NoteService) { }

    ngOnInit() {
        this.noteService.getNotes().subscribe(result => {
            this.notes = Object.keys(result).map(key => result[key]);
            console.log(this.notes);
            console.log(this.notes.length);
        })
    }

    // deleteNote() {
    //     this.noteService
    // }
}