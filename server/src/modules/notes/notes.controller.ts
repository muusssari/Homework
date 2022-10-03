import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-notes.dto';
import { NoteDto } from './dto/notes.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getAllNotes(): NoteDto[] {
    return this.notesService.getAllNotes();
  }

  @Post()
  postNote(@Body() newNote: CreateNoteDto): NoteDto {
    return this.notesService.createNote(newNote);
  }

  @Delete(':id')
  deleteNote(@Param('id') id: number): NoteDto {
    return this.notesService.deleteNote(id);
  }
}
