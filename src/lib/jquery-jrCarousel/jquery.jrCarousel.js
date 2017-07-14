;(function($){
	// $.prototype.lxCarousel = function(options){
	$.fn.jrCarousel = function(options){
		// this => $('#lbt');

		// 默认参数
		var defaults = {
			width:810,
			height:320,
			autoPlay:true,//ok
			small:false,
			buttons:true,//ok
			page:true,//ok
			duration:3000,//ok
			index:0,//ok
			type:'vertical',//vertical(垂直),horizontal(水平),fade(淡入淡出),show(切换)
		}

		// var opt = Object.assign({},defaults,options);
		var opt = $.extend({},defaults,options);


		// 遍历使插件同时使用多个元素上
		this.each(function(idx,item){

			// 各为己用
			var $self = $(item)

			// 图片的长度
			var len = opt.imgs.length;

			// 生成大图
			var $ul = $('<ul/>');

			// 添加类名
			$self.addClass('jrCarousel');

			// 定义宽高
			$self.css({
				width:opt.width,
				height:opt.height
			});

			// 图片路径
			$.each(opt.imgs,function(idx,url){
				$('<li/>').css({height:opt.height,width:opt.width}).html(`<img src="${url}">`).appendTo($ul);
			});
			$ul.appendTo($self);

			// 水平
			if(opt.type==='horizontal'){
				$ul.width(opt.width*len);
				$ul.addClass('horizontal')
			}




			// 默认显示图片
			var index = opt.index;
			var len = opt.imgs.length;

			// 生成分页
			if(opt.page){
				var $page = $('<div/>').addClass('page');
				for(var i=1;i<=len;i++){
					var $span = $('<span/>');

					// 给第一个span添加高亮
					if(i==index+1){
						$span.addClass('active');
					}
					$span.appendTo($page);
				}

				$page.appendTo($self);
			}
			
			


			// 前后按钮
			if(opt.buttons){
				$('<div/>').addClass('prev').html('&lt;').appendTo($self);
				$('<div/>').addClass('next').html('&gt;').appendTo($self);
			}
			


			var timer;

			// 上一页下一页
			$self.on('click','.prev',function(){
				index--;
				showPic();
			}).on('click','.next',function(){
				index++;
				showPic();
			})

			// 移入移出
			.on('mouseenter',function(){
				clearInterval(timer);
			}).on('mouseleave',function(){
				timer = setInterval(autoPlay,opt.duration);
			})


			// 点击页码
			.on('click','.page span',function(){
				index = $(this).index();
				showPic();
			})

			// 自动轮播
			if(opt.autoPlay){
				$self.trigger('mouseleave');
			}

			function autoPlay(){
				index++;
				showPic();
			}

			function showPic(){
				// 到达最后一张时，重新回到第一张
				if(index > len-1){
					index = 0;
				}else if(index<0){
					index = len-1;
				}
				var obj;
				
				// 水平
				if(opt.type==='horizontal'){
					obj = {left:-index*opt.width};

				}
				// 淡入淡出
				else if(opt.type==='fade'){
					
					$ul.find('li').css({position:'absolute',left:0,top:0});
					$ul.children().eq(index).fadeIn().siblings().fadeOut();

				}
				// 切换
				else if(opt.type==='show'){
					$ul.children().eq(index).css({display:'block'}).siblings().css({display:'none'})
					// $ul.find('img').attr('src','img/00'+index+'.jpg')
				}
				// 滚动
				else{
					obj = {top:-index*opt.height};
					
				}
				
				$ul.stop().animate(obj);
				
				// 高亮分页
				if(opt.page){
					$page.children().eq(index).addClass('active').siblings().removeClass();
				}
			}
		})
	
		
	}

	// $.fn.lxTab = function(){}
	// $.fn.lxPopover = function(){}

	// 系列插件
	// $.fn.extend({
	// 	lxCarousel:function(){},
	// 	lxPopover:function(){},
	// 	lxTab:function(){}
	// });

	// 全局插件
	// $.lxTab = function(){

	// }

	// 系列插件
	// $.extend({
	// 	lxCarousel:function(){},
	// 	lxPopover:function(){},
	// 	lxTab:function(){}
	// });

	// $.lxTab()
})(jQuery);


//$('#lbt').lxCarousel();