<script>
  import { todoItems } from "../stores/todo";
  $: focused = false
  $: text = ""
  const addTask = (e) => {
    if (e.key === "Enter" && text.length > 0) {
      todoItems.update(i => {
        const newItem = {
          task: text, 
          done: false,
          key: i.length,
        }
        return [newItem, ...i]
      })
      text = ""  
    }
  }
</script>

<main on:keyup={addTask}>
  <input value={text} on:input={(e) => text = e.target.value} on:focus={() => focused = true} class="input" placeholder="enter a task" />
  {#if focused && !!text}
    <p class="helper-text">🤫 Press <b>enter</b> to create todo</p>
  {/if}
</main>

<style>
  .input {
    padding: 7.5px 20px;
    width: 100%;
    background: transparent;
    border: 1px solid #fff1;
    border-radius: 10px;
    outline: none;
    transition: .15s all cubic-bezier(1, .2, 0, .8 );
    color: #fff

  }
  .input:focus {
    border-color: rgb(255, 255, 255);
    box-shadow: 0 0 0 7.5px rgba(255, 255, 255, 0.067);
  }
  .helper-text {
    font-size: 90%;
    color: #777;
    margin-top: 15px;
  }
</style>