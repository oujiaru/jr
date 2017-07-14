require(['config'],function(){
	require(['jquery','jrCarousel','validate'],function($){

		
		// 引入html
		$('<div/>').addClass('header').load('../html/header.html',function(){
			$(this).insertBefore('.container')
			
			// 注册
			$('#reg_btn').on('click',function(e){
				
				$('.pop_reg').show(100);
				e.preventDefault();
				$('.pop_Alpha').show().on('click',function(){
					$('.pop_reg').hide(100);
					$('.pop_Alpha').hide(100);
				});
				$('.closetop_btn').on('click',function(){
					$('.pop_reg').hide(100);
					$('.pop_Alpha').hide(100);
				});
				// 老用户登录
				$('.oldLogin_btn').on('click',function(e){
					e.preventDefault();
					$('.pop_reg').hide();
					$('.pop_login').show();
				});

			})

			// 登录
			$('#login_btn').on('click',function(e){
				$('.pop_login').show(100);
				e.preventDefault();
				$('.pop_Alpha').show().on('click',function(){
					$('.pop_login').hide(100);
					$('.pop_Alpha').hide(100);
				});
				$('.pop_login .closetop_btn').on('click',function(){
					$('.pop_login').hide(100);
					$('.pop_Alpha').hide(100);
				});
				// 新用户注册
				$('.newReg_btn').on('click',function(e){
					e.preventDefault();
					$('.pop_reg').show();
					$('.pop_login').hide();
				});
				
			})

			$('#shopcar').on('click',function(e){
				e.preventDefault();
				
				location.href='html/shopcar.html';
			})
		});

		$('<div/>').addClass('footer').load('../html/footer.html',function(){
			$(this).insertAfter('.footer_img')
		});

		$('<div/>').addClass('left_bar').load('../html/left_bar.html',function(){
			$(this).insertBefore('.container')
			
			$('.left_bar').css({height:$('.container').height()});
		});

		$('<div/>').addClass('top_bar').load('../html/top_bar.html',function(){
			$(this).insertBefore('.container');
			
			$('.top_bar').on('click','a',function(e){
				e.preventDefault();
				
				location.href='html/list.html';
			})
		});

		$('<div/>').addClass('right_bar').load('../html/right_bar.html',function(){
			$(this).insertBefore('.container')

			$('.right_btn').on('click',function(){
				
				$('.right_btn').hide();
				$('.right_hbtn').show().on('click',function(){
					$('.right_bar').stop(true).animate({right:-100});
					$('.contant_bar').show();
					$('.right_btn').show();
					$('.right_hbtn').hide();
				});
				$('.contant_bar').hide();
				$('.right_bar').stop(true).animate({right:0});
			})

			// 返回顶部
			$('.btn_top').on('click',function(){
				$('html,body').animate({scrollTop:0});
			})

		});
		$('<form/>').addClass('pop_reg').load('../html/pop_reg.html',function(){
			$(this).insertAfter('.container')
			
			// 条款
			var $checkbox = $('#tiaokuan');
			var $regtop_btn = $('#regtop_btn');

			$checkbox.on('click',function(){
				if(this.checked){
					$regtop_btn.prop('disabled',false);
				}else{
					$regtop_btn.prop('disabled',true);
				}
			});


			$regtop_btn.on('click',function(e){
				var $email = $('#email').val();
				var $password = $('#password').val();
				var $qrpsw = $('#qrpsw').val();
				if($password!=$qrpsw){
					alert('确认密码要与密码一致')
					return false;
				}else if($email==''||$password==''){
					alert('邮箱密码不能为空');
					return false;
				}else{
					$.ajax({
						url:'../api/reg.php',
						type:'post',
						data:{
							email:$('#email').val(),
							password:$('#password').val(),					
						},
						success:(res)=>{
							console.log(res);
							if(res === 'ok'){
								alert('恭喜您注册成功');
							}else if(res == '已经存在'){
								alert('邮箱已经存在，请用另一个邮箱');
								$(':input').val('');
							}
						}
					});

				}
				e.preventDefault();
				
			})


			// 表单验证
			$('form').validate({
                // 验证规则
                rules:{
                	email:{
                		required:true,
                	},
                	phone:{
                        number:true,
                        rangelength:[11,11]
                    },
                   
                    password:{
                        required:true,
                        rangelength:[6,12]
                    },
                   	
                   	qrpsw: {
                   		required:true,
      					equalTo: "#password"
    				},
                    
                },

                // 自定义提示
                messages:{
                	email:{
                		required:'这是必填的'
                	},
                    phone:{
                        required:'这是必填的',
                        rangelength:'输入的号码不合法'
                    },

                    password:{
                        required:'这是必填的'
                       
                    },
                    qrpsw:{
                    	required:'密码要一致'
                    }

                    
                }
       		});
			
		});
		$('<form/>').addClass('pop_login').load('../html/pop_login.html',function(){
			$(this).insertAfter('.container');
			$('#logintop_btn').on('click',()=>{
				var $loginEmail = $('#loginEmail').val();
				var $loginPassword = $('#loginPassword').val();
				if($loginEmail===''||$loginPassword===''){
					alert('邮箱和密码不能为空')
					return false;
				}else{
					$.ajax({
						url:'../api/login.php',
						data:{
							loginEmail:$loginEmail,
							loginPassword:$loginPassword
						},
						success:function(res){
							if(res==='ok'){
								location.href='../index.html?loginEmail='+$loginEmail;
							}else{

								alert('邮箱或密码错误请重新输入');
								$(':input').val('');
							}
						}
					});
				}
				
				return false;

				
			})
		});

		
		

		// 轮播图
		$('#wrap .banner').jrCarousel({
			imgs:['../img/index/a1.jpg','../img/index/a2.jpg','../img/index/a3.jpg','../img/index/a4.jpg'],
			width:377,
			height:549,
			buttons:false,
			type:'fade'
		})

		// 移入出现DIV
		

		
		// 滚动出现吸顶
		window.onscroll=function(){
			var scrollTop = window.scrollY;
			if(scrollTop>=100){

				$('.top_bar').stop(true).show(150);;
			}else{
				$('.top_bar').stop(true).hide(150);;
			};

			if(scrollTop===0){
				$('.right_bar').css({top:126});
			}else{
				$('.right_bar').css({top:40});
			}
			

		}
		// 首页中段图片
		var $keyword= $('.container .keyword');
		
		var arr = ['../img/index/keyword_07.jpg',
		'../img/index/keyword_08.jpg',
		'../img/index/keyword_09.jpg',
		'../img/index/keyword_10.jpg',
		'../img/index/keyword_11.jpg'];
		arr.reverse();
		var keywordHtml = arr.map(function(item){
			return '<li><a href=""><img src="'+item+'"></a></li>'
		}).join('');
		$keyword.html(keywordHtml);

		// 商品列表
		$.ajax({
			url:'../api/goodslist.php',
			dataType:'json',
			success:function(res){
				
				
				var arr = res.slice(0,12);
				var goodsHtml = arr.map(function(item){
					 return `<li>
						<a href="../html/details.html?guid=${item.id}"><img src="${item.imgurl}"></a>
						<p><span>新品</span></p>
						<p><a href="">${item.details}</a></p>
						<p><a href="">${item.engDetails}</a></p>
						<p>￥${item.price}</p>
					</li>`;
				});
				$('.goodslist').html(goodsHtml);
				
				var bestArr = res.slice(0,40);
				var bestHtml = bestArr.map(function(item){
					 return `<li>
						<a href="../html/details.html?guid=${item.id}"><img src="${item.imgurl}"></a>
						<p><span>新品</span></p>
						<p><a href="">${item.details}</a></p>
						<p><a href="">${item.engDetails}</a></p>
						<p>￥${item.price}</p>
					</li>`;
				});
				$('.bestlist').html(bestHtml);

			}
		})
	})
})
