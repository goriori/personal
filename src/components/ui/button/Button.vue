<script setup lang="ts">
import { ButtonProps } from "./types.ts";

defineProps<ButtonProps>();
</script>

<template>
  <button
    class="rounded-md p-3 text-sm font-medium text-gray hover:bg-gray-700 hover:text-white"
  >
    <slot />
  </button>
</template>
