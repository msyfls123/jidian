var menuArray=new Array(0,0,0,0,0,0,0,0,0,0);
var menuList1=[["学院概况","学院简介","党委班子","行政班子","组织机构","办公电话","三级单位"],
			   ["师资队伍","电子信息工程","机械设计制造及其自动化","工业设计","通信工程"],
			   ["学院概况","学生工作"]
			  ];
$(document).ready(function(){
	for (var i = 0; i <= menuList1.length - 1; i++) {
		$("#guide")
	};
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
				$(".menu ul:eq("+i+")").stop().slideUp(delayTime,function(){menuArray[i]=0;});
				$("#guide li:eq("+i+")").removeClass("pick");
				$("#fly").stop().animate({left:"0px"},delayTime);
			});
		});
	});
		/*社交应用分享*/
	$("#popular img").each(function(i){
		$(this).mouseenter(function(){
			$(this).stop(false,false).animate({top:"-30px"},500);
		})
		$(this).mouseleave(function(){
			$(this).stop(true,false).animate({top:"0px"},500);
		})
	})
});
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