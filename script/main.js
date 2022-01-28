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

  const blogList = document.getElementById("blogList");
  blogList.innerHTML = "";

  for (let i = 0; i < blog.post.length; i++) {
    const obj = blog.post[i];

    const img = document.createElement("img");
    img.src = obj.image;
    blogList.append(img);

    const title = document.createElement("h1");
    title.innerHTML = obj.title;
    blogList.append(title);

    const date = document.createElement("p");
    date.innerText = obj.date;
    blogList.append(date);

    const text = document.createElement("p");
    text.innerText = obj.text;
    blogList.append(text);

    const author = document.createElement("p");
    author.innerText = obj.author;
    blogList.append(author);
  }
}

printBlogPosts();

//Lägga till ny Todo
document.querySelector("#main > button").onclick = function () {
  const input = document.querySelector("#main > input");
  const postTitle = input.value;
  blog.addNewPost(postTitle);
};
