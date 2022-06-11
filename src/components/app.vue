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
    <Drawer v-if="state.drawer" />
    <div class="flex-shrink-0 flex-grow-0 basis-auto w-full">
      <Bar @toggle-drawer="toggleDrawer" />
      <main class="w-full">
        <Preview />
      </main>
    </div>
  </div>
</template>

<style>

</style>
