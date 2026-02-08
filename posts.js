const loadPost = async () => {
  const url = "https://dummyjson.com/posts";

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();

    displayPosts(data.posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
  }
};

const displayPosts = (posts) => {
  const postsContainer = document.getElementById("post-container");

  postsContainer.innerHTML = posts
    .map(
      (post) => `
    <article class="story-card">
      <header class="story-header">
        <span class="user-id">User #${post.userId}</span>
        <h2 class="story-title">${post.title}</h2>
      </header>
      
      <p class="story-body">${post.body}</p>
      
      <div class="tag-container">
        ${post.tags.map((tag) => `<span class="tag">#${tag}</span>`).join("")}
      </div>

      <footer class="story-footer">
        <div class="stats">
          <span class="stat-item">
            <i class="icon">👁️</i> ${post.views} views
          </span>
        </div>
      
        <div class="reactions">
          <button class="btn-reaction like">
            <span class="icon">👍</span> ${post.reactions.likes}
          </button>
          <button class="btn-reaction dislike">
            <span class="icon">👎</span> ${post.reactions.dislikes}
          </button>
        </div>
      </footer>
    </article>
  `,
    )
    .join("");
};

loadPost();
