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

    @Input() public chosenNote: NoteInterface;
 
    constructor(private noteService: NoteService) { }

    @Output() notePosted = new EventEmitter<any>();
    @Output() noteModified = new EventEmitter<any>();

    public submitNote(note: FormGroup) {
        if (this.chosenNote) {
            this.noteService.changeNote(note.value, this.chosenNote['_id']).subscribe(
                (res) => {
                    console.log(res)
                    this.notePosted.emit(this.notes);
                    this.noteModified.emit();
                }
            )
        }
        else {
            this.noteService.addNote(note.value).subscribe(res => {
                console.log(`Note added ${res}`);
                this.noteService.getNotes().subscribe(result => {
                    this.notes = Object.keys(result).map(keys => result[keys]);
                    this.notePosted.emit(this.notes);
                });
            });
        }
    }
}