<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useListStore } from "./stores/list.store.ts";
import { DoctorWorker } from "./entities/worker/doctor/index.ts";
import { NurseWorker } from "./entities/worker/nurse/index.ts";
import { Departament } from "./entities/departament/index.ts";
import DoctorListModule from "./components/modules/list/doctor/DoctorListModule.vue";
import NurseListModule from "./components/modules/list/nurse/NurseListModule.vue";
import Header from "./components/globals/header/Header.vue";
import JsonPlaceholderService from "./services/jsonplaceholder/index.ts";

const listStore = useListStore();
const typeWorker = ref('doctor')
const haveWorkers = computed(() => listStore.getList("workers").length > 0);
const initWorkers = async () => {
  const users = await JsonPlaceholderService.getUsers();
  users.forEach((user, index) => {
    if (index % 2 === 0)
      listStore.addItemToList(
        "workers",
        new DoctorWorker(user.id, user.name, new Departament("Кардиология", 'cardiology')),
      );
    else
      listStore.addItemToList(
        "workers",
        new NurseWorker(user.id, user.name, new Departament("Хирургия", 'surgary')),
      );
  });
};

onMounted(async () => {
  Promise.all([initWorkers()]);
});
</script>

<template>
  <div class="w-screen h-screen p-5 text-white bg-slate-300">
    <div class="container mx-auto flex flex-col gap-5">
      <Header v-model="typeWorker" />
      <div>
        <DoctorListModule v-if="typeWorker === 'doctor'" />
        <NurseListModule v-if="typeWorker === 'nurse' " />
      </div>
    </div>
  </div>
</template>
