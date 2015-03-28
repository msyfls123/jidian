var menuArray=new Array(0,0,0,0,0,0,0,0,0,0);
var curName=0;
$(document).ready(function(){
	$("#guide li").each(function(i){
		var step=i*96;
		/*鼠标移入导航栏 */
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
		/*鼠标移出导航栏 */
		$(this).mouseleave(function(){
			$("#con").mouseleave(function(){			
				$(".menu ul:eq("+i+")").stop().slideUp(500,function(){menuArray[i]=0;});
				$("#fly").stop().animate({left:"0px"},500);
			});
		});
	});
	/*图片轮播*/
	var t,imgT;
	var Temp;
	function ImgCircle(s,e){
		clearTimeout(Temp);
		if (e>4) {return ImgCircle(s,0)};
		var LeftStep=-e*600;
		$("#img").stop().animate({left:LeftStep+"px"},1000);
		$("#ban li:eq("+s+")").removeClass("cur");
		$("#ban li:eq("+e+")").addClass("cur");
		imgT=e;		
		e++;
		t=setTimeout(function(){ImgCircle(imgT,e)},5000)
	};
	$("#ban li").each(function(i){
		$(this).click(function(){clearTimeout(t);ImgCircle(imgT,i);clearTimeout(t);});
	});
	$("#ban").mouseenter(function(){clearTimeout(t);clearTimeout(Temp)});
	$("#ban").mouseleave(function(){Temp=setTimeout(function(){ImgCircle(imgT,imgT+1)},3000)});
	ImgCircle(0,0);
	/*新闻栏*/
	$(".newsbox:eq(0) li").each(function(i){
		var dis=60+35*i;
		$(this).mouseenter(function(){
			$("#slide").stop().animate({top:dis+"px"},500);
		})
	})
	$(".newsbox:eq(0) ul").mouseleave(function(){
			$("#slide").stop().animate({top:"60px"},500);
	})
	/**/
	$(".right div.name").each(function(i){
		$(this).hover(function(){
			if (i!=curName) {
				$(this).removeClass("unpick");
				$(".right div.name:eq("+curName+")").addClass("unpick");
				curName=i;
			};
		})
	})
})
