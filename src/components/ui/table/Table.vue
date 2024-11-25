<script setup lang="ts">
import { ref, computed, watch, onUpdated } from "vue";
import { TProps } from "./types.ts";

const props = defineProps<TProps>();
console.log(props)
const isTargetAll = ref(false);
const rows = computed(() => {
  if (!props.data) return;
  return props.data.map((row, index) => ({
    id: row[0],
    target: isTargetAll.value,
    values: row,
  }));
});

const toggleTargetAll = () => {
  isTargetAll.value = !isTargetAll.value;
};
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col gap-5">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                @click="toggleTargetAll"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th
            v-for="field in fields"
            :key="field"
            scope="col"
            class="px-6 py-3"
          >
            {{ field }}
          </th>
          <th v-if="actions.length > 0" scope="col" class="px-7 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 transition hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                v-model="row.target"
                :id="`checkbox-table-search-${index}`"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label :for="`checkbox-table-search-${index}`" class="sr-only"
                >checkbox</label
              >
            </div>
          </td>

          <td
            v-for="(item, index) in row.values"
            :key="index"
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item }}
          </td>
          <td v-if="actions.length > 0" class="flex gap-3 items-center px-6 py-4">
            <component
              v-for="action in actions"
              :key="action"
              :is="action"
              :data-id="row.id"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="isTargetAll" class="table-actions w-full">
      <component v-for="action in actionsForGroup" :key="action" :is="action" class="w-full"/>
    </div>
  </div>
</template>
