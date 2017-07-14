require(['config'],function(){
	require(['jquery','gdszoom','validate','common'],function($,gdszoom){

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
			// 跳转到购物车
			$('#shopcar').on('click',function(e){
				e.preventDefault();
				location.href="../html/shopcar.html"
			})


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
		var guid = location.search.slice(6);
		
		$.ajax({
			url:'../api/details.php',
			dataType:'json',
			data:{
				guid:guid
			},
			success:function(res){
				var temp = res[0];
				
				$('.goodsNav').children().eq(1).html(temp.mold).next().html(temp.details);

				var $good_detail = $('<div/>').addClass('good_detail');
				
				var	detailH = `<div class="goods_title clearfix">
								<strong>${temp.engDetails}</strong>
								<div class="goods_cntitle clearfix">
									<h1>${temp.details}</h1><span class="icon_new">新品</span>
				                </div>
							</div>
							<div class="vip_price">
								钻石会员 ¥${Math.floor(temp.price*0.92)} / 宝石会员 ¥${Math.floor(temp.price*0.94)} / 翡翠会员 ¥${Math.floor(temp.price*0.96)} / 水晶会员 ¥${Math.floor(temp.price*0.98)}<a href="" target="_blank">查看会员规则</a>
	      					</div>
	      					<div class="clearfix">
				            	<div class="sell_title">售价：</div>
				                <div class="sell_content">

				                ¥ ${temp.price} <span class="emoney">（积分 ¥ 1）</span>
				                </div>
            				</div>
            				<div class="clearfix">
				            	<div class="sell_title">颜色：</div>
				                <div class="sell_content">
				                	<select name="gcolor" id="gcolor">
										<option value="No" selected="">请选择颜色</option>
				 						<option value="象牙白">象牙白</option>
				 						<option value="墨绿色">墨绿色</option>
				 						<option value="深红色">深红色</option>
				 						<option value="黑">黑色</option>
				            		</select>
				            	</div>
            				</div>
            				<div class="clearfix">
				            	<div class="sell_title">尺寸：</div>
				                <div class="sell_content">
				                	<select name="gsize" id="gsize">
										<option value="No" selected="">请选择尺寸</option>
										<option value="ONE SIZE">ONE</option>
				                	</select>
				            	</div>
            				</div>
            				<div class="Gqty clearfix">
            					<div class="sell_title">数量：</div>
                				<div class="sell_content">
									<input name="Gqty" id="Gqty" type="text"   value="1">
									<span class="reduce">-</span>
									<span class="plus">+</span>
                				</div>
            				</div>
            				<div class="good_buy clearfix">
                				<span class="myzzim_btn"  id="buy_myzzim_btn">放入暂存架</span>
                				<span class="cart_btn"  id="buy_cart_btn">加入购物车</span>
            				</div>`;
            	$good_detail.html(detailH);
            	$('.goodsMsg').append($good_detail);

            	var res = `<img src="${temp.imgurl}" data-big="${temp.imgurl}">`

            	$('.demo').html(res);
            	console.log($('.demo'));
            	$('.demo').gdsZoom({
            		width:300,
            		height:300
            	});

            	// 添加到购物车效果
				var $img = $('.demo').children('img');
				$('#buy_cart_btn').click(function(){
					var $cloneImg = $img.clone();
					$cloneImg.css({
						position:'absolute',
						left:$img.offset().left,
						top:$img.offset().top,
						width:$img.outerWidth(),
						height:$img.outerHeight(),
					}).appendTo('body');

					$cloneImg.animate({
						left:$('#shopcar').offset().left,
		                top:$('#shopcar').offset().top + $('#shopcar').outerHeight(),
		                width:10,
		                height:10
					},function(){
						$cloneImg.remove();
					});
				});

            	var _Gqty = Number($('#Gqty').val());
            	// 加
            	$('.plus').on('click',function(){
            		
            		_Gqty++;
            		$('#Gqty').val(_Gqty);
            		
            	});
            	// 减
            	$('.reduce').on('click',function(){		
            		_Gqty--;
            		if(_Gqty<1){
            			_Gqty=1
            		}
            		$('#Gqty').val(_Gqty);
            		
            	});


            	var goodsCookie = getCookie('goodsCookie');
				goodsCookie=goodsCookie.length>0?JSON.parse(goodsCookie):[];

				$('.header #shopnum').html(goodsCookie.length);

            	// 点击加入购物
            	$('#buy_cart_btn').on('click',function(){
            		
            		var res = goodsCookie.filter(function(item){
						
						return item.guid ===temp.id
					});
					
					if(res.length>0){
						res[0].qty++;
					}else{
						var goodsLi = {
	            			guid:temp.id,
							imgurl:temp.imgurl,
							title:temp.engDetails,
							price:temp.price,
							color:$('#gcolor').val(),
							size:$('#gsize').val(),
							qty:$('#Gqty').val()
            			}
            			goodsCookie.push(goodsLi);
					}
            		
            		setCookie('goodsCookie',JSON.stringify(goodsCookie));


            		var $shoplist =$('<div/>').addClass('shoplist').show();
            		
            		$('.pop_Alpha').show().on('click',()=>{
            			$shoplist.hide();
            			$('.pop_Alpha').hide();
            		})
            		var shoplistH = `<p>商品已经成功加入购物车</p>
            						<p>${temp.engDetails}<br>${temp.details}</p>
            						<p>颜色:${$('#gcolor').val()}/尺寸:${$('#gsize').val()}/数量:${$('#Gqty').val()}</p>
            						<div>
            						<a href="" class="cancel_btn">返回</a>
            						<a href="../html/shopcar.html" class="goodsBuy_btn">去结算</a>
            						</div>`;
            		$shoplist.html(shoplistH);
            		$('.container').append($shoplist);
            		$('.cancel_btn').on('click',function(){
            			$shoplist.hide();
            			$('.pop_Alpha').hide();
            			return false;
            		})

            	});

			}
		});
		
		
	});
});
