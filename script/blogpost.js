/**
 * Denna klass skapar listan med bloggposter samt innehåller
 * metoder som skapar blogginlägg och plockar bort dem. FYLL PÅ!!!
 */
export class BlogPost {
  /**
   * Konstruktor som skapar en lista med 3 blogginlägg från start
   * @constructor
   * @param
   *
   */
  costructor() {
    this.post = [
      {
        image: (image.src = "../images/prag.jpeg"),
        title: "Frukost i Prag",
        date: Date.now(),
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
        author: "MissLi",
      },
      {
        image: (image.src = "../images/prag.jpeg"),
        title: "Frukost i Prag",
        date: Date.now(),
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
        author: "MissLi",
      },
      {
        image: (image.src = "../images/prag.jpeg"),
        title: "Frukost i Prag",
        date: Date.now(),
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
        author: "MissLi",
      },
    ];
  }

  addNewPost(givenImage, givenTitle, givenText, givenAuthor) {
    const newPost = {
      image: givenImage,
      title: givenTitle,
      date: Date.now(),
      text: givenText,
      author: givenAuthor,
    };

    this.post.push(newPost);
  }
}
