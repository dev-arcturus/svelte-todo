import { writable } from "svelte/store";

type todoItem = {
  index: number;
  done: Boolean;
  task: string;
};

export const todoItems = writable<todoItem[]>([]);
