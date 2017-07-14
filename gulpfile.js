// nodejs引入模块规范
// commonjs规范(同步)
var gulp = require('gulp');

// 创建任务
// 引入sass
var sass = require('gulp-sass');
gulp.task('jrsass',function(){
	// 匹配sass文件
	gulp.src('./src/sass/*.scss')

		// 管道执行文档流 处理编译
		.pipe(sass({outputStyle:'expanded'})//nested expanded compact compressed
		.on('error', sass.logError))//如有错误不会停止监听
		// 输出
		.pipe(gulp.dest('./src/css/'))
})

// 监听文件自动编译
gulp.task('jtsass',function(){
	gulp.watch('./src/**/*.scss',['jrsass'])
})

// 压缩js
// 合并js
// var uglify = require('gulp-uglify');
// var concat = require('gulp-concat');
// var rename = require('gulp-rename');
// gulp.task('hebingjs',function(){
	// 查找js
	// gulp.src('./src/js/*.js')

	// 合并js
	// .pipe(concat({ path: 'all.js',newLine: ';'}))

	// 输出合并文件
	// .pipe(gulp.dest('./dist/js/'))

	// 压缩
	// .pipe(uglify())

	// 重命名
	// .pipe(rename({
		// suffix:".min",//添加后缀名
	// }))

	// 输出压缩后的文件
	// .pipe(gulp.dest('./dist/js/'))
// });



// 浏览器同步
var browserSync =require('browser-sync');
gulp.task('myserver',function(){
	browserSync({
		// server:'./src/',
		// 代理服务器
		proxy:'http://localhost:1086',

		// 端口
		port:1087,
		files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
	});

	gulp.watch('./src/**/*.scss',['jrsass']);
});
