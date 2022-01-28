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
  constructor() {
    this.post = [
      {
        image: "../images/prag.jpeg",
        title: "Frukost i Prag",
        /* date: new Date(Date.now()).toString(), */
        date: new Date("January 28, 2022 00:00:00"),
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
        author: "MissLi",
      },
      {
        image: "../images/prag.jpeg",
        title: "Frukost i Prag",
        date: new Date("January 27, 2022 00:00:00"),
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
        author: "MissLi",
      },
      {
        image: "../images/prag.jpeg",
        title: "Frukost i Prag",
        date: new Date("January 26, 2022 00:00:00"),
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
        author: "MissLi",
      },
    ];
  }

  addNewPost(givenImage, givenTitle, givenText, givenAuthor) {
    const newPost = {
      image: givenImage,
      title: givenTitle,
      date: new Date(Date.now()).toString(),
      text: givenText,
      author: givenAuthor,
    };

    this.post.push(newPost);
  }
}
