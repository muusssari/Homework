<template>
  <div class="cardContainer">
    <a-row :gutter="[8,8]" :wrap="true">
      <a-col  :xs="16" :sm="8" :md="8" :lg="8" :xl="10">
        <a-card :bordered="false" class="cardItem" :loading="loading">
          <p>Total</p>
          <p class="number">{{total}}</p>
        </a-card>
      </a-col>
      <a-col  :xs="16" :sm="8" :md="8" :lg="8" :xl="10">
        <a-card :bordered="false" class="cardItem" :loading="loading">
          <p>Completed</p>
          <p class="number">{{completedNotesCount}}</p>
        </a-card>
      </a-col>
      <a-col  :xs="16" :sm="8" :md="8" :lg="8" :xl="10">
        <a-card :bordered="false" class="cardItem" :loading="loading">
            <p>Not completed</p>
            <p class="number">{{notCompletedNotesCount}}</p>
        </a-card>
      </a-col>
  	</a-row>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    //TODO: Change this use pinia
    const loading = ref<boolean>(false);
    const completedNotesCount = ref<number>(4);
    const notCompletedNotesCount = ref<number>(6);
    const newNotesCount = ref<number>(0);
    let total = computed(() => {
      return completedNotesCount.value + notCompletedNotesCount.value + newNotesCount.value;
    })
    return {
      loading,
      completedNotesCount,
      notCompletedNotesCount,
      total,
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