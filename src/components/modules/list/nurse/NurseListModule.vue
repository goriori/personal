<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Table from "../../../ui/table/Table.vue";
import { useListStore } from "../../../../stores/list.store.ts";
import DeleteWorkerFeature from "../../../../features/worker/delete/DeleteWorkerFeature.vue";

const listStore = useListStore();
const fields = ["ФИО", "Учреждение"];
const doctors = ref([]);
const items = ref([]);
const getDoctorList = () =>
  listStore.getList("workers").filter((worker) => worker.roleType === "nurse");
const initItems = () =>
  doctors.value.map((doctor) => [doctor.fullName, doctor.departament.name]);
onMounted(() => {
  if (listStore.getList("workers").length > 0) {
    doctors.value = getDoctorList();
    items.value = initItems();
  }
});
</script>

<template>
  <div class="module">
    <Table
      v-if="doctors.length > 0"
      :fields="fields"
      :data="items"
      :actions="[DeleteWorkerFeature]"
    />
  </div>
</template>
