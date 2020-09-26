/*toogle-search*/



$(document).ready(function(){
  $(".search-toggle").click(function(){
    $(".sear-toggle").toggle(200);
    $(":disabled").css(".search-toggle");
  });
});

$(document).ready(function(){
  $(".btn-exit").click(function(){
    $(".sear-toggle").toggle(200);
  });
});
