<template>
    <a-table :columns="columns" :data-source="data" @change="onChange">
        <template #footer>Footer</template>
    </a-table>
</template>
<script lang="ts">
import type { TableColumnType, TableProps } from 'ant-design-vue';
import { defineComponent } from 'vue';

enum StatusType{
    NEW = 'New',
    COMPELETED = 'Completed',
    NOTCOMPLETED = 'Not completed',
}

type TableDataType = {
    id: number;
    title: string;
    content: string;
    status: StatusType;
};

const columns: TableColumnType<TableDataType>[] = [
    {
        title: 'Id',
        dataIndex: 'id',
        sorter: (a: TableDataType, b: TableDataType) => a.id - b.id,
        defaultSortOrder: 'ascend',
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'title',
        dataIndex: 'title',
        sorter: (a: TableDataType, b: TableDataType) => a.title.length - b.title.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'content',
        dataIndex: 'content',
        sortDirections: ['descend', 'ascend'],
        sorter: (a: TableDataType, b: TableDataType) => a.content.length - b.content.length,
    },
    {
        title: 'status',
        dataIndex: 'status',
        sorter: (a: TableDataType, b: TableDataType) => a.status.length - b.status.length,
        sortDirections: ['descend', 'ascend'],
    },
];

const data: TableDataType[] = [
    {
        id: 1,
        title: 'John Brown',
        content: 'adsdasadsads',
        status: StatusType.COMPELETED,
    },
    {
        id: 2,
        title: 'Jim Green',
        content: 'adsdsaadsadsa',
        status: StatusType.NEW,
    },
    {
        id: 3,
        title: 'Joe Black',
        content: 'qewqeewasdc',
        status: StatusType.NEW,
    },
    {
        id: 4,
        title: 'Jim Red',
        content: 'dqwedwaszcas',
        status: StatusType.NOTCOMPLETED,
    },
];
export default defineComponent({
    setup() {
        const onChange: TableProps<TableDataType>['onChange'] = (pagination, filters, sorter) => {
            console.log('params', pagination, filters, sorter);
        };
        return {
            data,
            columns,
            onChange,
        };
    },
});
</script>
  