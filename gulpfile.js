var gulp = require('gulp');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge2');
var gulpTypings = require('gulp-typings');
var webpack = require('webpack-stream');

//Typings install
gulp.task('typings', function() {
	var stream = gulp.src("typings.json")
		.pipe(gulpTypings()); //will install all typingsfiles in pipeline. =]
	return stream; 

})

// Webpack
gulp.task('ng-bundle', function(){
	 return gulp.src('client/build/index.js')
    .pipe(webpack())
    .pipe(gulp.dest('public/dist/js'));
	
});


//Client JS TypeScript Compile
gulp.task('ng-ts', function() {
	//import tsconfig for server build
	var tsProject = ts.createProject('client/tsconfig.json');
	
	var tsResult = gulp.src('client/src/**/*.ts')
	.pipe(sourcemaps.init()) 
	.pipe(ts(tsProject))
	
	return merge([
		tsResult.dts.pipe(gulp.dest('client/build/definitions')),
		tsResult.js.pipe(gulp.dest('client/build/'))
	]);
	
});

gulp.task('default', ['ng-bundle']);

