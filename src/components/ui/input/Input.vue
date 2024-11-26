<script setup lang="ts">
import {IProps, IEmits} from './types.ts'
const model = defineModel()
const props = defineProps<IProps>()
const emits = defineEmits<IEmits>()
const onInput = (event) => emits('onInput', event.target.value) 
</script>
<template>
  <input
    type="text"
    name="fullname"
    id="fullname"
    v-model="model"
    class="border w-full h-10 p-5"
  />
</template>
