export enum StatusType{
  NEW = 'New',
  COMPELETED = 'Completed',
  NOTCOMPLETED = 'Not completed',
}

export type TableDataType = {
  key: number;
  title: string;
  content: string;
  status: StatusType;
};

export type NoteType = {
  id: number,
  title: string,
  content: string,
  status: StatusType,
}