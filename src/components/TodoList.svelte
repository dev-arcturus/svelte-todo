<script>
import AddTask from "./AddTask.svelte";
import Task from "./Task.svelte";
import { todoItems } from "../stores/todo";
import { fly } from "svelte/transition";

$: pendingItems = []
$: doneItems = []
$: items = []

$: showAddTask = false

todoItems.subscribe((i) => {
  let newItems = i
  pendingItems = newItems.filter((i) => !i.done)
  doneItems = newItems.filter((i) => i.done)
  items = [...pendingItems, ...doneItems]
})

const clearDoneTasks = () => {
  todoItems.update(i => {
    return i.filter(x => !x.done)
  })
}

</script>

<main>
  <div>
    {#if showAddTask}
      <div style="display: flex;">
        <div style="flex: 1">
          <AddTask />
        </div>
      </div>
      <hr class="divider" />
    {/if}
      <h3 style="display: flex;">{ pendingItems.length === 0 && doneItems.length > 0 ? "🥳 congrats!" : items.length === 0 ? "📃 todo list:" : "📝 todo list:"}
        {#if !showAddTask}
          <button on:click={() => showAddTask = !showAddTask}>Add</button>
        {/if}
        </h3>
    {#if items.length !== 0}
      {#each pendingItems as item, index}
        <Task {item} {index} />
      {/each}
      {#each doneItems as item, index}
        <Task {item} index={pendingItems.length + index} />
      {/each}
      {:else}
      <div style="display: flex; flex-direction: column; min-height: 20vh">
        <p in:fly="{{y: 10, duration: 350}}" class="new-task-helper">
          🏃🏻‍♀️ add a new task to get started!
        </p>
      </div>

    {/if}
    {#if doneItems.length}
        <div style="display: flex;">
          <button class="clear-btn" on:click={clearDoneTasks}>clear completed tasks</button>
        </div>
    {/if}
  </div>
</main>

<style>
  .new-task-helper {
    padding: 10px 0px;
    text-align: center;
    color: #faa;
    margin-top: auto;
    margin-bottom: auto;
  }
  h3 {
    margin: 20px 0px;
  }
  button {
    cursor: pointer;
    padding: 0px 15px;
    border: 1px solid #fff1;
    background: transparent;
    color: #fff;
    border-radius: 10px;
    margin-left: auto;
  }
  button:hover {
    background-color: #ffffff07;
  }
  .clear-btn {
    border: none;
    color: #777;
  }
  .clear-btn:hover {
    color: #aaa;
    background: transparent;
  }
  button:hover {
    border-color: #fff4;
  }
</style>