<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import Table from "../../../ui/table/Table.vue";
import { useListStore } from "../../../../stores/list.store.ts";
import CreateWorkerFeature from "../../../../features/worker/create/CreatwWorkerFeature.vue";
import DeleteWorkerFeature from "../../../../features/worker/delete/DeleteWorkerFeature.vue";
import DeleteWorkerDoctorsFeature from "../../../../features/worker/delete/DeleteWorkerDoctorsFeature.vue";
import EditWorkerFeature from "../../../../features/worker/edit/EditWorkerFeature.vue";
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
  <div class="module text-black flex flex-col gap-3">
    <div class="flex justify-between">
      <h1 class="font-bold">Персонал Врачей</h1>
      <CreateWorkerFeature />
    </div>
    <p v-if="doctors.length === 0" class="">Список Врачей пуст</p>
    <Table
      v-else
      :fields="fields"
      :data="items"
      :actions="[DeleteWorkerFeature, EditWorkerFeature]"
      :actionsForGroup="[DeleteWorkerDoctorsFeature]"
    />
  </div>
</template>
