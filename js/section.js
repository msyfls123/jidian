$(document).ready(function(){
		//页面滚动固定标题和左侧导航栏
		var navH = $("#nav").offset().top;//获取要定位元素距离浏览器顶部的距离
		var titleH= $("#title").offset().top;//获取要定位元素距离浏览器顶部的距离
		function scrollEvent1(){            //固定导航栏
			var scroH = $(this).scrollTop();
			if(scroH>=navH-30){
				$("#nav").css({"position":"fixed","top":"20px","left":"50%","margin-left":"-480px"});
			}else if(scroH<navH-30){
				$("#nav").css({"position":"absolute","top":"40px","left":"0","margin-left":"0",});
			}
		};
		function scrollEvent2(){            //固定标题
			var scroH = $(this).scrollTop();
			if(scroH>=navH-30){
				$("#title").css({"position":"fixed","top":"30px","left":"50%","margin-left":"-300px","box-shadow":"15px -8px 10px 30px #fff","background":"#fff"});
			}else if(scroH<navH-30){
				$("#title").css({"position":"absolute","top":"15px","left":"180px","margin-left":"0px","box-shadow":"none","background":"none"});
			}
		};
		$(window).scroll(function(){scrollEvent1();scrollEvent2();});   //注册固定导航栏事件

		function change(cur,next){
			if (cur==next) {
				location.replace("#"+window.flag);
			}
		}
		window.onhashchange=function(){
			window.location.reload()
		}
		change(0,0)
});