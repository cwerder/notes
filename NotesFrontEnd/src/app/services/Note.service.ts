import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { NoteInterface } from './../NoteInterface';

@Injectable()
export class NoteService {
    noteModel: NoteInterface;

    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    constructor(private http: HttpClient) { }

    getNotes() {
        return this.http.get('http://localhost:8080/Notes/PastNotes');
    }

    addNote(note: NoteInterface) {
        return this.http.post('http://localhost:8080/Notes/NewNote', JSON.stringify(note), this.options);
    }

    changeNote(note: NoteInterface, id: string) {
        return this.http.put(`http://localhost:8080/Notes/PastNotes/${id}`, JSON.stringify(note), this.options);
    }

    deleteNote(id: string) {
        return this.http.delete(`http://localhost:8080/Notes/PastNotes/${id}`)
    }
}