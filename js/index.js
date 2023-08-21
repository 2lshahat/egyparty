$(".openIcon").click(function () {
  $(".open").css("left", "0");
});
$(".far").click(function () {
  $(".open").css("left", "-270px");
});
$(".singer-card h4").click(function () {
  $(this).next().slideToggle();
  $(".singer-card .singer-info ").not($(this).next()).slideUp();
});

$("#textarea").keyup(function () {
  let Mylenth = $(this).val().length;
  $("#Num").text(
    100 - Mylenth <= 0 ? "Your avilable characters finished" : 100 - Mylenth
  );
});
