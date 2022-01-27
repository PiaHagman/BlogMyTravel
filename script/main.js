/* import { BlogPost } from "./blogPost.js"; */

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
document.querySelector("#sidebar > button").onclick = function () {
  document.getElementById("sidebar").style.visibility = "hidden";
};

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
document.querySelector("#topbanner > button").onclick = function () {
  document.getElementById("sidebar").style.visibility = "visible";
};
