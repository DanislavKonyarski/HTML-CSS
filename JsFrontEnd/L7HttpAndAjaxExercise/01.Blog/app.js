function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/blog";
  const btnLoadPost = document.getElementById("btnLoadPosts");
  const posts = document.getElementById("posts");
  const postTitle = document.getElementById("post-title");
  const btnView = document.getElementById("btnViewPost");
  const postContent = document.getElementById("post-body");
  const postComment = document.getElementById("post-comments");

  btnLoadPost.addEventListener("click", clickPost);
  btnView.addEventListener("click", clickView);

  async function clickView() {
    postComment.textContent = "";
    const responseComment = await fetch(baseUrl + "/comments");
    const comments = await responseComment.json();

    const response = await fetch(baseUrl + "/posts");
    const postBody = await response.json();

    

    for (const element of Object.entries(comments)) {
      let currentComment = Object.entries(element[1]);
      
      if (currentComment[1][1] === posts.value) {
        let li = document.createElement("li");
        li.id = currentComment[0][1];
        li.value = currentComment[0][1];
        li.textContent = currentComment[2][1];
        postComment.appendChild(li);
      }
    }

    for (const element of Object.entries(postBody)) {
      let postId = posts.value;
      if (element[0] === postId) {
        let currentElement = Object.entries(element[1]);
        postTitle.textContent = currentElement[2][1];
        postContent.textContent = currentElement[0][1];
      }
    }
  }

  async function clickPost() {
    posts.textContent = "";
    const response = await fetch(baseUrl + "/posts");
    let allPosts = await response.json();

    for (const element of Object.entries(allPosts)) {
      let currentElement = Object.entries(element[1]);
      let options = document.createElement("option");
      options.id = element[0];
      options.value = element[0];
      options.textContent = currentElement[2][1];
      posts.appendChild(options);
    }
  }
}
attachEvents();
