var ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://github.com/dev-arcturus/svelte-todo.git", // Update to point to your repository
    user: {
      name: "Arcturus",
      email: "mir.khurram.usman@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
