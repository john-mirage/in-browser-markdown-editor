<script setup lang="ts">
defineEmits(["toggle-drawer"]);
</script>

<template>
  <header class="flex flex-row items-center w-full h-56 bg-neutral-800">
    <button @click="$emit('toggle-drawer')" class="flex justify-center items-center w-56 h-56 bg-neutral-700">
      <svg class="w-24 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 18">
        <g fill="#FFF" fill-rule="evenodd">
          <path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z"/>
        </g>
      </svg>
    </button>
  </header>
</template>

<style>

</style>