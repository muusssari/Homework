import { StatusType } from "@/types/note.types";

export const notesTestData = [{
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
  status: StatusType.NOTCOMPLETED,
},
{
  id: 4,
  title: 'Jim Red',
  content: 'dqwedwaszcas',
  status: StatusType.NOTCOMPLETED,
}
]