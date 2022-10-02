<template>
    <a-table
      :loading="store.loadingState"
      :columns="columns"
      :data-source="computedNotesData"
      :row-selection="rowSelection"
      :pagination="false">
      <template #footer>
        <DeleteNoteAlert v-if="showAlert" :notesToDelete="selectedKeys" @buttonAction="buttonAction"/>
        <AddNoteModalVue ref="myChild" />
      </template>
    </a-table>
</template>

<script lang="ts">
import type { TableColumnType } from 'ant-design-vue';
import { computed, defineComponent, isRef, ref, toRefs } from 'vue';
import AddNoteModalVue from './modals/addNote.modal.vue';
import DeleteNoteAlert from './alerts/deleteNote.alert.vue';
import { useNotesStore } from '@/store/notes.store';
import type { TableDataType } from '@/types/note.types';

export default defineComponent({
  components: {
    AddNoteModalVue,
    DeleteNoteAlert
  },
  setup() {
    const store = useNotesStore();
    const columns: TableColumnType<TableDataType>[] = [
      {
          title: 'Id',
          dataIndex: 'key',
          key: 'key',
          sorter: (a: TableDataType, b: TableDataType) => a.key - b.key,
          defaultSortOrder: 'ascend',
          sortDirections: ['descend', 'ascend'],
      },
      {
          title: 'title',
          dataIndex: 'title',
          key: 'title',
          sorter: (a: TableDataType, b: TableDataType) => a.title.length - b.title.length,
          sortDirections: ['descend', 'ascend'],
      },
      {
          title: 'content',
          dataIndex: 'content',
          key: 'content',
          sortDirections: ['descend', 'ascend'],
          sorter: (a: TableDataType, b: TableDataType) => a.content.length - b.content.length,
      },
      {
          title: 'status',
          dataIndex: 'status',
          key: 'status',
          sorter: (a: TableDataType, b: TableDataType) => a.status.length - b.status.length,
          sortDirections: ['descend', 'ascend'],
      },
    ];
    const computedNotesData = computed(() => {
      return store.notes.map(x => {return {...x, key: x.id }})
    })

  const selectedKeys = ref<number[]>([]);
  const rowSelection = ref({
    selectedRowKeys: computed(() => selectedKeys.value),
    onChange: (selectedRowKeys: number[]) => {
    selectedKeys.value = selectedRowKeys;
  }});
  const buttonAction = (alertAction: boolean) => {
    if(alertAction) {
      store.deleteNote(selectedKeys.value.map(e => isRef(e) ? e.value : e) as number[])
      selectedKeys.value = [];
    }else {
      selectedKeys.value = [];
    }
  }
  const showAlert = computed(() => {
    return selectedKeys.value.length;
  })
    return {
      store,
      selectedKeys,
      showAlert,
      computedNotesData,
      columns,
      rowSelection,
      buttonAction,
    };
  },
});
</script>
