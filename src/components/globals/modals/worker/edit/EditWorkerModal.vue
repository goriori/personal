<script setup lang="ts">
import { ref } from "vue";
import { useListStore } from "../../../../../stores/list.store.ts";
import Button from "../../../../ui/button/Button.vue";
import Modal from "../../../../ui/modal/Modal.vue";
import Input from "../../../../ui/input/Input.vue";
import { MEmits, MProps } from "./types.ts";

const props = defineProps<MProps>();
const emits = defineEmits<MEmits>();
const fullName = ref(props.worker.fullName);
const deportament = ref(props.worker.departament);
console.log(props);
const updateWorker = () => {
  props.worker.fullName = fullName;
  if (deportament.value.type === "cardiology") {
    props.worker.departament.name = "Кардиология";
  } else {
    props.worker.departament.name = "Хирургия";
  }
  console.log(deportament.value)
  props.worker.departament.type = deportament.value.type;
  console.log(props.worker)
  onClose()
};
const onClose = () => {
  emits("onClose");
  console.log("close");
};
</script>

<template>
  <Modal @on-close="onClose">
    <div>
      <h2 class="font-bold">Информация о работнике</h2>
      <form @submit.prevent="updateWorker" class="flex flex-col gap-2 text-black">
        <label for="fullname">ФИО</label>
        <Input v-model="fullName" />
        <label for="deportament">Учреждение</label>
        <select
          name="deportament"
          v-model="deportament.type"
          id="deportament"
          class="border w-full h-10"
        >
          <option value="cardiology">Кардиология</option>
          <option value="surgary">Хирургия</option>
        </select>
        <Button class="bg-orange-500 hover:bg-orange-600 h-10"
        >Сохранить</Button
        >
      </form>
    </div>
  </Modal>
</template>
