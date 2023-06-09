

<template>
  <div class="w-[244px] min-w-[244px] rounded-md bg-gray-400/40 shadow-md" :id="`column-${ column.id }`">

    <div class="handle-column-drag cursor-move w-full bg-gray-200/80 backdrop-blur-md flex items-center justify-center mb-4 p-4 pb-8 rounded-t-md relative">
      <h2 class="font-semibold">{{ column.name }}</h2>

      <div class="absolute bottom-0 left-0 right-0 w-full flex flex-col">
        <div class="w-full flex justify-between text-gray-600 px-2 mb-1 text-sm">
          <h5>Current Stack</h5>
          <h5>{{ getColumnPercentage }}</h5>
        </div>
        <div 
          class="bg-lime-500 h-1 transition-all duration-200" 
          :style="{ width: getColumnPercentage }"
          :title="getColumnPercentage"
        >
        </div>
      </div>
    </div>

    <div class="w-full p-4 max-h-[60vh] overflow-y-auto overflow-x-hidden" data-test-id="items">
      <Draggable
        :list="getColumnItems"
        class="list-group"
        tag="ul"
        animation="200"
        group="items"
        :ghostClass="'ghost'"
        handle=".handle-drag-item"
      >
        <li
          class="cursor-move rounded bg-gray-200 mb-3 flex items-start justify-between"
          v-for="(item, itemIndex) in getColumnItems"
          :key="`item-${ item.id }`"
          :id="`item-${ item.id }`"
        >
          <div class="handle-drag-item p-2">
            {{ item.content }}
          </div>
          <button 
            class="btn font-semibold" 
            @click.stop.prevent="removeItem(itemIndex)" 
          >
            X
          </button>
        </li>
      </Draggable>

      <KanBanBoardAddCardVue :column-index="columnIndex" />

    </div>
  </div>
</template>

<script>

import Draggable from 'vuedraggable'
import KanBanBoardAddCardVue from './KanBanBoardAddCard.vue'
import { useKanbanBoardStore } from './store'
import { MathHelpers } from '@igortrindade/lazyfy'

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
    },

    getColumnPercentage() {
      return this.column.items.length === 0 ? `0%` : MathHelpers.getPercentageOfAmount(useKanbanBoardStore().getItemsTotal, this.column.items.length, true, 1)
    }
  },
  
  methods: {
    removeItem(itemIndex) {
      useKanbanBoardStore().removeItem(this.columnIndex, itemIndex)
    }
  }
};
</script>

<style lang="scss">

.ghost {
  opacity: 0.5;
}

.list-group {
  min-height: 40px;

  span:empty {
    min-height: 40px;
    width: 100%;
    display: block;
  }
}

</style>