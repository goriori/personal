<script setup lang="ts">
import { onMounted } from "vue";
import Button from "../../../components/ui/button/Button.vue";
import { useListStore } from "../../../stores/list.store.ts";

const listStore = useListStore();

const deleteWorker = (event) => {
  const id = event.target.dataset.id;

  if (id) listStore.deleteItemList("workers", +id);
};

onMounted(() => {
});
</script>

<template>
  <Button class="transition bg-red-800 hover:bg-red-900" @click="deleteWorker"
    >Удалить</Button
  >
</template>
