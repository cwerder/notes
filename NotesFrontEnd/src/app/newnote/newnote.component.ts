import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NoteService } from '../services/Note.service';
import { NoteInterface } from './../NoteInterface';

@Component({
    selector: "newnote",
    templateUrl: "./newnote.component.html",
    styleUrls: ["./newnote.component.less"]
})

export class NewNoteComponent {

    notes: NoteInterface[];

    public message: string;

    @Input() public newNote: FormGroup;
    
    constructor(private noteService: NoteService) { }

    @Output() notePosted = new EventEmitter<any>();

    public submitNote(note: FormGroup) {
        this.noteService.addNote(note.value).subscribe(res => {
            console.log('Note added '+ res);
            this.noteService.getNotes().subscribe(result => {
                this.notes = Object.keys(result).map(keys => result[keys]);
                this.notePosted.emit(this.notes);
            });
        });
    }
}