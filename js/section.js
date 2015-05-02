//创建分页~~~~~~~
		function getNum_entries(){
			var Temp=$("#hiddenresult li").length;
			return Temp;
		}
		var num_entries=getNum_entries();
		
		var opt={
			num_edge_entries: 1, //边缘页数
			num_display_entries: 4, //主体页数
			items_per_page:10,//每页显示1项
			prev_text:"Prev",
			next_text:"Next",
			callback: pageselectCallback
		}
			 
		function pageselectCallback(page_index, jq){
			$("#Searchresult").empty();
			for (var i = page_index*10; i < (page_index+1)*10; i++) {
				var new_content = $("#hiddenresult li:eq("+i+")").clone();
				$("#Searchresult").append(new_content);
			};
			//装载对应分页的内容
			return false;
		}
//创建分页.end~~~~~~

function displayMenu(i){  //显示图片目录
			if(i==1){
				$(".menu1").slideUp();
				$("#tab").slideDown();
			}else{
				$(".menu1").slideDown();
				$("#tab").slideUp();
			}
		};
function displayIndex(){    //显示左侧目录
	$("#nav ul").empty();
	if(!isNaN(Number(window.flag))){
		for (var i = 1; i <= menuList1[window.flag-1].length-1; i++) {
			$("#nav ul").append("<li><p>"+menuList1[window.flag-1][i]+"</p></li>")
		};
	}else{
		var indexGroup=window.flag.charCodeAt(0)-87;
		window.flag=indexGroup;
	}
}
function displayPic(){       //显示图片
	$(".menu1").empty();
	for (var i = 1; i <= menuList1[window.flag-1].length-1; i++) {
		$(".menu1").append("<li><div><img src='../img/b"+location.hash.slice(1,2)+i+".jpg'></div><p>"+menuList1[window.flag-1][i]+"</p></li>")
	};
	$(".menu1 li").each(function(i){  //点图片进二级菜单
			$(this).click(function(){
				displayMenu(1);
				location.hash="#"+window.flag+(i+1);
			});
	});
}
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
				$("#title").css({"position":"fixed","top":"20px","left":"50%","margin-left":"-300px","background":"#fff"});
			}else if(scroH<navH-30){
				$("#title").css({"position":"absolute","top":"10px","left":"180px","margin-left":"0px","background":"none"});
			}
		};
		$(window).scroll(function(){scrollEvent1();scrollEvent2();});   //注册固定导航栏事件

		window.onhashchange=function(){changeIt()};

		//主要函数
		function changeIt(){
			setGuide();//设置上方导航栏
			if(!isNaN(Number(window.flag))){displayPic()};
			displayIndex();//设置左侧导航栏
			$("#nav li").each(function(i){  //点左侧导航栏进二级菜单
					$(this).click(function(){
						if ($(this).hasClass("active")) {
							location.hash=location.hash.slice(0,2);
							$("#title span:eq(2)").text("");
							displayMenu(0);
							$(this).removeClass("active");
						}else{
							displayMenu(1);
							location.hash="#"+window.flag+(i+1);
						}	
					});
			});
			document.title=menuList1[window.flag-1][0];//设置title
			$("#titleTop span").text(menuList1[window.flag-1][0]);//设置大标题
			$("#title span:eq(1)").text(menuList1[window.flag-1][0]);//设置目录条
			if (location.hash.substr(1)>10) {
				$("#title span:eq(2)").text("- "+menuList1[window.flag-1][location.hash.slice(2,3)]);
			}else{
				$("#title span:eq(2)").text("");
			}

			if (Number(location.hash.substr(1))<10) {
				displayMenu(0);
			}else{
				displayMenu(1);
				$("#nav>ul>li:eq("+(location.hash.slice(2,3)-1)+")").addClass("active");
			}
			//加载Ajax
			var locate="ch"+location.hash.slice(1)+".html";
			$("#hiddenresult").load(locate, null, function(){var num_entries=getNum_entries();$("#Pagination").pagination(num_entries, opt);});
		}
		changeIt();

});