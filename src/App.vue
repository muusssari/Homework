<template>
  <h1>Notes</h1>
  <!-- This could be set as one page, but this application has only one feature, so I didnt see usage seperate it as own-->
  <StatusCard />
  <NotesTable />
</template>

<script lang="ts">
import NotesTable from "./components/Notes.table.vue";
import StatusCard from "./components/Status.Card.vue";
import { useNotesStore } from "./store/notes.store";

export default {
  components: {
    NotesTable,
    StatusCard
  },
  setup() {
    // This is for loading test data
    const store = useNotesStore();
    store.loadTestData();
  },
}
</script>

<style scoped>
</style>
