<template>
    <a-table
      :loading="loading"
      :columns="columns"
      :data-source="data"
      :row-selection="rowSelection"
      :pagination="false">
      <template #footer>
        <DeleteNoteAlert v-if="showAlert" :notesToDelete="selectedKeys"/>
        <AddNoteModalVue ref="myChild" />
      </template>
    </a-table>
</template>

<script lang="ts">
import { StatusType, type TableDataType } from '@/types/note.types';
import type { TableColumnType } from 'ant-design-vue';
import { computed, defineComponent, ref } from 'vue';
import AddNoteModalVue from './modals/addNote.modal.vue';
import DeleteNoteAlert from './alerts/deleteNote.alert.vue';

export default defineComponent({
  components: {
    AddNoteModalVue,
    DeleteNoteAlert
  },
  setup() {

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

  const data: TableDataType[] = [
    {
        key: 1,
        title: 'John Brown',
        content: 'adsdasadsads',
        status: StatusType.COMPELETED,
    },
    {
        key: 2,
        title: 'Jim Green',
        content: 'adsdsaadsadsa',
        status: StatusType.NEW,
    },
    {
        key: 3,
        title: 'Joe Black',
        content: 'qewqeewasdc',
        status: StatusType.NEW,
    },
    {
        key: 4,
        title: 'Jim Red',
        content: 'dqwedwaszcas',
        status: StatusType.NOTCOMPLETED,
    },
  ];
  //TODO: change this use pinia
  let loading = ref<boolean>(false)

  let selectedKeys = ref<number[]>([]);
  const rowSelection = ref({
  onChange: (selectedRowKeys: number[]) => {
    //TODO: add this pinia
    selectedKeys.value = selectedRowKeys;
  }});
  const showAlert = computed(() => {
    return selectedKeys.value.length;
  })
    return {
      loading,
      selectedKeys,
      showAlert,
      data,
      columns,
      rowSelection,
    };
  },
});
</script>
