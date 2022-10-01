<template>
    <a-table
        :columns="columns"
        :data-source="data"
        :row-selection="rowSelection"
        :pagination="false">
        <template #footer>Footer</template>
    </a-table>
</template>

<script lang="ts">
import type { TableColumnType, TableProps } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';

enum StatusType{
    NEW = 'New',
    COMPELETED = 'Completed',
    NOTCOMPLETED = 'Not completed',
}

type TableDataType = {
    key: number;
    title: string;
    content: string;
    status: StatusType;
};

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

const rowSelection = ref({
  onChange: (selectedRowKeys: (string | number)[], selectedRows: TableDataType[]) => {
    //TODO: add this pinia
    console.log(selectedRowKeys);
  },
});

export default defineComponent({
    setup() {
        return {
            data,
            columns,
            rowSelection,
        };
    },
});
</script>
  