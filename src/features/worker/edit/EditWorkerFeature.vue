<script setup lang="ts">
import { useApplicationStore } from "../../../stores/app.store.ts";
import { useListStore } from "../../../stores/list.store.ts";
import Button from "../../../components/ui/button/Button.vue";

const applicationStore = useApplicationStore();
const listStore = useListStore();
const openModal= (event) => {
  const id = event.target.dataset.id;
  const worker = listStore
    .getList("workers")
    .find((worker) => worker.id === +id);
  
  applicationStore.getModal("Edit-Worker")?.setSettings({worker}).onShow();
};
</script>

<template>
  <Button
    class="bg-orange-700 hover:bg-orange-900 transition text-white"
    @click="openModal"
    >Изменить</Button
  >
</template>
