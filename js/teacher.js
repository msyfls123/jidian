$("#quickLink").prepend($("h1 span:eq(0)").text()+"<p>")    //获取文章标题将其加到quickLink中去
			
			$(".title1,.title2,.title3").each(function(){        //获取每个标题将其加到quickLink中去
				if ($(this).hasClass("title2")) {
					$("#quickLink ul").append("<li class='s'>"+$(this).text()+"</li>");
				}else if($(this).hasClass("title3")) {
					$("#quickLink ul").append("<li class='ss'>"+$(this).text()+"</li>");
				}else{
					$("#quickLink ul").append("<li>"+$(this).text()+"</li>");
				}
			});

			$("#quickLink li").each(function(i){      //点击quickLink跳转页面位置
				$(this).click(function(){
					$('html, body').animate({scrollTop: $(".title1,.title2,.title3").eq(i).offset().top-20}, 1000); return false;
				})
			})

			var quickH = $("#quickLink").offset().top;

			function scrollEvent4(){            //固定右侧quickLink
				var scroH = $(this).scrollTop();
				if(scroH>=quickH-30){
					$("#quickLink").css({"position":"fixed","top":"40px","left":"50%","margin-left":"490px"});
				}else if(scroH<quickH-30){
					$("#quickLink").css({"position":"absolute","top":"160px","left":"755px","margin-left":"0px"});
				}
			};
			var titleH=new Array();
			//for (var i = 0; i <= $(".title1,.title2,title3").length-1; i++) {
				//titleH.push($(".title1").eq(i).offset().top-50);
			//};
			$(".title1,.title2,.title3").each(function(){
				titleH.push($(this).offset().top-50);
			});

			titleH[titleH.length]=100000;
			function scrollEvent5(){            //滑动到对应位置在quickLink显示
				var scroH = $(this).scrollTop();
				for (var i = 0; i <= $("#quickLink li").length - 1; i++) {
					if(scroH>titleH[i]&&scroH<titleH[i+1]){
						$("#quickLink li:eq("+i+")").addClass("get");
					}else{
						$("#quickLink li:eq("+i+")").removeClass("get");
					}
				};
			};
			$(window).scroll(function(){scrollEvent4();scrollEvent5()});   //注册固定导航栏事件