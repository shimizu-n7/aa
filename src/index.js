const onClickAdd = () => {
  //テキストの値を取得、その後すぐ初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //listの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divタグの子要素に各要素を設定
  div.appendChild(li);

  //未完了のリストにdiv追加
  document.getElementById("imcomplete-list").appendChild(div);
};

const e = document.getElementById("add-button");
// e.addEventListener("click", () => onClickAdd(), false);
