<template>
  <div class="w-full flex flex-col space-y-8">

    <div class="w-full bg-gray-200/80 rounded-md p-4 shadow-md backdrop-blur-md flex justify-between items-center">

      <div class="">
        <h2 class="text-2xl font-bold text-gray-800">Kanban Board</h2>
        <a class="text-sm font-bold text-sky-600" href="https://igortrindade.dev" target="_blank">
          By Igor Trindade
        </a>
      </div>
      <a href="https://github.com/igortrinidad/kanban-board-code-test" target="_blank">
        <img src="https://igortrinidad.github.io/kanban-board-code-test/github-mark.svg" class="w-8 h-8" alt="Github Logo" />
      </a>
    </div>
    
    <div data-test-id="columns">
      <Draggable
        class="w-full flex space-x-6 overflow-x-auto pb-8"
        tag="div"
        :list="getColumns"
        animation="200"
        group="columns"
        :disabled="false"
        :ghostClass="'ghost'"
        handle=".handle-column-drag"
      >
        <KanbanBoardColumn 
          v-for="(column, index) in getColumns"
          :key="column.id"
          :column="column"
          :column-index="index"
        />
      </Draggable>
    </div>
  </div>
</template>

<script>

import Draggable from 'vuedraggable'
import KanbanBoardColumn from './KanbanBoardColumn.vue'
import { useKanbanBoardStore } from './store'

export default {
  components: {
    KanbanBoardColumn,
    Draggable
  },
  computed: {
    getColumns() {
      return useKanbanBoardStore().getColumns
    }
  },
  mounted() {
    useKanbanBoardStore().loadMockupData()
  }
}
</script>
