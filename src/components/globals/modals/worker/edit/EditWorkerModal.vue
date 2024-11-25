<script setup lang="ts">
import Modal from "../../../../ui/modal/Modal.vue";
import { MEmits, MProps} from "./types.ts";

const props = deifneProps<MProps>()
const emits = defineEmits<MEmits>();
const onClose = () => {
  emits("onClose");
  console.log("close");
};
</script>

<template>
  <Modal @on-close="onClose">
    <div>
      <h2 class="font-bold">Информация о работнике</h2>
      <form class="flex flex-col gap-2">
        <label for="fullname">ФИО</label>
        <input type="text" name="fullname" id="fullname" :value="fullName" class="border w-full h-10" />
       <label for="deportament">Учреждение</label> 
        <select name="deportament" :value="deportament" id="deportament" class="border w-full h-10">
          <option value="ss" />
          <option value="ss" />
        </select>
      </form>
    </div>
  </Modal>
</template>
