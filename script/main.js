import { BlogPost } from "./blogPost.js";

//Datastruktur

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
document.querySelector("#sidebar > button").onclick = function () {
  document.getElementById("sidebar").style.visibility = "hidden";
};

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
document.querySelector("#topbanner > button").onclick = function () {
  document.getElementById("sidebar").style.visibility = "visible";
};
const blog = new BlogPost();

function printBlogPosts() {
  document.getElementById("masterTitle").innerHTML = "Blog My Travel";

  /* const blogList = document.getElementById("blogList");
  blogList.innerHTML = "";

  for (let i = 0; i < blog.post.length; i++) {
    const obj = blog.post[i];

    const img = document.createElement("img");
    img.innerHTML = obj.image;
    blogList.appendChild(img); 

    const title = document.createElement("h1");
    title.innerHTML = obj.title;
    blogList.append(title);
  } */
}

printBlogPosts();

//Lägga till ny Todo
document.querySelector("#main > button").onclick = function () {
  const input = document.querySelector("#main > input");
  const postTitle = input.value;
  blog.addNewPost(postTitle);
};
