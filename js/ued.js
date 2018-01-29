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

// ued.html页面js代码

 $(function(){
    var aLi = $('#brand .bd-box li');
    var aImg =  $('#brand .bd-box li div.just img');
    var aSpan = $('#brand .bd-box li div.against img');
    var aSpann = $('#brand .bd-box li div.against');
    aLi.each(function(index){
        $(this).mouseover(function(){
            aSpan.eq(index).stop();
            aSpann.eq(index).stop();
            aImg.eq(index).stop();
            aImg.eq(index).css({zIndex:1}).animate({
                left:177.5,
                width:0
            },80,'',function(){
                $(this).hide();
                aSpan.eq(index).show().css({zIndex:3}).animate({
                    left:0,
                    width:355
                },80)
                aSpann.eq(index).show().css({zIndex:4}).animate({
                    left:0,
                    width:355
                },80)
            })
        })
        $(this).mouseout(function(){
            aSpan.eq(index).stop();
            aSpann.eq(index).stop();
            aImg.eq(index).stop();
            aSpan.eq(index).css({zIndex:1}).animate({
                left:177.5,
                width:0
            },80,''),
            aSpann.eq(index).css({zIndex:1}).animate({
                left:177.5,
                width:0
            },80,'',function(){
                $(this).hide();
                aImg.eq(index).show().css({zIndex:2}).animate({
                    left:0,
                    width:355
                },80)
            })
        })
    })
  })

});
