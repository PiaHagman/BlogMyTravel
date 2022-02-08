import { BlogPost } from "../script/blogPost.js";
import {} from "../script/util.js";

const assert = chai.assert;

describe("Tests BlogPost.js", function () {
  const blog = new BlogPost();
  const content = localStorage.stashContent();

  const testObj = {
    img: "../images/city.jpeg",
    title: "Test post",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus? At natus quo facere eaque vitae debitis obcaecati qui, deserunt itaque eos quis ducimus deleniti quisquam earum vel repudiandae praesentium, minus eius expedita veritatis cum maxime ab possimus? Quibusdam deleniti asperiores iure pariatur et praesentium nesciunt assumenda illo accusantium rerum ratione quo ullam accusamus est iusto, deserunt velit suscipit. Enim officia, culpa assumenda quas temporibus hic magnam vel eligendi et magni, amet necessitatibus? Praesentium illum molestiae enim fugit quod soluta, velit adipisci nemo, veritatis quam molestias aliquid inventore! Officiis cum itaque ea, asperiores nesciunt sunt nemo. Officiis omnis repellendus fuga.",
    author: "test",
  };

  this.afterAll(() => {
    localStorage.restoreContent(content);
  });

  describe("constructor", function () {
    it("checks that the array has items from start", function () {
      assert.isNotEmpty(blog.post);
    });
  });

  describe("addNewPost()", function () {
    it("should compare length of lists", function () {
      const bfAddPost = blog.post.length;

      blog.addNewPost(testObj.img, testObj.title, testObj.text, testObj.author);
      assert.equal(bfAddPost + 1, blog.post.length);
    });

    it("checks that the added title parameter exists", function () {
      const newPostIndex = blog.post.length - 1;

      assert.include(
        [blog.post[newPostIndex].title],
        "Test post",
        "Compare strings of title"
      );
    });

    it("does not add post if a parameter is missing", function () {});
  });
  /*  it("should clear localStorage", function () {
    const newPostIndex = blog.post.length - 1;
    localStorage.removeItem(post);
    assert.notInclude(
      [blog.post[newPostIndex].title],
      "Test post",
      "Compare strings of title"
    );
  }); */

  describe("deletePost()", function () {
    blog.addNewPost(testObj.img, testObj.title, testObj.text, testObj.author);

    it("compares the length of lists", function () {
      const index = blog.post.length - 1;
      const bfDeletePost = blog.post.length;
      blog.deletePost(index);
      assert.equal(bfDeletePost - 1, blog.post.length);
    });

    it("does not delete post if index doesn't exist", function () {});
  });
});
