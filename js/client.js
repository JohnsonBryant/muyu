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

});

 //client.js
 $(function(){
  var tfocusBtns = $(".tfocus-btn li");
  var tfocusPics = $(".tfocus-pic li");
  for(var i=0, len=tfocusBtns.length; i<len;i++){
    $(tfocusBtns[i]).mouseover(i,function(e){
      tfocusBtns.removeClass("active");
      $(tfocusBtns[e.data]).addClass("active");
      tfocusPics.css({"display":"none"});
      $(tfocusPics[e.data]).css({"display":"block"});
    })
  }

 });