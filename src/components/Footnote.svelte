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
		<p class="footnote">made with {currentHeart}
      and <a target="_blank" href="https://svelte.dev">Svelte!</a></p>
      <p class="copy">&copy; 2022, <b>arcturus.</b> </p>
    </main>

<style>
  .footnote {
    text-align: center;
    font-size: 90%;
    color: rgb(141, 141, 141);
    margin-top: 12.5px;
  }
  .copy {
    text-align: center;
    font-size: 75%;
    color: #fff3;
    margin-top: 2.5px;
  }
  a {
    color: #ff3e00;
    text-decoration: none ;
  }
</style>