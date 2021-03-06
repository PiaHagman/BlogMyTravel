import { BlogPost } from "./blogposts.js";
import {} from "./util.js";

const blog = new BlogPost();
printForm();
printBlogPosts();

const headLogo = document.getElementById("logo");
headLogo.src = "../images/logo3.png";

//Lägga till ny bloggpost
document.querySelector("#form > button").onclick = function () {
  const image = document.querySelector("#input-upload").value;
  const title = document.querySelector("#input-title").value;
  const text = document.querySelector("#input-text").value;
  const author = document.querySelector("#input-author").value;

  if (image && title && text && author) {
    blog.addNewPost(image, title, text, author);
    alert("Grattis! Du har nu delat din upplevelse med hela världen.");
    printBlogPosts();
    clearForm();
  } else {
    alert("Fyll i alla fält för att dela din post!");
  }
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

//Scrolla upp till toppen på sidan
toTopLink.onclick = function () {
  window.scrollTo(0, 0);
};

//Hjälpfunktioner
function printForm() {
  const form = document.getElementById("form");
  form.innerHTML = "";

  const formTitle = document.createElement("h1");
  formTitle.innerText = "Dela ditt äventyr!";
  form.append(formTitle);

  const img = document.createElement("input");
  img.setAttribute("type", "text");
  img.setAttribute("placeholder", "Ange sökväg eller välj från listan.");
  img.setAttribute("list", "images");
  img.id = "input-upload";
  img.innerHTML = `<datalist id="images">
  <option value="../images/city.jpeg">
  <option value="../images/tagluff.jpeg">
  <option value="../images/vy.jpeg">
  <option value="../images/prag.jpeg">
</datalist>`;
  form.append(img);

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

  for (let i = blog.post.length - 1; i >= 0; i -= 1) {
    const obj = blog.post[i];

    const item = document.createElement("div");
    item.classList = `blogList-item`;
    item.id = `${obj.title}`;

    blogList.append(item);

    item.addEventListener("pointerenter", (e) => {
      item.style.boxShadow = "0px 5px 50px -8px rgb(90, 88, 88)";
      item.style.transform = "scale(0.95)";
    });

    item.addEventListener("pointerleave", (e) => {
      item.style.boxShadow = "none";
      item.style.transform = "none";
    });

    const dltBtn = document.createElement("button");
    dltBtn.innerHTML = "Radera inlägg";
    dltBtn.className = "dltBtn";
    item.append(dltBtn);
    dltBtn.onclick = function () {
      console.log(obj.id);
      blog.deletePost([i]);

      printBlogPosts();
    };

    const img = document.createElement("img");
    img.classList = "post-image";
    img.src = obj.image;
    item.append(img);

    const title = document.createElement("h1");
    title.innerHTML = obj.title;
    title.setAttribute("data-editable", "");
    item.append(title);

    const newDate = new Date(obj.date);
    const date = document.createElement("p");
    date.innerText = newDate.toLocaleDateString();
    item.append(date);

    const text = document.createElement("p");
    text.innerText = obj.text;
    item.append(text);

    const author = document.createElement("p");
    author.innerText = obj.author;
    author.classList = "post-author";
    item.append(author);

    const divider = document.createElement("hr");
    divider.innerText = "*************************";
    divider.classList = "divider";
    item.append(divider);
  }
}

function printSideBarContent() {
  let sideBarContent = document.getElementById("sideBarContent");
  sideBarContent.innerHTML = "";

  const sideBarLogo = document.createElement("img");
  sideBarLogo.src = "../images/logo_transparent.png";
  sideBarContent.append(sideBarLogo);

  const sideBarh1 = document.createElement("h1");
  sideBarh1.innerText = "Tidigare inlägg:";
  sideBarContent.append(sideBarh1);

  for (let i = blog.post.length - 1; i >= 0; i -= 1) {
    const obj = blog.post[i];

    const link = document.createElement("a");
    sideBarContent.append(link);

    const title = document.createElement("h3");

    title.innerHTML = obj.title;
    link.append(title);

    const newDate = new Date(obj.date);
    const date = document.createElement("p");
    date.innerText = newDate.toLocaleDateString();
    link.append(date);

    const divider = document.createElement("p");
    divider.innerHTML = "___________";
    link.append(divider);

    link.onclick = function () {
      /* link.target = "_blank"; */
      link.href = `#${obj.title}`;
    };
  }
}

function clearForm() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));

  const textArea = document.querySelector("textarea");
  textArea.value = "";
}
