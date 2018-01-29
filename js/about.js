$(function(){
  //当页面加载完成时，隐藏遮罩图片
  $(window).load(function(){$('.page_spinner').fadeOut(1000);});
  //当页面上下滚动时，右侧边显示或隐藏小图标
  $(window).scroll(function(e){
    var scrollY = parseInt(e.currentTarget.scrollY);
    if (scrollY >= 365) {
      $(".top-controll").show("slow")
    } else {
      $(".top-controll").hide("slow")
    }
  });
  //询问客服小窗口关闭按钮
  $(".new-bridge .cancel").click(function(e){
    $(this).parent().css({"display" : "none"});
  });

  $(".sideMenu .expertise-title").click(function(e){
    $(".sideMenu h3").css({
      "display" : "block"
    });
    $(".sideMenu ul").css({
      "display" : "none"
    });
    $(this).parent().css({
      "display" : "none"
    }).next("ul").css({"display" : "block"})
  });

  $(".love-btn1").mouseover(function(){
    $(this).css({"z-index":"3"}).prev(".show1").addClass("showAnimate")
  })
  $(".love-btn1").mouseleave(function(){
    $(this).prev(".show1").removeClass("showAnimate")
    $(this).css({"z-index":"1"})
  })
  $(".love-btn2").mouseover(function(){
    $(this).css({"z-index":"3"}).prev(".show2").addClass("showAnimate2")
  })
  $(".love-btn2").mouseleave(function(){
    $(this).prev(".show2").removeClass("showAnimate2")
    $(this).css({"z-index":"1"})
  })

    $(window).scroll(function(e){
      var scrollY = parseInt(e.currentTarget.scrollY);
      if (scrollY >= 2000) {
        $(".my-img").addClass("bounceIn");
      } else {
        $(".my-img").removeClass("bounceIn");
      }
    });
});
