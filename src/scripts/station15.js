const change = document.querySelector("button");
const lis = document.getElementById("fruits");
change.addEventListener("click", () => {
  lis.innerHTML = "<ul><li>リンゴ</li><li>イチゴ</li><li>ブドウ</li></ul>";
});
