$(function () {
    //顶部导航
    if($(window).width() > 768){
        //导航下拉
        $(".dropdown").mouseover(function () {
            $(this).addClass("open");
        });

        $(".dropdown").mouseleave(function(){
            $(this).removeClass("open");
        });
        $(document).off('click.bs.dropdown.data-api');
        /*/下拉导航固定*/
		$(window).scroll(function () {
		  if($(document).scrollTop()>150){
			 $("header").addClass("fixedheader animated fadeInDown");
		  }else{
		   	$("header").removeClass("fixedheader animated fadeInDown");
		  }
		});
    }
    //首页选项卡鼠标经过切换
    jQuery("#slideBox1").slide({trigger:"mouseover"});
    jQuery("#slideBox2").slide({trigger:"mouseover"});
    jQuery(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:1});
    //搜索按钮
    $(".so-btn").click(function(){
      $("#search_box").slideToggle();
    });
    
	//全场动画
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		new WOW().init();
	};
})
$(document).ready(function(){
  //软硬件右侧高度
    $(".ruanyingjian_item .ruanyingjian_you").each(function(){
    	console.log($(this).parents(".inner").children(".ruanyingjian_zuo").height());
	  $(this).height($(this).parents(".inner").children(".ruanyingjian_zuo").height());
	});
});