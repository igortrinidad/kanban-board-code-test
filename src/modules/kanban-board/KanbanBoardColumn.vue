

<template>
  <div class="w-[244px] min-w-[244px] rounded-md bg-gray-400/40 shadow-md">

    <div class="w-full bg-gray-200/80 backdrop-blur-md flex items-center justify-center mb-4 p-4 rounded-t-md">
      <h2 class="font-semibold">{{ column.name }}</h2>
    </div>

    <div class="w-full p-4 max-h-[60vh] overflow-y-auto overflow-x-hidden">
      <Draggable
        class="list-group "
        tag="ul"
        :list="getColumnItems"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
      <li
        class="list-group-item rounded p-2 bg-gray-200 mb-3"
        v-for="item in getColumnItems"
        :key="`column-${ item.id }`"
      >
        {{ item.content }}
      </li>
      </Draggable>

      <KanBanBoardAddCardVue />

    </div>
  </div>
</template>

<script>

import Draggable from 'vuedraggable'
import KanBanBoardAddCardVue from './KanBanBoardAddCard.vue'
import { useKanbanBoardStore } from './store'

export default {
  components: {
    Draggable,
    KanBanBoardAddCardVue
  },
  props: {
    column: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      isUpdating: false,
      tempColumn: null,
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: 'lists',
        disabled: false,
        ghostClass: "ghost"
      };
    },

    getColumnItems: {
      get() {
        return this.tempColumn ? this.tempColumn : this.column.items
      },
      set(value) {
        const columnUpdated = {
          ...this.column,
          items: value
        }
        this.isUpdating = true
        this.$set(this, 'tempColumn', columnUpdated)
        useKanbanBoardStore().updateColumn(this.columnIndex, columnUpdated)
        setTimeout(() => {
          this.tempColumn = null
        }, 10)
      }
    }
  }
};
</script>

<style lang="scss">
.button {
  margin-top: 35px;
}

.ghost {
  opacity: 0.5;
}

.list-group {
  min-height: 40px;

  span {
    min-height: 40px;
    width: 100%;
    display: block;
  }
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>