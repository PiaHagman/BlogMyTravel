import { BlogPost } from "./blogPost.js";

const blog = new BlogPost();

printBlogPosts();
printForm();

function printForm() {
  const form = document.getElementById("form");
  form.innerHTML = "";

  const inputImgURL = document.createElement("input");
  inputImgURL.id = "input-img";
  inputImgURL.setAttribute("type", "text");
  inputImgURL.setAttribute("placeholder", "Välj din finaste bild");
  form.append(inputImgURL);

  const inputTitle = document.createElement("input");
  inputTitle.id = "input-title";
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("placeholder", "Locka oss med en titel");
  form.append(inputTitle);

  const inputText = document.createElement("textarea");
  inputText.id = "input-text";
  inputText.setAttribute("type", "text");
  inputText.setAttribute("rows", 10);
  inputText.setAttribute("placeholder", "Ge oss din story");
  form.append(inputText);

  const inputAuthor = document.createElement("input");
  inputAuthor.id = "input-author";
  inputAuthor.setAttribute("type", "text");
  inputAuthor.setAttribute("placeholder", "Ditt alias");
  form.append(inputAuthor);

  const submitBtn = document.createElement("button");
  submitBtn.innerHTML = "Dela till världen";
  form.append(submitBtn);
}

//Lägga till ny Todo
document.querySelector("#main > button").onclick = function () {
  const input = document.querySelector("#main > input");
  const postTitle = input.value;
  blog.addNewPost(postTitle);
};

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
document.querySelector("#sidebar > button").onclick = function () {
  document.getElementById("sidebar").style.visibility = "hidden";
};

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
document.querySelector("#topbanner > button").onclick = function () {
  document.getElementById("sidebar").style.visibility = "visible";
};

function printBlogPosts() {
  document.getElementById("masterTitle").innerHTML = "Blog My Travel";

  const blogList = document.getElementById("blogList");
  blogList.innerHTML = "";

  for (let i = 0; i < blog.post.length; i++) {
    const obj = blog.post[i];

    const img = document.createElement("img");
    img.classList = "post-image";
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
