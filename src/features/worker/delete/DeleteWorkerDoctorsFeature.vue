<script setup lang="ts">
import { onMounted } from "vue";
import Button from "../../../components/ui/button/Button.vue";
import { useListStore } from "../../../stores/list.store.ts";

const listStore = useListStore();

const deleteWorkerDoctors = () => {
  const doctorIds = listStore
    .getList("workers")
    .filter((worker) => worker.roleType === "doctor")
    .map((doctor) => doctor.id);
  doctorIds.forEach(id=> listStore.deleteItemList('workers', id))
};
</script>

<template>
  <Button
    class="transition bg-red-800 hover:bg-red-900"
    @click="deleteWorkerDoctors"
    >Удалить</Button
  >
</template>
