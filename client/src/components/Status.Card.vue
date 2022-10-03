<template>
  <div class="cardContainer">
    <a-row :gutter="[8,8]" :wrap="true">
      <a-col  :xs="16" :sm="8" :md="8" :lg="8" :xl="8">
        <a-card :bordered="false" class="cardItem" :loading="store.loadingState">
          <p>Total</p>
          <p class="number">{{totalNotes}}</p>
        </a-card>
      </a-col>
      <a-col  :xs="16" :sm="8" :md="8" :lg="8" :xl="8">
        <a-card :bordered="false" class="cardItem" :loading="store.loadingState">
          <p>Completed</p>
          <p class="number">{{completedNotesCount}}</p>
        </a-card>
      </a-col>
      <a-col  :xs="16" :sm="8" :md="8" :lg="8" :xl="8">
        <a-card :bordered="false" class="cardItem" :loading="store.loadingState">
            <p>Not completed</p>
            <p class="number">{{notCompletedNotesCount}}</p>
        </a-card>
      </a-col>
  	</a-row>
  </div>
</template>

<script lang="ts">
import { useNotesStore } from '@/store/notes.store';
import { StatusType } from '@/types/note.types';
import { computed } from '@vue/reactivity';
import { defineComponent, ref } from 'vue';


export default defineComponent({
  setup() {
    const store = useNotesStore();
    const notCompletedNotesCount = computed(() => store.notes.filter(x => x.status === StatusType.NOTCOMPLETED).length)
    const completedNotesCount = computed(() => store.notes.filter(x => x.status === StatusType.COMPELETED).length)
    const totalNotes = computed(() => store.notes.length)
    return {
      store,
      completedNotesCount,
      notCompletedNotesCount,
      totalNotes,
    }
  }
});
</script>

<style scoped>
.cardContainer {
  background-color: var(--white);
  padding: 20px;
  margin-bottom: 20px;
  max-width: 570px;
}
.cardItem {
  max-height: 130px;
}
.number {
  font-size: 40px;
}
p {
  margin: 0;
}

</style>