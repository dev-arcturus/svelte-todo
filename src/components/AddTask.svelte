<script>
  import { todoItems } from "../stores/todo";
  import collapse from 'svelte-collapse'
  $: focused = false
  $: text = ""
  $: enterPressed = false
  const addTask = (e) => {
    if (e.key === "Enter" && text.length > 0) {
      enterPressed = false
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
  const highlightEnterKey = (e) => {
    if (e.key === "Enter") {
      enterPressed = true
    }
  }
</script>

<main on:keyup={addTask} on:keydown={highlightEnterKey}>
  <input value={text} on:input={(e) => text = e.target.value} on:focus={() => focused = true} class="input" placeholder="enter a task" />
    <div use:collapse={{open: focused && !!text, duration: 0.5, easing: 'cubic-bezier(1, 0, 0, 1.3)' }}>
      <p class="helper-text">🤫 Press 
        <b style="transition: .15s all ease;" class={ enterPressed ? "enterKeyPressed" : ""}>enter</b>
       to create todo</p>
    </div>
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
    padding-top: 15px;
  }
  .enterKeyPressed {
    color: #fff;
    transition: all .2s cubic-bezier(1, 0, 0, 1);
    display: inline-block;
    transform: translateY(2px);
  }
</style> 