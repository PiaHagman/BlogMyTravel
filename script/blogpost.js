/**
 * Denna klass skapar listan med bloggposter samt innehåller
 * metoder som skapar blogginlägg och plockar bort dem. FYLL PÅ!!!
 */
export class BlogPost {
  /**
   * Konstruktor som skapar en lista med 3 blogginlägg från start
   * @constructor innehåller array med initiala blogginlägg
   */
  constructor() {
    let idCounter = 0;
    this.post = [
      {
        id: (idCounter += 1),
        image: "../images/tagluff.jpeg",
        title: "Runt Europa i tåg",
        date: new Date("January 26, 2022 00:00:00"),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus? At natus quo facere eaque vitae debitis obcaecati qui, deserunt itaque eos quis ducimus deleniti quisquam earum vel repudiandae praesentium, minus eius expedita veritatis cum maxime ab possimus? Quibusdam deleniti asperiores iure pariatur et praesentium nesciunt assumenda illo accusantium rerum ratione quo ullam accusamus est iusto, deserunt velit suscipit. Enim officia, culpa assumenda quas temporibus hic magnam vel eligendi et magni, amet necessitatibus? Praesentium illum molestiae enim fugit quod soluta, velit adipisci nemo, veritatis quam molestias aliquid inventore! Officiis cum itaque ea, asperiores nesciunt sunt nemo. Officiis omnis repellendus fuga.",
        author: "Paloma",
      },
      {
        id: (idCounter += 1),
        image: "../images/vy.jpeg",
        title: "Familjeäventyr i Slovenien",
        date: new Date("January 27, 2022 00:00:00"),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus? At natus quo facere eaque vitae debitis obcaecati qui, deserunt itaque eos quis ducimus deleniti quisquam earum vel repudiandae praesentium, minus eius expedita veritatis cum maxime ab possimus? Quibusdam deleniti asperiores iure pariatur et praesentium nesciunt assumenda illo accusantium rerum ratione quo ullam accusamus est iusto, deserunt velit suscipit. Enim officia, culpa assumenda quas temporibus hic magnam vel eligendi et magni, amet necessitatibus? Praesentium illum molestiae enim fugit quod soluta, velit adipisci nemo, veritatis quam molestias aliquid inventore! Officiis cum itaque ea, asperiores nesciunt sunt nemo. Officiis omnis repellendus fuga.",
        author: "Father of Two",
      },
      {
        id: (idCounter += 1),
        image: "../images/prag.jpeg",
        title: "Frukost i Prag",
        date: new Date("January 28, 2022 00:00:00"),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus? At natus quo facere eaque vitae debitis obcaecati qui, deserunt itaque eos quis ducimus deleniti quisquam earum vel repudiandae praesentium, minus eius expedita veritatis cum maxime ab possimus? Quibusdam deleniti asperiores iure pariatur et praesentium nesciunt assumenda illo accusantium rerum ratione quo ullam accusamus est iusto, deserunt velit suscipit. Enim officia, culpa assumenda quas temporibus hic magnam vel eligendi et magni, amet necessitatibus? Praesentium illum molestiae enim fugit quod soluta, velit adipisci nemo, veritatis quam molestias aliquid inventore! Officiis cum itaque ea, asperiores nesciunt sunt nemo. Officiis omnis repellendus fuga.",
        author: "MissLi",
      },
    ];
    if (localStorage.length == 0) {
      this.saveBlogs();
    }
    this.getSavedBlogs();
  }

  /**
   * Metod som lägger till en ny bloggpost till post-arrayen
   * @param givenImage Bild som användare laddar upp
   * @param givenTitle Blogginläggets titel
   * @param givenText Blogginläggets brödtext
   * @param givenAuthor Blogginläggets författare, alias
   */
  addNewPost(givenImage, givenTitle, givenText, givenAuthor) {
    const newPost = {
      id: this.post.length + 1,
      image: givenImage,
      title: givenTitle,
      date: new Date(),
      text: givenText,
      author: givenAuthor,
    };

    this.post.push(newPost);
    this.saveBlogs();
  }

  /**
   * Metod som tar bort en bloggpost från post-arrayen
   * @param index index för posten i arrayen som ska tas bort
   */
  deletePost(index) {
    this.post.splice(index, 1);
    this.saveBlogs();
  }

  getSavedBlogs() {
    let savedBlogs = JSON.parse(localStorage.getItem("post"));
    if (savedBlogs === null) return;

    this.post = [];

    savedBlogs.forEach((postItem) => {
      this.post.push(postItem);
    });
  }

  saveBlogs() {
    localStorage.setItem("post", JSON.stringify(this.post));
  }
}
