<template>
  <div class="w-full">

    <Transition name="fade" mode="out-in">
      <button v-if="!addCard" class="btn btn-primary text-xs" @click="toggleAddCard()">Add Card</button>
  
      <div class="w-full flex flex-col space-y-2" v-else>
        <textarea ref="textarea" type="text" class="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-sky-500" placeholder="Enter a title for this card"></textarea>
        <div class="w-full flex space-x-2">
          <button class="btn btn-primary text-xs" @click="toggleAddCard()">Add</button>
          <button class="btn text-xs" @click="toggleAddCard()">Cancel</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addCard: false
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
      }, 400)
    }
  }
}
</script>

<style>

</style>