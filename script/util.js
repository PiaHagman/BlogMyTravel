Object.prototype.toString = function () {
  // 'this' är det generella objektet som ska bli en sträng
  return JSON.stringify(this);
};
Storage.prototype.getObject = function (key) {
  return JSON.parse(this.getItem(key));
};

Storage.prototype.stashContent = function () {
  // 'this' är vår localStorage eller sessionStorage
  const keyValuePairs = Object.entries(this);
  this.clear();
  return keyValuePairs;
};
Storage.prototype.restoreContent = function (content) {
  // 'this' är vår localStorage eller sessionStorage
  this.clear();

  for (let [key, value] of content) {
    this.setItem(key, value);
  }
};
