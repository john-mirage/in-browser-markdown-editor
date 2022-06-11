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
  <div class="flex flex-row w-full overflow-hidden">
    <div class="absolute z-0 top-0 left-0 w-full h-56 bg-neutral-800"></div>
    <TransitionGroup name="content">
      <Drawer v-if="state.drawer" key="drawer" />
      <div class="flex-shrink-0 flex-grow-0 basis-auto w-full" key="view">
        <Bar @toggle-drawer="toggleDrawer" />
        <main class="w-full">
          <Preview />
        </main>
      </div>
    </TransitionGroup>
  </div>
</template>

<style>
.content-move,
.content-enter-active,
.content-leave-active {
  transition: all 300ms ease;
}

.content-enter-from,
.content-leave-to {
  transform: translateX(-100%);
}

.content-leave-active {
  position: absolute;
}
</style>
