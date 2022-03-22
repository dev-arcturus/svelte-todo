<script lang="ts">
import Footnote from "./components/Footnote.svelte";
import TodoList from "./components/todoList.svelte";
import { todoItems } from "./stores/todo";

$: pendingItems = []
$: doneItems = []

todoItems.subscribe((i) => {
  let newItems = i
  pendingItems = newItems.filter((i) => !i.done)
  doneItems = newItems.filter((i) => i.done)
})

</script>

<main>
	<div class="wrapper" style="background-color: {pendingItems.length === 0 && doneItems.length > 0 ? '#1a221e' : '#171c1d'}">
	<div class="container">
		<TodoList />
		<hr class="divider" />
		<Footnote />
	</div>
	</div>
</main>
