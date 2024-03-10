const checkbox = document.getElementById("check");
const text = document.getElementById("text");

function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if (checkbox.checked) {
    text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "transparent";
  }
}
