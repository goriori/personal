import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'
import {Modal} from '../entities/modals/index.ts'
import EditWorkerModal from '../components/globals/modals/worker/edit/EditWorkerModal.vue'

export const useApplicationStore = defineStore('application', () => {
  const modals = ref<Modal[]>([
    new Modal('Edit-Worker', shallowRef(EditWorkerModal))
  ])
  const getModals = () => modals.value
  const getModal = (name: string) => {
    const modal = modals.value.find((modal) => modal.getName() === name)
    if (modal) return modal
  }
  return {
    getModals,
    getModal,
  }
})
