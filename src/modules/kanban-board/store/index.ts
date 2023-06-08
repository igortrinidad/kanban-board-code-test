import { defineStore } from 'pinia'
import { StringHelpers } from '@igortrindade/lazyfy'
import MockupDataApiService, { TodoTaskInterface } from '@/service/MockupDataApiService'
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

export const useKanbanBoardStore = defineStore('kanbanBoard', {

  state: () => ({ 
    columns: [] as Array<ColumnInterface>, 
  }),

  getters: {
    getColumns: (state) => state.columns,
    getItemsTotal: state => state.columns.reduce((acc, column) => acc + column.items.length, 0),
  },

  actions: {

    loadMockupData() {

      const columns = ['BackLog', 'To Do', 'Doing', 'Done']

      MockupDataApiService.getTodos().then((todos: Array<TodoTaskInterface>) => {
        this.columns = columns.map((column, index) => {

          const newColumn = {
            key: column.toLowerCase(),
            id: StringHelpers.randomString(16),
            name: column,
            items: todos.slice(index * 5, (index + 1) * 5).map((todo: TodoTaskInterface) => ({
              content: todo.title,
              id: StringHelpers.randomString(16),
            }))
          }

          return newColumn
        })
      })

    },
    updateColumn(columnIndex: number, value: ColumnInterface) {
      this.columns[columnIndex] = value
      console.log(this.columns[columnIndex])
    },

    addItem(columnIndex: number, content: string) {
      this.columns[columnIndex].items.push({
        content,
        id: StringHelpers.randomString(16),
      })
    },

    removeItem(columnIndex: number, itemIndex: number) {
      this.columns[columnIndex].items.splice(itemIndex, 1)
    }
  },
})
