import { defineStore } from "pinia";
import { ref } from "vue";
import { Worker } from "../entities/worker/index.ts";

type ListItem = {
  list: Worker[];
  countPage: number | null;
  currentPage: number | null;
};
type ListStore = {
  workers: ListItem;
};

export const useListStore = defineStore("list", () => {
  const lists = ref<ListStore>({
    workers: {
      list: [],
      countPage: 1,
      currentPage: 1,
    },
  });

  const getList = (listName: keyof ListStore) => lists.value[listName].list;
  const addItemToList = (listName: keyof ListStore, item: any) =>
    lists.value[listName].list.push(item);
  const getCountPageList = (listName: keyof ListStore) =>
    lists.value[listName].countPage;
  const setCountPageList = (listName: keyof ListStore, count: number) =>
    (lists.value[listName].countPage = count);
  const getCurrentPageList = (listName: keyof ListStore) =>
    lists.value[listName].currentPage;
  const setCurrentPageList = (listName: keyof ListStore, page: number) =>
    (lists.value[listName].currentPage = page);
  const deleteItemList = (listName: keyof ListStore, id: number) => {
    lists.value[listName].list = lists.value[listName].list.filter(
      (item) => item.id !== id,
    );
  };
  const clearList = (listName: keyof ListStore) =>
    (lists.value[listName].list = []);
  return {
    lists,
    addItemToList,
    getList,
    getCountPageList,
    setCountPageList,
    getCurrentPageList,
    setCurrentPageList,
    deleteItemList,
    clearList,
  };
});
