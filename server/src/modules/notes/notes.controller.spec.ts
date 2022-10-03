import { Test, TestingModule } from '@nestjs/testing';
import { StatusType } from '../../Enums/status.enum';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

describe('NotesController', () => {
  let notesController: NotesController;

  beforeEach(async () => {
    const notesModule: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService],
    }).compile();

    notesController = notesModule.get<NotesController>(NotesController);
  });

  describe('Notes testing', () => {
    it('post new note', async () => {
      const newNote = notesController.postNote({title: "test", content: "test text"})
      expect(newNote.title).toBe("test");
      expect(newNote.content).toBe("test text");
      expect(newNote.status).toBe(StatusType.NEW);
      expect(notesController.getAllNotes().length).toBe(4);
    });
    it('delete note', async () => {
      const newNote = notesController.postNote({title: "test", content: "test text"})
      expect(notesController.getAllNotes().length).toBe(4);
      const deletedNote = notesController.deleteNote(newNote.id);
      expect(deletedNote.id).toBe(newNote.id);
      expect(notesController.getAllNotes().find(x => x.id === newNote.id)).toBe(undefined);
    });

    it('delete multiple notes', async () => {
      const newNote = notesController.postNote({title: "test", content: "test text"})
      expect(notesController.getAllNotes().length).toBe(4);
      const deletedNote = notesController.deleteNotes([1,2,3]);
      const afterDeleteNotes = notesController.getAllNotes();
      expect(afterDeleteNotes.length).toBe(1)
      expect(afterDeleteNotes.find(x => x.id === newNote.id).id).toBe(newNote.id);
    });
  });
});
