<template>
  <h1>Notes</h1>
  <StatusCard />
  <NotesTable />
</template>

<script lang="ts">
import NotesTable from "./components/Notes.table.vue";
import StatusCard from "./components/Status.Card.vue";

export default {
  components: {
    NotesTable,
    StatusCard
},
}
</script>

<style scoped>
</style>
