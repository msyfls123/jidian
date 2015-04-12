var menuArray=new Array(0,0,0,0,0,0,0,0,0,0);
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