// ボタンクリック関数
function butotnClick() {
  // alert()で、アラートを出力
  alert("ECMAScript");
}

// document.getElementById()でHTMLの中でid属性がbtnの要素を取得し、変数buttonに代入する
let button = document.getElementById("btn");
// buttonのonclickプロパティに上記で宣言しているボタンクリック関数を代入
button.onclick = butotnClick;
