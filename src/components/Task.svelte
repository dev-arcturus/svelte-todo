<script>
  import { fly } from "svelte/transition";
  import { todoItems } from "../stores/todo";
  export let item, index;
  $: done = item?.done
  $: task = item?.task
  $: key = item?.key
  const handleOnClick = () => {
    todoItems.update((i) => {
      const absoluteIndex = i.findIndex((e) => e.key === key)
      i[absoluteIndex].done = !done
      return i
    })
  }
</script>

<main>
  <div in:fly="{{y:10, duration: 100}}" class="taskItem" on:click={handleOnClick}>
    <p class={done ? "done-title" : ""}>{index + 1}. {task}</p>
    {done ? "✅" : ""}
  </div>

</main>

<style>
  .taskItem {
    margin-bottom: 15px;
    display: flex;
    cursor: pointer;
    user-select: none;
  }
  p {
    color: #ddd;
    flex: 1
  }
  .done-title {
    color: #fff4;
    text-decoration: line-through;
    text-decoration-color: #ddd;
  }
</style>