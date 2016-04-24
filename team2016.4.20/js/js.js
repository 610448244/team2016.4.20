$(document).ready(function(){

	function byc2(){
		var $an=$('.botton div');
		var $tp=$('.windows .in');
		var index=0,ml=0;
		$an.eq(index).css('background','#000').siblings('div').css('background','#fff');
		function onse(){
			index++;
			if(index==8){
				index=0;
			}
			ml=-index*595;
			$tp.animate({marginLeft:ml},500);
			$an.eq(index).css('background','#000').siblings('div').css('background','#fff');
		}
		var ar=setInterval(onse,3000);//;自动运行
		$an.click(function(e) {
            index=$(this).index();
			ml=-index*595;
			$tp.animate({marginLeft:ml},500);
			$an.eq(index).css('background','#000').siblings('div').css('background','#fff');
        }).mouseenter(function(e) {//;鼠标移动到图片，停止自动运行
            clearInterval(ar);
        }).mouseleave(function(e) {
            ar=setInterval(onse,3000);
        });
		}
	
	byc2();
});