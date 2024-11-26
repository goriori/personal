import {Worker} from '../../../../../entities/worker/index.ts'

export type MEmits = {
  (_eventName:'onClose'):void
}

export type MProps = {
  worker:Worker
}
