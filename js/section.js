$(document).ready(function(){
		var navH = $("#nav").offset().top;//获取要定位元素距离浏览器顶部的距离
		var titleH= $("#title").offset().top;//
		function scrollEvent1(){            //固定导航栏
			var scroH = $(this).scrollTop();
			if(scroH>=navH-30){
				$("#nav").css({"position":"fixed","top":50,"left":"50%","margin-left":"-480px"});
			}else if(scroH<navH-30){
				$("#nav").css({"position":"absolute","top":0,"left":"0","margin-left":"0",});
			}
		};
		function scrollEvent2(){            //固定导航栏
			var scroH = $(this).scrollTop();
			if(scroH>=navH-30){
				$("#title").css({"position":"fixed","top":60,"left":"50%","margin-left":"-300px","box-shadow":"15px -8px 10px 30px #fff"});
			}else if(scroH<navH-30){
				$("#title").css({"position":"absolute","top":10,"left":"180","margin-left":"0","box-shadow":"none"});
			}
		};
		$(window).scroll(function(){scrollEvent1();scrollEvent2();});   //注册固定导航栏事件

		var clickFlag=-1;
		$("#nav>ul>li>p").each(function(){ //导航栏点击事件
				$(this).click(function(){
					var i=$(this).parent().index();
					if (clickFlag==i) {$("#nav>ul>li:nth-child("+(i+1)+") ul").slideUp();
						$("#nav>ul>li:nth-child("+(i+1)+")").removeClass("active");
						$("#title span:nth-child(3),#title span:nth-child(4)").text("");
						clickFlag=-2;
						location.replace("#");
						$(".menu1").slideDown();
						$(".menu2").slideUp();
					}else{
					for (var j = $("#nav>ul>li").length - 1; j >= 0; j--) {
						if (i!=j) {
							$("#nav>ul>li:nth-child("+(j+1)+") ul").slideUp();
							$("#nav>ul>li:nth-child("+(j+1)+")").removeClass("active");
						}else{$("#nav>ul>li:nth-child("+(i+1)+") ul").slideDown();
								$("#nav>ul>li:nth-child("+(i+1)+")").addClass("active");}
					};
					var text1=$(this).text();//改标题（首页/学院/XX/）
					$("#title span:nth-child(3)").text(">"+text1);
					$("#title span:nth-child(4)").text("");
					$(".menu1").slideUp();
					$(".menu2").slideDown();
					clickFlag=i;
					location.replace("#"+i);
					}
				});
		});
		$("#nav>ul>li>ul>li").each(function(){$(this).click(function(){ //改标题（首页/学院/XX/）
			var text2=$(this).text();
			$("#title span:nth-child(4)").text(">"+text2);
		})});
		$("#title span:nth-child(2)").text($(document).attr("title"));
		$(".menu1 li").each(function(i){  //点图片进二级菜单
			$(this).click(function() {
				var p=i+1;
				$("#nav>ul>li:nth-child("+p+")>p").trigger("click");
				$(".menu1").slideUp();
				$(".menu2").slideDown();
			})
		});
		$(".menu a").click(function(){window.location.reload();}) //页面初始化
		if (location.hash) {
			var k=parseInt(location.hash.substr(1))+1;
			$("#nav>ul>li:nth-child("+k+")>p").trigger("click")
		};
})