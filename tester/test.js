import { BlogPost } from "../script/blogPost.js";
import {} from "../script/util.js";

const assert = chai.assert;

describe("Tests BlogPost.js", function () {
  const blog = new BlogPost();
  const content = localStorage.stashContent();

  const testObj = {
    img: "../images/city.jpeg",
    title: "Test post",
    text: "test",
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
    it("should add a new post to the length of the array", function () {
      const bfAddPost = blog.post.length;
      blog.addNewPost(testObj.img, testObj.title, testObj.text, testObj.author);
      assert.equal(
        bfAddPost + 1,
        blog.post.length,
        "Compare lengths of array, before and after"
      );
    });

    it("checks that the added title property exists", function () {
      const newPostIndex = blog.post.length - 1;

      assert.include(
        [blog.post[newPostIndex].title],
        "Test post",
        "Compare strings of title"
      );
    });

    it("should not add a post if one or more parameters are missing", function () {
      const currentLengthOfArray = blog.post.length;
      blog.addNewPost();
      assert.equal(currentLengthOfArray, blog.post.length);
    });
  });

  describe("deletePost()", function () {
    blog.addNewPost(testObj.img, testObj.title, testObj.text, testObj.author);

    it("should delete a post with a given index", function () {
      const index = blog.post.length - 1;
      const bfDeletePost = blog.post.length;
      blog.deletePost(index);
      assert.equal(bfDeletePost - 1, blog.post.length);
    });

    it("should not delete post if index doesn't exist", function () {
      const indexThatDoesNotExist = blog.post.length;
      const lengthBeforeDeleting = blog.post.length;

      blog.deletePost(indexThatDoesNotExist);

      const lengthAfterDeleting = blog.post.length;
      assert.equal(lengthBeforeDeleting, lengthAfterDeleting);
    });
  });

  describe("getSavedBlogs() och saveBlogs()", function () {
    it("should asure that objects are saved in LocalStorage", function () {
      const savedStringBefore = localStorage.getItem("postArray");
      blog.post = [];

      blog.post[0] = testObj;
      const newString = JSON.stringify(blog.post);
      /* console.log(newString); */
      blog.saveBlogs();
      const savedStringAfter = localStorage.getItem("postArray");
      /* console.log(savedStringAfter); */

      assert.notEqual(savedStringBefore, savedStringAfter);
      assert.equal(savedStringAfter, newString);
    });

    it("checks that getSavedBlogs() get posts from localStorage()", function () {
      blog.getSavedBlogs();
      const numberOfPostsBefore = blog.post.length;
      blog.addNewPost(testObj.img, testObj.title, testObj.text, testObj.author);
      blog.getSavedBlogs();
      const numberOfPostAfter = blog.post.length;

      assert.equal(numberOfPostsBefore + 1, numberOfPostAfter);
    });
  });
});
