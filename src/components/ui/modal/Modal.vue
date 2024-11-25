<script setup lang="ts">
import {MEmits} from './types.ts'
import CrossIcon from '../icons/CrossIcon.vue'
const emits = defineEmits<MEmits>()

const onClose = () => {
  emits('onClose')
} 
</script>

<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500/75 transition-opacity"
      aria-hidden="true"
    ></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto"
    >
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="flex justify-end ">
              <CrossIcon class="w-4 h-4" @click="onClose"/>
            </div>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
