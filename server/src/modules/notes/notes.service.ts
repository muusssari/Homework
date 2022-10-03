import { Injectable, NotFoundException } from '@nestjs/common';
import { StatusType } from '../../Enums/status.enum';
import { CreateNoteDto } from './dto/create-notes.dto';
import { NoteDto } from './dto/notes.dto';

@Injectable()
export class NotesService {

  private notesMockDB: NoteDto[] = [
    {
      id: 1,
      title: "delectus aut autem",
      content: "Lorem ipsum",
      status: StatusType.NEW,
    },
    { 
      id: 2,
      title: "quis ut nam facilis et officia qui",
      content: "Lorem ipsum",
      status: StatusType.COMPELETED,
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      content: "Lorem ipsum",
      status: StatusType.NOTCOMPLETED,
    }
  ]
  private highestId = 3;

  getAllNotes(): NoteDto[] {
    return this.notesMockDB;
  }

  createNote(createNote: CreateNoteDto): NoteDto {
    this.highestId += 1;
    const newNote = {
      id: this.highestId,
      title: createNote.title,
      content: createNote.content,
      status: StatusType.NEW,
    } as NoteDto;
    this.notesMockDB.push(newNote);
    return newNote;
  }

  deleteNote(id: number): NoteDto {
    const note = this.notesMockDB.find(x => x.id === id);
    if(!note) throw new NotFoundException();
    this.notesMockDB = this.notesMockDB.filter(x => x.id !== id);
    return note;
  }

  deleteNotes(idArray: number[]): NoteDto[] {
    const notes = this.notesMockDB.filter(x => idArray.includes(x.id));
    if(notes.length === 0) throw new NotFoundException();
    this.notesMockDB = this.notesMockDB.filter(x => !notes.map(x => x.id).includes(x.id));
    return notes;
  }
}
