export function registerEditableBehaviour() {
  // <tag data-editable> beteende
  window.addEventListener("click", function (event) {
    // bara intresserad av event.target:s som har data-editable attributet satt
    const elem = event.target;
    if (!elem.hasAttribute("data-editable")) return;

    // om dubbelklick
    if (event.detail === 2) {
      elem.setAttribute("contenteditable", true);

      const makeNotEditable = () => {
        elem.removeAttribute("contenteditable");
        elem.removeEventListener("blur", blurHandler);
        elem.removeEventListener("keyup", keyupHandler);
      };

      const blurHandler = (event) => {
        makeNotEditable();
      };
      const keyupHandler = (event) => {
        if (event.key === "Enter") {
          makeNotEditable();
        }
      };

      elem.addEventListener("blur", blurHandler);
      elem.addEventListener("keyup", keyupHandler);
    }
  });
}
