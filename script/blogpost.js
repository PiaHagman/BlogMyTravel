/**
 * Klassen skapar listan med initiala bloggposter samt innehåller
 * metoder som skapar blogginlägg och plockar bort dem, samt sparar
 * till och hämtar från localStorage().
 */
export class BlogPost {
  /**
   * Konstruktor som skapar en lista med 3 blogginlägg från start om localStorage är tom.
   */
  constructor() {
    this.post = [
      {
        image: "../images/tagluff.jpeg",
        title: "Runt Europa i tåg",
        date: new Date("January 26, 2022 00:00:00"),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus? At natus quo facere eaque vitae debitis obcaecati qui, deserunt itaque eos quis ducimus deleniti quisquam earum vel repudiandae praesentium, minus eius expedita veritatis cum maxime ab possimus? Quibusdam deleniti asperiores iure pariatur et praesentium nesciunt assumenda illo accusantium rerum ratione quo ullam accusamus est iusto, deserunt velit suscipit. Enim officia, culpa assumenda quas temporibus hic magnam vel eligendi et magni, amet necessitatibus? Praesentium illum molestiae enim fugit quod soluta, velit adipisci nemo, veritatis quam molestias aliquid inventore! Officiis cum itaque ea, asperiores nesciunt sunt nemo. Officiis omnis repellendus fuga.",
        author: "Paloma",
      },
      {
        image: "../images/vy.jpeg",
        title: "Familjeäventyr i Slovenien",
        date: new Date("January 27, 2022 00:00:00"),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus? At natus quo facere eaque vitae debitis obcaecati qui, deserunt itaque eos quis ducimus deleniti quisquam earum vel repudiandae praesentium, minus eius expedita veritatis cum maxime ab possimus? Quibusdam deleniti asperiores iure pariatur et praesentium nesciunt assumenda illo accusantium rerum ratione quo ullam accusamus est iusto, deserunt velit suscipit. Enim officia, culpa assumenda quas temporibus hic magnam vel eligendi et magni, amet necessitatibus? Praesentium illum molestiae enim fugit quod soluta, velit adipisci nemo, veritatis quam molestias aliquid inventore! Officiis cum itaque ea, asperiores nesciunt sunt nemo. Officiis omnis repellendus fuga.",
        author: "Father of Two",
      },
      {
        image: "../images/prag.jpeg",
        title: "Frukost i Prag",
        date: new Date("January 28, 2022 00:00:00"),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus? At natus quo facere eaque vitae debitis obcaecati qui, deserunt itaque eos quis ducimus deleniti quisquam earum vel repudiandae praesentium, minus eius expedita veritatis cum maxime ab possimus? Quibusdam deleniti asperiores iure pariatur et praesentium nesciunt assumenda illo accusantium rerum ratione quo ullam accusamus est iusto, deserunt velit suscipit. Enim officia, culpa assumenda quas temporibus hic magnam vel eligendi et magni, amet necessitatibus? Praesentium illum molestiae enim fugit quod soluta, velit adipisci nemo, veritatis quam molestias aliquid inventore! Officiis cum itaque ea, asperiores nesciunt sunt nemo. Officiis omnis repellendus fuga.",
        author: "MissLi",
      },
    ];
    if (localStorage.length === 0) {
      this.saveBlogs();
    }
    this.loadSavedPosts();
  }

  /**
   * Metod som lägger till en ny bloggpost till post-arrayen. Datumet skapas automatiskt.
   * @param {string} givenImage Bildurl som användare laddar upp
   * @param {string} givenTitle Blogginläggets titel
   * @param {string} givenText Blogginläggets brödtext
   * @param {string} givenAuthor Blogginläggets författare, alias
   * @returns {void}
   */
  addNewPost(givenImage, givenTitle, givenText, givenAuthor) {
    const newPost = {
      image: givenImage,
      title: givenTitle,
      date: new Date(),
      text: givenText,
      author: givenAuthor,
    };
    if (
      givenImage === "" ||
      givenImage === undefined ||
      givenTitle === "" ||
      givenTitle === undefined ||
      givenText === "" ||
      givenText === undefined ||
      givenAuthor === "" ||
      givenAuthor === undefined
    ) {
      return;
    } else {
      this.post.push(newPost);
      this.saveBlogs();
    }
  }

  /**
   * Metod som tar bort en bloggpost från post-arrayen
   * @param {number} index index för posten i arrayen som ska tas bort.
   * @returns {void}
   */
  deletePost(index) {
    this.post.splice(index, 1);
    this.saveBlogs();
  }

  /**
   * Metod som gör om den sparade strängen i localStorage till objekt genom
   * JSON.parse() och lägger till dem i post-arrayen.
   * @returns {void}
   */
  loadSavedPosts() {
    let savedBlogs = JSON.parse(localStorage.getItem("postArray"));
    if (savedBlogs === null) return;

    this.post = [];

    savedBlogs.forEach((postItem) => {
      this.post.push(postItem);
    });
  }

  /**
   * Metod som gör om objekten i post-arrayen till en sträng
   * genom JSON.stringify och sparas ner i localStorage.
   * @returns {void}
   */
  saveBlogs() {
    localStorage.setItem("postArray", JSON.stringify(this.post));
  }
}
