<script setup lang="ts">
import { gsap } from "gsap";
import Drawer from "@components/drawer.vue";
import Bar from "@components/bar.vue";
import Preview from "@components/preview.vue";
import Editor from "@components/editor.vue";
import {onMounted, onUnmounted, reactive, ref, watch} from "vue";

const mainRef = ref(null);

const state = reactive({
  drawer: false,
  preview: false,
  isDesktop: false,
});

watch(
    () => state.drawer,
    (drawer) => {
      if (drawer) {
        gsap.to(mainRef.value, {
          duration: 0.3,
          x: 250,
        });
      } else {
        gsap.to(mainRef.value, {
          duration: 0.3,
          x: 0,
        });
      }
    }
);

onMounted(() => {
  state.isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  window.addEventListener("resize", handleScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleScreenWidth);
});

function onBeforeEnter(element: HTMLElement) {
  gsap.set(element, {
    x: "-100%",
  });
}

function onEnter(element: HTMLElement, done) {
  gsap.to(element, {
    duration: 0.3,
    x: 0,
    onComplete: done
  });
}

function onLeave(element: HTMLElement, done) {
  gsap.to(element, {
    duration: 0.3,
    x: "-100%",
    onComplete: done
  });
}

function handleScreenWidth() {
  if (!state.isDesktop && window.matchMedia("(min-width: 1024px)").matches) {
    state.isDesktop = true;
  } else if (state.isDesktop && !window.matchMedia("(min-width: 1024px)").matches) {
    state.isDesktop = false;
  }
}

function toggleDrawer() {
  state.drawer = !state.drawer;
}

function togglePreview() {
  state.preview = !state.preview;
}
</script>

<template>
  <div class="overflow-hidden">
    <div class="absolute z-0 top-0 left-0 w-full h-56 bg-neutral-800"></div>
    <Transition
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
        :css="false"
    >
      <Drawer v-if="state.drawer" />
    </Transition>
    <div ref="mainRef" class="flex-shrink-0 flex-grow-0 basis-auto w-full">
      <Bar :drawer="state.drawer" @toggle-drawer="toggleDrawer" />
      <main class="relative w-full min-h-view">
        <Preview />
        <button @click="togglePreview" class="absolute z-50 top-0 right-0 flex justify-center items-center w-42 h-42 text-neutral-500">
          <svg class="w-16 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12">
            <path fill="currentColor" d="M7.784.003c4.782-.144 7.597 4.31 8.109 5.198a.8.8 0 0 1 0 .8c-.688 1.2-3.255 5.086-7.677 5.198h-.2c-4.71 0-7.405-4.326-7.909-5.198a.8.8 0 0 1 0-.8C.803 4.001 3.362.115 7.784.003Zm.38 1.6h-.3c-3.199.08-5.286 2.71-6.086 3.998C2.482 6.73 4.73 9.68 8.176 9.6c3.199-.08 5.262-2.711 6.086-3.999-.712-1.127-2.967-4.086-6.398-3.998ZM8 2.803A2.799 2.799 0 1 1 8 8.4a2.799 2.799 0 0 1 0-5.598Zm0 1.599A1.2 1.2 0 1 0 8 6.8a1.2 1.2 0 0 0 0-2.4Z"/>
          </svg>
        </button>
      </main>
    </div>
  </div>
</template>

<style>

</style>
