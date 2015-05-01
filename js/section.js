function displayMenu(i){
			if(i==1){
				$(".menu1").slideUp();
				$("#tab").slideDown(1000);
			}else{
				$(".menu1").slideDown();
				$("#tab").slideUp(1000);
			}
		};
function displayIndex(){
	$("#nav ul").empty();
	for (var i = 1; i <= menuList1[window.flag-1].length-1; i++) {
		$("#nav ul").append("<li><p>"+menuList1[window.flag-1][i]+"</p></li>")
	};
}
$(document).ready(function(){
		//创建分页
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
		//创建分.end

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

		
		$(".menu1 li").each(function(i){  //点图片进二级菜单
			$(this).click(function(){
				displayMenu(1);
			});
		});
		$(".menu li, #guide li").click(function(){
			
		})
		function change(cur,next){
			if (cur==next) {
				location.replace("#"+window.flag);
			}
		}
		window.onhashchange=function(){
			setGuide();
			displayIndex();
		}

});