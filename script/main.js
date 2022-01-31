import { BlogPost } from "./blogPost.js";

const blog = new BlogPost();

printBlogPosts();
printForm();

document.getElementById("logo").src = "../images/logo3.png";

//Lägga till ny Todo
document.querySelector("#form > button").onclick = function () {
  const image = document.querySelector("#input-upload").files[0].name;
  const title = document.querySelector("#input-title").value;
  const text = document.querySelector("#input-text").value;
  const author = document.querySelector("#input-author").value;

  blog.addNewPost(image, title, text, author);
  alert("Grattis! Du har nu delat din upplevelse med hela världen.");
  printBlogPosts();
};

//Sidebar döljs
document.querySelector("#sidebar > button").onclick = function () {
  document.getElementById("sidebar").style.visibility = "hidden";
};

//Sidebar visas
document.querySelector("#topbanner > button").onclick = function () {
  document.getElementById("sidebar").style.visibility = "visible";
  printSideBarContent();
};

console.log("localStorage");

//Hjälpfunktioner
function printForm() {
  const form = document.getElementById("form");
  form.innerHTML = "";

  const formTitle = document.createElement("h1");
  formTitle.innerText = "Dela ditt äventyr!";
  form.append(formTitle);

  const img = document.createElement("input");
  img.setAttribute("type", "file");
  img.id = "input-upload";
  form.append(img);

  /*  const inputImgURL = document.createElement("input");
  inputImgURL.id = "input-img";
  inputImgURL.setAttribute("type", "text");
  inputImgURL.setAttribute("placeholder", "Välj din finaste bild");
  form.append(inputImgURL); */

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
function printBlogPosts() {
  const blogList = document.getElementById("blogList");
  blogList.innerHTML = "";

  for (let i = 0; i < blog.post.length; i++) {
    const obj = blog.post[i];

    const img = document.createElement("img");
    img.classList = "post-image";
    img.id = `post-${[i]}`;
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
    author.classList = "post-author";
    blogList.append(author);

    //Funkar inte!!
    const divider = document.createElement("hr");
    divider.classList = "divider";
    blogList.append(divider);
  }
}

function printSideBarContent() {
  let sideBarContent = document.getElementById("sideBarContent");
  sideBarContent.innerHTML = "";

  const sideBarLogo = document.createElement("img");
  /* sideBarLogo.classList = "sideBarLogo"; */
  sideBarLogo.src = "../images/logo_transparent.png";
  sideBarContent.append(sideBarLogo);

  const sideBarh1 = document.createElement("h1");
  sideBarh1.innerText = "Tidigare inlägg:";
  sideBarContent.append(sideBarh1);

  for (let i = 0; i < blog.post.length; i++) {
    const obj = blog.post[i];

    const link = document.createElement("a");
    sideBarContent.append(link);

    const title = document.createElement("h3");

    title.innerHTML = obj.title;
    link.append(title);

    const date = document.createElement("p");
    date.innerText = obj.date;
    link.append(date);

    const divider = document.createElement("p");
    divider.innerHTML = "___________";
    link.append(divider);

    link.onclick = function () {
      link.target = "_blank";
      link.href = `#post-${[i]}`;
    };
  }
}
