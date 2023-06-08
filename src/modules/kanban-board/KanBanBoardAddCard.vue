<template>
  <div class="w-full">

    <Transition name="fade" mode="out-in">
      <button v-if="!addCard" class="btn btn-primary text-xs" @click="toggleAddCard()">Add Card</button>
  
      <div class="w-full flex flex-col space-y-2" v-else>
        <textarea 
          ref="textarea" 
          type="text" 
          class="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-sky-500" 
          placeholder="Enter a title for this card"
          v-model="content"
        ></textarea>
        <div class="w-full flex space-x-2">
          <button class="btn btn-primary text-xs" @click="addItem()" :disabled="content.length <= 2">Add</button>
          <button class="btn text-xs" @click="toggleAddCard()">Cancel</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>

import { useKanbanBoardStore } from './store'

export default {
  props: {
    columnIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      addCard: false,
      content: ''
    }
  },
  methods: {
    toggleAddCard() {
      this.addCard = !this.addCard;
      setTimeout(() => {
        if(this.addCard) {
          this.$nextTick(() => {
            this.$refs.textarea.focus()
          })
        }
      }, 300)
    },

    addItem() {
      this.toggleAddCard()
      setTimeout(() => {
        useKanbanBoardStore().addItem(this.columnIndex, this.content)
        this.content = ''
      }, 200)
    }
  }
}
</script>

<style>

</style>