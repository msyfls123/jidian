var menuList={"学院概况":0,
			  "师资队伍":1,
			  "本科生教育":2,
			  "研究生教育":3,
			  "科学研究":4,
			  "实验室建设":5,
			  "党建工作":6,
			  "学生工作":7,
			  "下载专区":8,
			}
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

		window.clickFlag=-1;
		$("#nav>ul>li>p").each(function(){ //导航栏点击事件
				$(this).click(function(){
					var i=$(this).parent().index();
					if (window.clickFlag==i) {$("#nav>ul>li:nth-child("+(i+1)+") ul").slideUp();
						$("#nav>ul>li:nth-child("+(i+1)+")").removeClass("active");
						$("#title span:nth-child(3),#title span:nth-child(4)").text("");
						window.clickFlag=-2;
						location.replace("#");
						$(".menu1").slideDown();
						$("#tab").hide();
					}else{
					for (var j = $("#nav>ul>li").length - 1; j >= 0; j--) {
						if (i!=j) {
							$("#nav>ul>li:nth-child("+(j+1)+") ul").slideUp();
							$("#nav>ul>li:nth-child("+(j+1)+")").removeClass("active");
							
						}else{$("#nav>ul>li:nth-child("+(i+1)+") ul").slideDown();
								$("#nav>ul>li:nth-child("+(i+1)+")").addClass("active");
							$("#tab").slideDown();}
					};
					var text1=$(this).text();//改标题（首页/学院/XX/）
					$("#title span:nth-child(3)").text(">"+text1);
					$("#title span:nth-child(4)").text("");
					$(".menu1").slideUp();
					window.clickFlag=i;
					var locate="ch"+menuList[document.title]+i+".html";
					//出错的代码~
					$("#hiddenresult").load(locate, null, function(){var num_entries=getNum_entries();$("#Pagination").pagination(num_entries, opt);});
					//alert($("#Pagination").pagination);
					location.replace("#"+i);
					$("#tab").show();
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
			
			var k=parseInt(location.hash.substr(1));
			$("#nav>ul>li:eq("+k+")>p").trigger("click");
			$("#tab").show();
		}else{
			$("#tab").hide();
		};
		if (location.search) {
			
			var k=parseInt(location.search.substr(1));
			$("#nav>ul>li:eq("+k+")>p").trigger("click");
			$("#tab").show();
		}else{
			$("#tab").hide();
		};
		//这是一个非常简单的demo实例，让列表元素分页显示
				//回调函数的作用是显示对应分页的列表项内容
				//回调函数在用户每次点击分页链接的时候执行
				//参数page_index{int整型}表示当前的索引页
		
		function getNum_entries(){
			var Temp=$("#hiddenresult li").length;
			return Temp;
		}
		var num_entries=getNum_entries();
		// 创建分页a
		var opt={
			num_edge_entries: 1, //边缘页数
			num_display_entries: 4, //主体页数
			items_per_page:10,//每页显示1项
			prev_text:"前页",
			next_text:"后页",
			callback: pageselectCallback
		}
		$("#Pagination").pagination(num_entries, opt);
		
				 
				function pageselectCallback(page_index, jq){
					$("#Searchresult").empty();
					for (var i = page_index*10; i < (page_index+1)*10; i++) {
						var new_content = $("#hiddenresult li:eq("+i+")").clone();
						$("#Searchresult").append(new_content);
					};
					//装载对应分页的内容
					return false;
				}
				
})