$(document).ready(function(){
		var navH = $("#nav").offset().top;//获取要定位元素距离浏览器顶部的距离
		function scrollEvent1(){            //固定导航栏
			var scroH = $(this).scrollTop();
			if(scroH>=navH-30){
				$("#nav").css({"position":"fixed","top":50,"left":"50%","margin-left":"-480px"});
			}else if(scroH<navH-30){
				$("#nav").css({"position":"absolute","top":0,"left":"0","margin-left":"0",});
			}
		};
		$(window).scroll(function(){scrollEvent1();});
		var clickFlag=-1;
		$("#nav>ul>li>p").each(function(i){
				$(this).click(function(){
					if (clickFlag==i) {$("#nav>ul>li:nth-child("+(i+1)+") ul").slideUp();
					$("#nav>ul>li:nth-child("+(i+1)+")").removeClass("active");$("#title span:nth-child(3),#title span:nth-child(4)").text("");clickFlag=-1;}else{
					for (var j = $("#nav>ul>li").length - 1; j >= 0; j--) {
						if (i!=j) {
							$("#nav>ul>li:nth-child("+(j+1)+") ul").slideUp();
							$("#nav>ul>li:nth-child("+(j+1)+")").removeClass("active");
							var text1=$(this).text();
							$("#title span:nth-child(3)").text(">"+text1);
							$("#title span:nth-child(4)").text("");
						}else{$("#nav>ul>li:nth-child("+(i+1)+") ul").slideDown();
								$("#nav>ul>li:nth-child("+(i+1)+")").addClass("active");}
					};
					clickFlag=i;
					}
				});
		});
		$("#nav>ul>li>ul>li").each(function(){$(this).click(function(){
			var text2=$(this).text();
			$("#title span:nth-child(4)").text(">"+text2);
		})});
})