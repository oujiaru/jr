require(['config'],function(){
	require(['jquery','validate','common'],function($){

		// 获取cookie
		var goodsCookie = getCookie('goodsCookie');
		goodsCookie=goodsCookie.length>0? JSON.parse(goodsCookie):[];

		// 引入html
		$('<div/>').addClass('header').load('../html/header.html',function(){
			$(this).insertBefore('.container')
			// 注册
			$('#reg_btn').on('click',function(e){
				
				$('.pop_reg').stop().show(100);
				e.preventDefault();
				$('.pop_Alpha').show().on('click',function(){
					$('.pop_reg').stop().hide(100);
					$('.pop_Alpha').stop().hide(100);
				});
				$('.closetop_btn').on('click',function(){
					$('.pop_reg').stop().hide(100);
					$('.pop_Alpha').stop().hide(100);
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

			$('.header #shopnum').html(goodsCookie.length);
		});

		$('<div/>').addClass('footer').load('../html/footer.html',function(){
			$(this).insertAfter('.footer_img')
		});

		$('<div/>').addClass('left_bar').load('../html/left_bar.html',function(){
			$(this).insertBefore('.container');
			
			$('.left_bar').css({height:$('.container').height()});
		});

		$('<div/>').addClass('top_bar').load('../html/top_bar.html',function(){
			$(this).insertBefore('.container')

			$('.top_bar').on('click','a',function(e){
				e.preventDefault();
				
				location.href='list.html';
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

							if(res === 'ok'){
								alert('恭喜您注册成功，赶紧登陆抢购吧！');
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
				return false;
			})
		});


		
		// 滚动出现吸顶
		window.onscroll=function(){
			var scrollTop = window.scrollY;
			if(scrollTop>=100){

				$('.top_bar').stop(true).show(150);
			}else{
				$('.top_bar').stop(true).hide(150);
			};

			if(scrollTop===0){
				$('.right_bar').css({top:126});
			}else{
				$('.right_bar').css({top:40});
			}
			

		}

		
		
		$('.header #shopnum').html(goodsCookie.length);

		var $ul = $('<ul/>').addClass('goodsUl')
		var total = 0;
		var res = goodsCookie.map(function(item){
			total+=item.price*item.qty;
			return `<li class="clearfix" data-guid="${item.guid}">
			<div class="goodsDetail">
				<input type="checkbox" id="radio_btn" class="radio_btn" name="radio_btn" checked>
				<img class="goodsImg" src="${item.imgurl}">
				<span>${item.title}<br>${item.color}/${item.size}</span>
				<i class="del_btn">&times;</i>
			</div>
			<div class="goodsPrice">￥${item.price}</div>
			<div class="goodsEmoney">￥1</div>
			<div class="goodsQty"><span class="reduce">-</span><input type="text" class="goods_qty" value="${item.qty}"><span class="plus">+</span></div>
			<div class="goodsSum">￥${item.price*item.qty}</div>
			</li>`
		}).join('');
		$ul.html(res);
		$('.goodsList').html($ul);

		// 总价
		var totalHtml = `<div class="allCheckBox"><input type="checkbox" id="allCheck" name="allCheck" checked><label for="allCheck">全选</label></div>
		<p class="shop_totalBox">商品总额 <span class="shop_total">￥${total}</span></p>`

		$('.goodsTotal').html(totalHtml);
		
		
		// 加
		$('li').on('click','.plus',function(){
			var res = $(this).siblings(':input').val();
			res++;
			$(this).siblings(':input').val(res);

			var dqprice = Number($(this).parent().siblings('.goodsPrice').html().slice(1));
			var dqSum = $(this).parent().siblings('.goodsSum').html('￥'+dqprice*res);
			
			var Sumtotal = 0;
			$('.goodsSum').each(function(idx,item){
				Sumtotal+=Number($(item).html().slice(1))
				
			})
    		$('.shop_total').html('￥'+Sumtotal);
    	});

		var $price = $('.goodsPrice');
		// 减
    	$('li').on('click','.reduce',function(){
    		var res = $(this).siblings(':input').val();
			res--;
			if(res<1){
				res=1;
			}
			$(this).siblings(':input').val(res);

			var dqprice = Number($(this).parent().siblings('.goodsPrice').html().slice(1));
			var dqSum = $(this).parent().siblings('.goodsSum').html('￥'+dqprice*res);
			$price.each(function(idx,item){
				var con = $price.html().slice(1)*$('.goods_qty').val();
				$('.goods_qty').val(con)
				
			})
			
    	});

    	// 删除
    	$('li').on('click','.del_btn',function(){
    		var liGuid = $(this).parent().parent().attr('data-guid');
    		goodsCookie.forEach(function(item,idx){
    			if(item.guid === liGuid){
					goodsCookie.splice(idx,1)

					
					setCookie('goodsCookie',JSON.stringify(goodsCookie))
					// 更新价格
					total-=item.price*item.qty;
					$('.shop_total').html('￥'+total);
				}
    		})

    		$(this).parent().parent().remove();
    	})


    	// 全选
    	$('#allCheck').click(function(){
			$('li').find(':checkbox').prop('checked',$('#allCheck').prop('checked'));
		})


	})
})
