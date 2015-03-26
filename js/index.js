var menuArray=new Array(0,0,0,0,0,0,0,0,0,0);
$(document).ready(function(){
	$("#guide li").each(function(i){
		var step=i*96;
		$(this).mouseenter(function(){
			$("#fly").stop().animate({left:step+"px"},500);
			$(".menu ul:eq("+i+")").stop().slideDown(500);
			menuArray[i]=1;
			for (var j = 9; j >= 0; j--) {
				if (menuArray[j]==1&&j!=i) {
					$(".menu ul:eq("+j+")").stop().slideUp(500);
					menuArray[j]=0;
				};
			};
		});
		$(this).mouseleave(function(){
			$(".menu").mouseleave(function(){			
				$(".menu ul:eq("+i+")").stop().slideUp(500,function(){menuArray[i]=0;});
			});
		});
	});
	$("#guide").mouseleave(function(){
		$(".menu").mouseleave(function(){
			$("#fly").stop().animate({left:"0px"},500)
		})
	})
})