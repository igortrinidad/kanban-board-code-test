import { defineStore } from 'pinia'
import { StringHelpers } from '@igortrindade/lazyfy'

export interface ItemInterface {
  content: string,
  id: string,
}

export interface ColumnInterface {
  key: string,
  id: string,
  name: string,
  items: Array<ItemInterface>
}

const itemsExample = ['First Item', 'Second Item', 'Third Item', 'Fourth Item', 'Fifth Item']

const columnsExample = [
  {
    key: 'to-do',
    id: StringHelpers.randomString(10),
    name: 'To Do',
    items: itemsExample.map((item) => ({ content: item, id: StringHelpers.randomString(10) }))
  },
  {
    key: 'doing',
    id: StringHelpers.randomString(10),
    name: 'Doing',
    items: itemsExample.map((item) => ({ content: item, id: StringHelpers.randomString(10) }))
  },
  {
    key: 'done',
    id: StringHelpers.randomString(10),
    name: 'Done',
    items: itemsExample.map((item) => ({ content: item, id: StringHelpers.randomString(10) }))
  },
]

export const useKanbanBoardStore = defineStore('kanbanBoard', {

  state: () => ({ 
    columns: columnsExample as Array<ColumnInterface>, 
  }),

  getters: {
    getColumns: (state) => state.columns,
  },

  actions: {
    updateColumn(columnIndex: number, value: ColumnInterface) {
      this.columns[columnIndex] = value
      console.log(this.columns[columnIndex])
    },

    removeItem(columnIndex: number, itemIndex: number) {
      this.columns[columnIndex].items.splice(itemIndex, 1)
    }
  },
})
