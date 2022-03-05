<script>
  const hearts = ["💖", "💘", "💗", "💓", "💙", "💚", "💛", "💜", "🧡", "💝", "💞", "🖤"]
  $: currentHeart = hearts[0] 
  let ms = 500 
  const changeHeart = () => {
    const oldHeart = currentHeart
    let newHeart;
    while (true) {
      const index = Math.round(Math.random() * (hearts.length - 1))
      newHeart = hearts[index]
      if (newHeart !== oldHeart && !!hearts[index]) break;
    }
    currentHeart = newHeart
  }
  let clear;
  $: {
    clearInterval(clear)
    clear = setInterval(changeHeart, ms)
  }
 
</script> 

<main>
		<p on:click={changeHeart} class="footnote">Made with {currentHeart}
      and <a target="_blank" href="https://svelte.dev">Svelte!</a></p>
</main>

<style>
  .footnote {
    text-align: center;
    font-size: 90%;
    color: #777;
    margin-top: 10px;
  }
  a {
    color: #ff3e00;
    text-decoration: none ;
  }
</style>