import { BlogPost } from "../script/blogPost.js";
localStorage.clear(); //denna påverkar ju att även bloggposter som gjorts på sidan raderas... Så den måste bort...
const assert = chai.assert;
const blog = new BlogPost();

const testObj = {
  img: "../images/vy.jpeg",
  title: "Test post",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus? At natus quo facere eaque vitae debitis obcaecati qui, deserunt itaque eos quis ducimus deleniti quisquam earum vel repudiandae praesentium, minus eius expedita veritatis cum maxime ab possimus? Quibusdam deleniti asperiores iure pariatur et praesentium nesciunt assumenda illo accusantium rerum ratione quo ullam accusamus est iusto, deserunt velit suscipit. Enim officia, culpa assumenda quas temporibus hic magnam vel eligendi et magni, amet necessitatibus? Praesentium illum molestiae enim fugit quod soluta, velit adipisci nemo, veritatis quam molestias aliquid inventore! Officiis cum itaque ea, asperiores nesciunt sunt nemo. Officiis omnis repellendus fuga.",
  author: "test",
};

describe("constructor", function () {
  /*   beforeEach(() => {
    localStorage.clear();
  }); */
  it("checks that the array has items from start", function () {
    assert.isNotEmpty(blog.post);
  });
});

describe("addNewPost()", function () {
  it("should compare length of lists", function () {
    const bfAddPost = blog.post.length;

    /* const img = "../images/vy.jpeg";
    const title = "Test post";
    const text = "djsjfh";
    const author = "jhf"; */

    blog.addNewPost(testObj.img, testObj.title, testObj.text, testObj.author);
    assert.equal(bfAddPost + 1, blog.post.length);
  });

  it("checks that the added title parameter exists", function () {
    const newPostIndex = blog.post.findIndex((p) => p.id == blog.post.length);
    assert.include(
      [blog.post[newPostIndex].title],
      "Test post",
      "Compare strings of title"
    );
  });
});

describe("deletePost()", function () {
  blog.addNewPost(testObj.img, testObj.title, testObj.text, testObj.author);

  it("compares the length of lists", function () {
    const postToDeleteId = blog.post.length;
    const bfDeletePost = blog.post.length;
    blog.deletePost(postToDeleteId);
    assert.equal(bfDeletePost - 1, blog.post.length);
  });
});

/* describe("getSavedBlogs()", function () {
  const noOfActualPosts = blog.post.length;
  const savedPosts = blog.getSavedBlogs;
  console.log(savedPosts);

    //noOfSavedPosts = savedPosts.length;

  it("checks that the number of saved posts are correct", function () {
    assert.equal(noOfActualPosts, noOfSavedPosts);
  });
}); */
