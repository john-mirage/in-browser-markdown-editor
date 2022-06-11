<script setup lang="ts">
defineEmits(["toggle-drawer"]);
defineProps<{
  drawer: boolean;
}>();
</script>

<template>
  <header class="relative z-50 flex flex-row items-center w-full h-56 bg-neutral-800">
    <button @click="$emit('toggle-drawer')" class="flex justify-center items-center w-56 h-56 bg-neutral-700 text-neutral-100">
      <Transition name="fade" mode="out-in">
        <svg v-if="drawer" class="w-18 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g fill="currentColor" fill-rule="evenodd">
            <path d="M2.1.686 23.315 21.9l-1.415 1.415L.686 2.1z"/>
            <path d="M.686 21.9 21.9.685l1.415 1.415L2.1 23.314z"/>
          </g>
        </svg>
        <svg v-else class="w-24 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 18">
          <g fill="currentColor" fill-rule="evenodd">
            <path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z"/>
          </g>
        </svg>
      </Transition>
    </button>
  </header>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>