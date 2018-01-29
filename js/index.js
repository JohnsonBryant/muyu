$(function(){
  var controls = $('.banner-slider').children();
  var bannerList = $('.banner-main').children();
  var bannerAnimate = {'show':{} ,"hide":{} };
  (function (controls, bannerList) {
    function bannerbjTogle(j ,status){
      $(bannerList[j]).find(".banner-bj").css({"display": status});
    }
    for(var i=0; i < controls.length; i++){
      if (i === 0) {
        bannerAnimate.show[i] = function (j){
          bannerbjTogle(j ,"block");          
          $(bannerList[j]).find(".banner-logo").animate({
            top: "30px",
            left: "50%",
            opacity: 1
          }, 600)
          .siblings(".banner-text1").animate({
            top: "233px",
            opacity: 1
          }, 600)
          .siblings(".banner-text2").animate({
            top: "315px",
            opacity: 1
          }, 600)
          .siblings(".banner-text3").animate({
            top: "380px",
            opacity: 1
          }, 600)
        }
        bannerAnimate.hide[i] = function (j){
          setTimeout(bannerbjTogle, 600, j, "none");
          $(bannerList[j]).find(".banner-logo").animate({
            top: "30px",
            left: "45%",
            opacity: 0
          }, 600)
          .siblings(".banner-text1").animate({
            top: "833px",
            opacity: 0
          }, 600)
          .siblings(".banner-text2").animate({
            top: "1115px",
            opacity: 0
          }, 600)
          .siblings(".banner-text3").animate({
            top: "1180px",
            opacity: 0
          }, 600)
        }        
      }
      if (i === 1) {
        bannerAnimate.show[i] = function (j){          
          bannerbjTogle(j ,"block");
          $(bannerList[j]).find(".banner-muyu2").animate({
            right: "180px",
            opacity: 1
          }, 600)
          .siblings(".banner-muyu3").animate({
            left: "160px",
            opacity: 1
          }, 600)
        }
        bannerAnimate.hide[i] = function (j){
          setTimeout(bannerbjTogle, 600, j, "none"); 
          $(bannerList[j]).find(".banner-muyu2").animate({
            right: "-610px",
            opacity: 0
          }, 600)
          .siblings(".banner-muyu3").animate({
            left: "-350px",
            opacity: 0
          }, 600)
        }        
      }
      if (i === 2) {
        bannerAnimate.show[i] = function (j){
          bannerbjTogle(j ,"block");
          $(bannerList[j]).find(".banner-xiaotou1").animate({
            left: "50%",
            opacity: 1
          }, 600)
          .siblings(".banner-xiaotou2").animate({
            left: "50%",
            opacity: 1
          }, 600)
        }
        bannerAnimate.hide[i] = function (j){
          setTimeout(bannerbjTogle, 600, j, "none"); 
          $(bannerList[j]).find(".banner-xiaotou1").animate({
            left: "40%",
            opacity: 0
          }, 600)
          .siblings(".banner-xiaotou2").animate({
            left: "116%",
            opacity: 0
          }, 600)
        }        
      }
      if (i === 3) {
        bannerAnimate.show[i] = function (j){
          bannerbjTogle(j ,"block");
          $(bannerList[j]).find(".banner-women").animate({
            top: "145px",
            opacity: 1
          },600)
          .siblings(".banner-phone").animate({
            left: "50%",
            opacity: 1
          },600)
          .siblings(".banner-glb").animate({
            left: "50%",
            opacity: 1
          },600)
          .siblings(".banner-text4").animate({
            left: "50%",
            opacity: 1
          },600)
        }
        bannerAnimate.hide[i] = function (j){
          setTimeout(bannerbjTogle, 600, j, "none"); 
          $(bannerList[j]).find(".banner-women").animate({
            top: "175px",
            opacity: 0
          },600)
          .siblings(".banner-phone").animate({
            left: "45%",
            opacity: 0
          },600)
          .siblings(".banner-glb").animate({
            left: "45%",
            opacity: 0
          },600)
          .siblings(".banner-text4").animate({
            left: "117%",
            opacity: 0
          },600)
        }        
      }
      if (i === 4) {
        bannerAnimate.show[i] = function (j){
          bannerbjTogle(j ,"block");
          $(bannerList[j]).find(".banner-2-2").animate({
            left: "50%",
            opacity: 1
          }, 600)
          .siblings(".banner-text5").animate({
            left: "50%",
            opacity: 1
          }, 600)
        }
        bannerAnimate.hide[i] = function (j){
          setTimeout(bannerbjTogle, 600, j, "none"); 
          $(bannerList[j]).find(".banner-2-2").animate({
            left: "45%",
            opacity: 0
          }, 600)
          .siblings(".banner-text5").animate({
            left: "115%",
            opacity: 0
          }, 600)
        }        
      }

    }
  }(controls, bannerList));

  var autoSlide = (function (controls, bannerList){
    var i = 0;
    function auto(j){
      // bannerAnimate.show[i](i);
      if (i >= controls.length) {
        i = 0;
      }
      if (i === 0) {
        bannerAnimate.hide[controls.length - 1](controls.length - 1);
        setTimeout(bannerAnimate.show[i], 600, i);
        $(controls[controls.length - 1]).removeClass("selected");
        $(controls[i]).addClass("selected");  
      }
      if (i === 1) {
        bannerAnimate.hide[i-1](i-1);
        setTimeout(bannerAnimate.show[i], 600, i);
        $(controls[i-1]).removeClass("selected");
        $(controls[i]).addClass("selected"); 
      }
      if (i === 2) {
        bannerAnimate.hide[i-1](i-1);
        // bannerAnimate.show[i](i);
        setTimeout(bannerAnimate.show[i], 600, i);
        $(controls[i-1]).removeClass("selected");
        $(controls[i]).addClass("selected");   
      }
      if (i === 3) {
        bannerAnimate.hide[i-1](i-1);
        setTimeout(bannerAnimate.show[i], 600, i);
        $(controls[i-1]).removeClass("selected");
        $(controls[i]).addClass("selected"); 
      }
      if (i === 4) {
        bannerAnimate.hide[i-1](i-1);
        setTimeout(bannerAnimate.show[i], 600, i);
        $(controls[i-1]).removeClass("selected");
        $(controls[i]).addClass("selected");
      }
      i++;
    }
    return auto;
  }(controls, bannerList));
  var t = setInterval(autoSlide, 3600);
  //控制按钮点击事件绑定
  (function (controls, bannerList) {
    for(var i=0; i < controls.length; i++){
      $(controls[i]).click(i, function(e){
        // 清除计时器
        clearInterval(t);
        //处理找出当前显示的banner项，隐藏，显示点击的banner项
        var prevControl = $('.banner-slider').children('.selected')[0];
        bannerAnimate.hide[prevControl.tabIndex](prevControl.tabIndex);
        setTimeout(bannerAnimate.show[e.data], 600, e.data);
        //控制按钮的样式切换
        $(controls[prevControl.tabIndex]).removeClass("selected");
        $(this).addClass("selected");
        t = setInterval(autoSlide, 3600);
      });
    }
  }(controls, bannerList));


  var s3Controls = $('.s3-controls').children("div");
  var s3MainList = $('.s3-main').children("ul");
  var s3ControlsParam = 0;
  function s3MainListAnimate(){
    if (s3ControlsParam === 0) {
      $(s3Controls[0]).addClass("on");
      $(s3Controls[1]).removeClass("on");
      $(s3MainList[1]).css({"display" : "none"});
      $(s3MainList[0]).css({"display" : "block"});
      s3ControlsParam = 1;
    } else {
      $(s3Controls[1]).addClass("on");
      $(s3Controls[0]).removeClass("on");
      $(s3MainList[0]).css({"display" : "none"});
      $(s3MainList[1]).css({"display" : "block"});
      s3ControlsParam = 0;      
    }
  }
  var s3T = {};
  s3T.time = setInterval(s3MainListAnimate, 4000);
  $(s3Controls[0]).mouseover(s3T ,function(e){
    clearInterval(e.data.time);
    $(this).addClass("on");
    $(s3Controls[1]).removeClass("on");
    $(s3MainList[1]).css({"display" : "none"});
    $(s3MainList[0]).css({"display" : "block"});
    e.data.time = setInterval(s3MainListAnimate, 4000);
  });
  $(s3Controls[1]).mouseover(s3T ,function(e){
    clearInterval(e.data.time);
    $(this).addClass("on");
    $(s3Controls[0]).removeClass("on");
    $(s3MainList[0]).css({"display" : "none"});
    $(s3MainList[1]).css({"display" : "block"});
    e.data.time = setInterval(s3MainListAnimate, 4000);
  });

  $(window).scroll(function(e){
    var scrollY = parseInt(e.currentTarget.scrollY);
    if (scrollY >= 365) {
      $(".top-controll").show("slow")
    } else {
      $(".top-controll").hide("slow")
    }

  });

  $(".new-bridge .cancel").click(function(e){
    $(this).parent().css({"display" : "none"});
  });




});
