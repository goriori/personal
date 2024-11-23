<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Table from "../../../ui/table/Table.vue";
import { useListStore } from "../../../../stores/list.store.ts";
import DeleteWorkerFeature from "../../../../features/worker/delete/DeleteWorkerFeature.vue";
import DeleteWorkerNursesFeature from '../../../../features/worker/delete/DeleteWorkerNurseFeature.vue' 
const listStore = useListStore();
const fields = ["#", "ФИО", "Учреждение"];
const nurses = computed(()=> 
  listStore.getList("workers").filter((worker) => worker.roleType === "nurse")
)
const items = computed(()=>  nurses.value.map((nurse) => [
    nurse.id,
    nurse.fullName,
    nurse.departament.name,
])
);
</script>

<template>
  <div class="module text-black flex flex-col gap-3">
    <h1 class="font-bold">Персонал Медсестер</h1>
    <p v-if="nurses.length === 0" class="">Список Медсестер пуст</p>
    <Table
      v-else
      :fields="fields"
      :data="items"
      :actions="[DeleteWorkerFeature]"
      :actionsForGroup="[DeleteWorkerNursesFeature]"
    />

  </div>
</template>
