<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import Table from "../../../ui/table/Table.vue";
import { useListStore } from "../../../../stores/list.store.ts";
import DeleteWorkerFeature from "../../../../features/worker/delete/DeleteWorkerFeature.vue";

const listStore = useListStore();
const fields = ["#", "ФИО", "Учреждение"];
const doctors = computed(() =>
  listStore.getList("workers").filter((worker) => worker.roleType === "doctor")
);
const items = computed(() =>
  doctors.value.map((doctor) => [
    doctor.id,
    doctor.fullName,
    doctor.departament.name,
  ])
);
</script>

<template>
  <div class="module">
    <Table :fields="fields" :data="items" :actions="[DeleteWorkerFeature]" />
  </div>
</template>
