<script>
import AddTask from "./AddTask.svelte";
import Task from "./Task.svelte";
import { todoItems } from "../stores/todo";

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
  {#if showAddTask}
    <div style="display: flex;">
      <div style="flex: 1">
        <AddTask />
      </div>
    </div>
    <hr class="divider" />
  {/if}
    <h3 style="display: flex;">{ pendingItems.length === 0 && doneItems.length > 0 ? "🥳 congrats!" : "📝 todo list:"}
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
    <p style="padding: 10px 0px; text-align: center; color: #faa">Add a new task to get started!</p>
  {/if}
  {#if doneItems.length}
      <div style="display: flex;">
        <button class="clear-btn" on:click={clearDoneTasks}>Clear completed tasks</button>
      </div>
  {/if}

</main>

<style>
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
  .clear-btn {
    border: none;
    color: #777
  }
  .clear-btn:hover {
    color: #aaa
  }
  button:hover {
    border-color: #fff4;
  }
</style>