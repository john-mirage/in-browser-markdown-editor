<script setup lang="ts">
import Drawer from "@components/drawer.vue";
import Bar from "@components/bar.vue";
import Preview from "@components/preview.vue";
import { reactive } from 'vue'

const state = reactive({ drawer: false });

function toggleDrawer() {
  state.drawer = !state.drawer;
}

</script>

<template>
  <div class="overflow-hidden">
    <div class="absolute z-0 top-0 left-0 w-full h-56 bg-neutral-800"></div>
    <Transition>
      <Drawer v-if="state.drawer" />
    </Transition>
    <div class="flex-shrink-0 flex-grow-0 basis-auto w-full transition-transform duration-300" :class="{'translate-x-250': state.drawer}">
      <Bar :drawer="state.drawer" @toggle-drawer="toggleDrawer" />
      <main class="w-full">
        <Preview />
      </main>
    </div>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
}
</style>
