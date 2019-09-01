$(function() {
  var h = $(window).height(); // ブラウザウィンドウの高さを取得する
  $("#contents").css("display", "none"); // コンテンツを非表示にする
  $("#loader-bg ,#loader")
    .height(h)
    .css("display", "block"); //ローディング画像を表示
});
$(window).on("load", function() {
  // 読み込み完了したら実行する
  $("#loader-bg")
    .delay(900)
    .fadeOut(800); // ローディングを隠す
  $("#loader")
    .delay(600)
    .fadeOut(300);
  $("#contents").css("display", "block"); // コンテンツを表示する
});
