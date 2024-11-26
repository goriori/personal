
<script setup lang="ts">
import { useApplicationStore } from "../../../stores/app.store.ts";
import { useListStore } from "../../../stores/list.store.ts";
import Button from "../../../components/ui/button/Button.vue";

const applicationStore = useApplicationStore();
const listStore = useListStore();
const openModal = () => {
  applicationStore.getModal("Create-Worker").onShow();
};
</script>

<template>
  <Button
    class="bg-green-500 hover:bg-green-600 transition"
    @click="openModal"
    >Добавить</Button
  >
</template>
