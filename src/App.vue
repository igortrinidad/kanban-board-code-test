<template>
  <div id="app" class="p-8">
    <router-view/>
  </div>
</template>

<style lang="scss">

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(132deg, #1CB5E0 0%, #000851 100%);
  min-height: 100vh;

  @apply text-gray-800;
}

.btn {
  @apply rounded-md px-4 py-2 font-semibold;

  &.btn-primary {
    @apply bg-gradient-to-br from-gray-700 to-gray-900 text-gray-200;
  }

}

button:disabled {
  opacity: 0.7;
}

/* fade **/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scrollbars */
/* ----------------------------------------- */
*::-webkit-scrollbar {
  background-color: #D6DDE520;
  width: 8px; height: 8px;

}
*::-webkit-scrollbar:vertical {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

*::-webkit-scrollbar:horizontal {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}

*::-webkit-scrollbar-thumb {
  border: 1px solid #D6DDE520;
  background: #1f2937;
  border-radius: 4px;
}

*::-webkit-scrollbar-corner {
  background-color: #D6DDE520;
  display: none;
}
/* ----------------------------------------- Scrollbars */


</style>
