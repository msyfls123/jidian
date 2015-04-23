$(document).ready(function(){
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
	/*切换新闻与动态*/
	$("#news h2").each(function(i){
		$(this).hover(function(){
			$(this).addClass("now");
			$("#news h2:eq("+(1-i)+")").removeClass("now");
			$(".new-tab:eq("+i+")").fadeIn(500);
			$(".new-tab:eq("+(1-i)+")").fadeOut(500);
		})
	});
	/*新闻栏*/
	var curName=0;
	$(".newsbox:eq(0) li").each(function(i){
		var dis=48+27*i;
		$(this).mouseenter(function(){
			
			$("#slide").stop(false,false).fadeIn().animate({top:dis+"px"},200);
		})
	})
	$(".newsbox:eq(0) ul").mouseleave(function(){
			$("#slide").stop(true,false).fadeOut();
	})
		$(".newsbox:eq(1) li").each(function(i){
		var dis=48+27*i;
		$(this).mouseenter(function(){
			$("#slide").stop(false,false).fadeIn().animate({top:dis+"px"},200);
		})
	})
	$(".newsbox:eq(1) ul").mouseleave(function(){
			$("#slide").stop(true,false).fadeOut();
	})
	/*新闻标签页*/
	$(".right div.name").each(function(i){
		$(this).hover(function(){
			if (i!=curName) {
				$(this).removeClass("unpick");
				$(".tab").stop().animate({left:-344*i+"px"},500);
				$(".right div.name:eq("+curName+")").addClass("unpick");
				curName=i;
			};
		})
	});
	$(".newsbox").each(function(i){
		var locate="news"+i+".html";
		$(this).load(locate, null,null);
	})
})
