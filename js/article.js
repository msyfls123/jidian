var index=$("#table h1 li:eq(2)").attr('index');

function displayIndex2(){    //显示左侧目录
	$("#nav ul").empty();
	if(!isNaN(Number(window.flag))){
		for (var i = 1; i <= menuList1[window.flag-1].length-1; i++) {
			$("#nav ul").append("<a target='_blank' href='../menu/section.html#"+(window.flag)+i+"'><li><p>"+menuList1[window.flag-1][i]+"</p></li></a>")
		};
	}else{
		var indexGroup=window.flag.charCodeAt(0)-87;
		window.flag=indexGroup;
	}
	if(index.slice(1,2)!=""){$("#nav>ul li:eq("+(index.slice(1,2)-1)+")").addClass("active");}
}

function setTitle2(){
	document.title=$("#table h1 span:eq(0)").text();//设置title
	$("#titleTop span").text(menuList1[window.flag-1][0]);//设置大标题
	$("#title span:eq(1)").text(menuList1[window.flag-1][0]);//设置目录条
	if (index.slice(1,2)!="") {
				$("#title span:eq(2)").text("- "+menuList1[window.flag-1][index.slice(1,2)]);
			}else{
				$("#title span:eq(2)").text("");
			}
}

function getText(){
	var remindText=new Array();
	remindText.push($("#reminder>span:first-child").text()+"\n");
	for(var i=0;i<=$("#reminder ul li span").length-1;i++){
		if(i%2==0){
			remindText.push($("#reminder ul li span:eq("+i+")").text()+": ");
		}else{
			remindText.push($("#reminder ul li span:eq("+i+")").text()+"\n");
		}
	}
	return remindText.join("");
}

$(document).ready(function(){
	//页面滚动显示小火箭
	function scrollEvent3(){ 
	var scroH = $(this).scrollTop();
	if(scroH>=500){
			$("#backTop").fadeIn(1000);
		}else{
			$("#backTop").fadeOut(500);
		}
	};
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
				$("#title").css({"position":"fixed","top":"20px","left":"50%","margin-left":"-300px","background":"#fff"});
			}else if(scroH<navH-30){
				$("#title").css({"position":"absolute","top":"10px","left":"180px","margin-left":"0px","background":"none"});
			}
		};
		$(window).scroll(function(){scrollEvent1();scrollEvent2();scrollEvent3();});   //注册固定导航栏事件

		$("#backTop").click(function(){ 
			$('body,html').animate({scrollTop:"0px"}, 1000); return false;
		});
		window.flag=index.slice(0,1);
		setGuide();
		displayIndex2();
		setTitle2();

		$("#reminder span:eq(1)").zclip({
		path: '../js/ZeroClipboard.swf',
		copy: getText(),
		afterCopy: function(){
			$("#reminder>span:nth-child(2)").css("color",'#ccc');
			$("#reminder span:eq(1)").after("<span id='msg'>复制成功</span>");
			$("#msg").fadeOut(2000);
		}
		});
});