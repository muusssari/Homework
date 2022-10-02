import { notesTestData } from '@/testData/Notes.testData';
import { StatusType, type NoteType } from '@/types/note.types';
import { defineStore } from 'pinia';
import { computed, isRef, ref } from 'vue';


const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const useNotesStore = defineStore('counter', () => {
  const notes = ref<NoteType[]>([])
  const loadingState = ref<boolean>(true);
  
  /**
   * fill test data from local directory after 2 seconds
   */
  const loadTestData = async () => {
    loadingState.value = true;
    setTimeout(function() {
      notes.value = notesTestData;
      loadingState.value = false;
    }, 2000);
  }
  computed

  const deleteNote = async (notesIds: number[]) => {
    console.log(notesIds);
    //TODO: error handler
    // this shows array not in reference type
    const displayArray = notes.value.map(e => isRef(e) ? e.value : e);
    notes.value = (displayArray as NoteType[]).filter(x => !notesIds.includes(x.id));
  }

  const addNewNote = async (title: string, content: string) => {
    //TODO: error handler
    loadingState.value = true;
    await delay(2000)
    notes.value.push({
      id: Math.max(...(notes.value.map(e => isRef(e) ? e.value : e)as NoteType[]).map(x => x.id)) + 1,
      title,
      content,
      status: StatusType.NOTCOMPLETED,
    })
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