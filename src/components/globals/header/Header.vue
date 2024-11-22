<script setup lang="ts">
import {defineModel} from 'vue'
import {HEmits} from './types.ts'
import Button from "../../ui/button/Button.vue";

const typeWorker = defineModel()
const emits = defineEmits<HEmits>()
const activeState = 'bg-gray-700'
const updateWorkerType = (type:'doctor'| 'nurse') =>{
  emits('update:modelValue', type)
}
</script>
<template>
  <header class="flex justify-between">
    <h1>HealhtPersonal</h1>
    <div class="flex gap-2">
      <Button class="transition" :class="[typeWorker === 'doctor' ? activeState : '']" @click="updateWorkerType('doctor')">Врачи</Button>
      <Button class="transition" :class="[typeWorker === 'nurse' ? activeState : '']" @click="updateWorkerType('nurse')">Медсестры</Button>
    </div>
  </header>
</template>
