/* String.prototype.addStar = function () {
  let output = "";
  for (let char of this) {
    output += char + "*";
  }
  return output.slice(0, -1); //Börjar på första char och -1 gör att den hoppar en till vänster (vilket tar bort sista character)
}; */

Storage.prototype.getObject = function (key) {
  return JSON.parse(this.getItem(key));
};

Storage.prototype.stashContent = function () {
  // 'this' är det våran localStorage eller sessionStorage
  const keyValuePairs = Object.entries(this);
  this.clear();
  return keyValuePairs;
};
Storage.prototype.restoreContent = function (content) {
  // 'this' är det våran localStorage eller sessionStorage
  this.clear();

  for (let [key, value] of content) {
    this.setItem(key, value);
  }
};
