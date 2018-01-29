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

// o2o.html页面js代码

  // banner
  function bannerSlide(){
    var activeBtn = $(".swiper-active-switch").attr("tabindex");
    var slide = $(".swiper-wrapper");
    $(".pagination span").removeClass("swiper-active-switch")
    if (activeBtn == "1") {
      $(".pagination span:nth-child(2)").addClass("swiper-active-switch")
      slide.css({"transform":"translate(-387px)"})
    }
    if (activeBtn == "2") {
      $(".pagination span:nth-child(3)").addClass("swiper-active-switch")
      slide.css({"transform":"translate(-774px)"})
    }
    if (activeBtn == "3") {
      $(".pagination span:nth-child(4)").addClass("swiper-active-switch")
      slide.css({"transform":"translate(-1161px)"})
    }
    if (activeBtn == "4") {
      $(".pagination span:nth-child(1)").addClass("swiper-active-switch")
      slide.css({"transform":"translate(0px)"})
    }
  }
  var tBanner = setInterval(bannerSlide , 2000);
  $(".pagination span:nth-child(1)")[0].onclick = function(){
    clearInterval(tBanner);
    $(this).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch")
    $(".swiper-wrapper").css({"transform":"translate(0px)"})
    tBanner =  setInterval(bannerSlide , 2000);
  }
  $(".pagination span:nth-child(2)")[0].onclick = function(){
    clearInterval(tBanner);
    $(this).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch")
    $(".swiper-wrapper").css({"transform":"translate(-387px)"})
    tBanner =  setInterval(bannerSlide , 2000);
  }
  $(".pagination span:nth-child(3)")[0].onclick = function(){
    clearInterval(tBanner);
    $(this).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch")
    $(".swiper-wrapper").css({"transform":"translate(-774px)"})
    tBanner =  setInterval(bannerSlide , 2000);
  }
  $(".pagination span:nth-child(4)")[0].onclick = function(){
    clearInterval(tBanner);
    $(this).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch")
    $(".swiper-wrapper").css({"transform":"translate(-1161px)"})
    tBanner =  setInterval(bannerSlide , 2000);
  }

  // 我们的服务
  $(".hd > ul li:nth-child(1)").click(function(){
    $(this).addClass("on").siblings().removeClass("on")
    $(".bd ul:nth-child(1)").css({"display":"block"}).siblings().css({"display":"none"})
  })
  $(".hd > ul li:nth-child(2)").click(function(){
    $(this).addClass("on").siblings().removeClass("on")
    $(".bd ul:nth-child(2)").css({"display":"block"}).siblings().css({"display":"none"})
  })
  $(".hd > ul li:nth-child(3)").click(function(){
    $(this).addClass("on").siblings().removeClass("on")
    $(".bd ul:nth-child(3)").css({"display":"block"}).siblings().css({"display":"none"})
  })

  //案例 
  function workSlide(){
    var left = $(".tempWrap ul").css("left");
    if (left == "0px") {
      $(".tempWrap ul").animate({"left":"-565px"}, 650)
    } else {
      $(".tempWrap ul").animate({"left":"0"}, 650)
    }
  }
  var t1 = setInterval(workSlide, 2500);
  $(".prev").click(t1 ,function(){
    clearInterval(t1);
    if ($(".tempWrap ul").css("left") == "0px") {
      $(".tempWrap ul").animate({"left" : "-565px"}, 650)
    } else {
      $(".tempWrap ul").animate({"left" : "0px"}, 650)
    }
    t1 = setInterval(workSlide, 2500);
  })
   $(".next").click(t1 ,function(){
    clearInterval(t1);
    if ($(".tempWrap ul").css("left") == "0px") {
      $(".tempWrap ul").animate({"left" : "-565px"}, 650)
    } else {
      $(".tempWrap ul").animate({"left" : "0px"}, 650)
    }
    t1 = setInterval(workSlide, 2500);
  })


});
