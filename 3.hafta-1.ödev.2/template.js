var word;
word = prompt("Enter name");
var count = "";

function secretString(word) {
  for (var i = 0; i < word.replace(" ", "").length - 2; i++) {
    count += "*";
  }
}
secretString(word);
document.write(
  word.replace(word.substring(1, word.length - 1), count) + "<br>"
);