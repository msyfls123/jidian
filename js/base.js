var menuArray=new Array(0,0,0,0,0,0,0,0,0,0);
var menuList1=[["学院概况","学院简介","党委班子","行政班子","组织机构","办公电话","三级单位"],
			   ["师资队伍","电子信息工程","机械设计制造及其自动化","工业设计","通信工程"],
			   ["本科生教育","招生专业","培养方案","课程内容","实习基地","教学成果","质量工程"],
			   ["研究生教育","学科介绍","日常管理","教学信息","工程硕士","学术沙龙"],
			   ["科学研究","科研概况","项目申请","科研成果","合作交流"],
			   ["实验室建设","教学实验室","开发实验室","实验室仪器","实验室条例"],
			   ["党建工作","基层组织","党建活动","活动剪影","工会工作"],
			   ["学生组织","学生党建","奖助贷","学生风采","校友风采","招生就业"],
			   ["下载专区","本科生信息","研究生信息","人事信息","科研信息"],
			   ["学院新闻"],
			   ["学工动态"],
			   ["学术学科"],
			   ["学生工作"],
			   ["本科教育"],
			   ["研究生教育"],
			   ["实验室建设"],
			   ["党建行政"],
			  ];
window.flag=0;
function setGuide(){
	if (location.hash) {
		window.flag=location.hash.slice(1,2);
		if(Number(window.flag)==NaN){
			$("#guide li:eq(0)").addClass("pick");
			$("#fly").stop().css({"left":"0px"});
		}else{
			$("#guide li:eq("+window.flag+")").addClass("pick");
			$("#fly").stop().css({"left":window.flag*96+"px"});
		}
	}else{
		$("#guide li:eq("+window.flag+")").addClass("pick");
		$("#fly").stop().css({"left":window.flag*96+"px"});
	}
}
$(document).ready(function(){
	/*显示导航栏和下拉菜单*/
		if (!location.hash) {
		for (var i = 0; i <= 8; i++) {
			$("#guide>ul").append("<a href='menu/section.html#"+(i+1)+"'><li>"+menuList1[i][0]+"</li></a>");
			$("#dropdown>ul").append("<li class='menu'><ul></ul></li>");
			for (var j = 1; j <= menuList1[i].length-1; j++) {
				$(".menu:eq("+(i+1)+")>ul").append("<a href='menu/section.html#"+(i+1)+j+"'><li>"+menuList1[i][j]+"</li></a>");
			};
		};
	}else{
		for (var i = 0; i <= 8; i++) {
			$("#guide>ul").append("<a href='../menu/section.html#"+(i+1)+"'><li>"+menuList1[i][0]+"</li></a>");
			$("#dropdown>ul").append("<li class='menu'><ul></ul></li>");
			for (var j = 1; j <= menuList1[i].length-1; j++) {
				$(".menu:eq("+(i+1)+")>ul").append("<a href='../menu/section.html#"+(i+1)+j+"'><li>"+menuList1[i][j]+"</li></a>");
			};
		};
	}
	$("#guide li").each(function(i){
		var step=i*96;
		var delayTime=200;
		/*鼠标移入导航栏 */
		$(this).mouseenter(function(){
			$("#fly").stop().animate({left:step+"px"},delayTime);
			$(".menu ul:eq("+i+")").stop().slideDown(delayTime);
			$("#guide li:eq("+i+")").addClass("pick");
			menuArray[i]=1;
			for (var j = 9; j >= 0; j--) {
				if (menuArray[j]==1&&j!=i) {
					$(".menu ul:eq("+j+")").stop().slideUp(delayTime);
					$("#guide li:eq("+j+")").removeClass("pick");
					menuArray[j]=0;
				};
			};
		});
		/*鼠标移出导航栏 */
		$(this).mouseleave(function(){
			$("#con").mouseleave(function(){
				var start=0;
				if(window.flag<=9){start=window.flag};			
				$(".menu ul:eq("+i+")").stop().slideUp(delayTime,function(){menuArray[i]=0;});
				$("#guide li:eq("+i+")").removeClass("pick");
				$("#guide li:eq("+start+")").addClass("pick");
				$("#fly").stop().animate({left:start*96+"px"},delayTime);
			});
		});
		setGuide();
	});
		/*社交应用分享*/
	$("#popular img").each(function(i){
		$(this).mouseenter(function(){
			$(this).stop(false,false).animate({top:"-30px"},500);
		})
		$(this).mouseleave(function(){
			$(this).stop(true,false).animate({top:"0px"},500);
		})
	});
});

	//收藏首页
	function addFavorite2() {
	    var url = window.location;
	    var title = document.title;
	    var ua = navigator.userAgent.toLowerCase();
	    if (ua.indexOf("360se") > -1) {
	        alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
	    }
	    else if (ua.indexOf("msie 8") > -1) {
	        window.external.AddToFavoritesBar(url, title); //IE8
	    }
	    else if (document.all) {
	  try{
	   window.external.addFavorite(url, title);
	  }catch(e){
	   alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
	  }
	    }
	    else if (window.sidebar) {
	        window.sidebar.addPanel(title, url, "");
	    }
	    else {
	  alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
	    }
}