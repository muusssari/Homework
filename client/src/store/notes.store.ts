
import type { NoteType } from '@/types/note.types';
import { defineStore } from 'pinia';
import { ref } from 'vue';


const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const useNotesStore = defineStore('counter', () => {
  const notes = ref<NoteType[]>([])
  const loadingState = ref<boolean>(true);
  
  /**
   * fill test data from local directory after 2 seconds
   */
  const loadTestData = async () => {
    loadingState.value = true;
    await fetch('http://localhost:3001/api/notes', {
      method: 'GET', headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(x => x.json())
    .then((x) => notes.value = x)
    .catch(x => console.log("error: ", x));
    loadingState.value = false;
  }

  async function deleteNote(notesIds: number[]) {
    await fetch('http://localhost:3001/api/notes/' + notesIds[0], {
      method: 'DELETE', headers: {
        'Content-Type': 'application/json',
      },
    })
    .catch(x => console.log("error: ", x));
    await loadTestData();
  }

  const addNewNote = async (title: string, content: string) => {
    loadingState.value = true;
    await fetch('http://localhost:3001/api/notes', {
      method: 'POST', headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, content})
    })
    .then(x => x.json())
    .then((x) => notes.value.push(x))
    .catch(x => console.log("error: ", x));
    loadingState.value = false;
  } 
  

  return { 
    notes,
    loadingState,
    loadTestData,
    addNewNote,
    deleteNote
  }
})