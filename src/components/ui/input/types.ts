export type IProps = {
  value?:string | number;
  
}

export type IEmits = {
  (_eventName:'onInput', value:string | number):void
}
