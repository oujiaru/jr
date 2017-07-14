// 配置
// 依赖
require.config({
	// baseUrl:''
	urlArgs:'v='+Date.now(),
	paths:{
		jquery:'../lib/jquery3.1.1',
		gdszoom:'../lib/jquery-gdsZoom/jquery.gdsZoom',
		jrCarousel:'../lib/jquery-jrCarousel/jquery.jrCarousel',
		validate:'../lib/jquery-validate/jquery.validate',
		common:'common'
	},
	shim:{
		// gdszoom依赖jquery
		gdszoom:['jquery'],
		jrCarousel:['jquery'],
		validate:['jquery']
	}
});