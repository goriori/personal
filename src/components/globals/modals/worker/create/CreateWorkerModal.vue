<script setup lang="ts">
import { ref } from "vue";
import { useListStore } from "../../../../../stores/list.store.ts";
import { MEmits } from "./types.ts";
import { Departament } from "../../../../../entities/departament/index.ts";
import { NurseWorker } from "../../../../../entities/worker/nurse/index.ts";
import { DoctorWorker } from "../../../../../entities/worker/doctor/index.ts";
import Button from "../../../../ui/button/Button.vue";
import Modal from "../../../../ui/modal/Modal.vue";
import Input from "../../../../ui/input/Input.vue";

const emits = defineEmits<MEmits>();
const listStore = useListStore();
const form = ref({
  fullName: "",
  type: "doctor",
  deportament: "surgary",
});

const createWorker = () => {
  const id = Math.floor(Math.random() * 1000);
  let worker = null;
  const deportament = new Departament(
    form.value.deportament == "cardiology" ? "Кардиология" : "Хирургия",
    form.value.deportament
  );
  if (form.value.type === "doctor") {
    worker = new DoctorWorker(id, form.value.fullName, deportament);
  } else {
    worker = new NurseWorker(id, form.value.fullName, deportament);
  }
  listStore.addItemToList("workers", worker);
  onClose();
};
const onClose = () => {
  emits("onClose");
};
</script>

<template>
  <Modal @on-close="onClose">
    <div class="flex flex-col gap-5">
      <h2 class="font-bold">Добавить Работника</h2>
      <form
        @submit.prevent="createWorker"
        class="flex flex-col gap-2 text-black"
      >
        <label for="fullname">ФИО</label>
        <Input v-model="form.fullName" />
        <label for="role">Квалификация </label>
        <select
          v-model="form.type"
          name="role"
          id="role"
          class="border w-full h-10"
        >
          <option value="nurse">Медсестра</option>
          <option value="doctor">Врач</option>
        </select>
        <label for="deportament">Учреждение</label>
        <select
          name="deportament"
          v-model="form.deportament"
          id="deportament"
          class="border w-full h-10"
        >
          <option value="cardiology">Кардиология</option>
          <option value="surgary">Хирургия</option>
        </select>
        <Button class="bg-green-500 hover:bg-green-600 h-10">Создать</Button>
      </form>
    </div>
  </Modal>
</template>
