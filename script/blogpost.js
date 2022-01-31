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
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus? At natus quo facere eaque vitae debitis obcaecati qui, deserunt itaque eos quis ducimus deleniti quisquam earum vel repudiandae praesentium, minus eius expedita veritatis cum maxime ab possimus? Quibusdam deleniti asperiores iure pariatur et praesentium nesciunt assumenda illo accusantium rerum ratione quo ullam accusamus est iusto, deserunt velit suscipit. Enim officia, culpa assumenda quas temporibus hic magnam vel eligendi et magni, amet necessitatibus? Praesentium illum molestiae enim fugit quod soluta, velit adipisci nemo, veritatis quam molestias aliquid inventore! Officiis cum itaque ea, asperiores nesciunt sunt nemo. Officiis omnis repellendus fuga.",
        author: "MissLi",
      },
      {
        image: "../images/vy.jpeg",
        title: "Familjeäventyr i Slovenien",
        date: new Date("January 27, 2022 00:00:00"),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus? At natus quo facere eaque vitae debitis obcaecati qui, deserunt itaque eos quis ducimus deleniti quisquam earum vel repudiandae praesentium, minus eius expedita veritatis cum maxime ab possimus? Quibusdam deleniti asperiores iure pariatur et praesentium nesciunt assumenda illo accusantium rerum ratione quo ullam accusamus est iusto, deserunt velit suscipit. Enim officia, culpa assumenda quas temporibus hic magnam vel eligendi et magni, amet necessitatibus? Praesentium illum molestiae enim fugit quod soluta, velit adipisci nemo, veritatis quam molestias aliquid inventore! Officiis cum itaque ea, asperiores nesciunt sunt nemo. Officiis omnis repellendus fuga.",
        author: "Father of Two",
      },
      {
        image: "../images/tagluff.jpeg",
        title: "Runt Europa i tåg",
        date: new Date("January 26, 2022 00:00:00"),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus? At natus quo facere eaque vitae debitis obcaecati qui, deserunt itaque eos quis ducimus deleniti quisquam earum vel repudiandae praesentium, minus eius expedita veritatis cum maxime ab possimus? Quibusdam deleniti asperiores iure pariatur et praesentium nesciunt assumenda illo accusantium rerum ratione quo ullam accusamus est iusto, deserunt velit suscipit. Enim officia, culpa assumenda quas temporibus hic magnam vel eligendi et magni, amet necessitatibus? Praesentium illum molestiae enim fugit quod soluta, velit adipisci nemo, veritatis quam molestias aliquid inventore! Officiis cum itaque ea, asperiores nesciunt sunt nemo. Officiis omnis repellendus fuga.",
        author: "Paloma",
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

    this.post.unshift(newPost);
  }

  deletePost(index) {
    this.post.splice(index, 1);
  }
}
