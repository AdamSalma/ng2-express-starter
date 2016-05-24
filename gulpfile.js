var gulp = require('gulp');
var concat = require('gulp-concat');

var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge2');
var gulpTypings = require('gulp-typings');


//Typings install
gulp.task('typings', function() {
	var stream = gulp.src("./typings.json")
		.pipe(gulpTypings()); //will install all typingsfiles in pipeline. 
	return stream; // by returning stream gulp can listen to events from the stream and knows when it is finished
})

//Node JS TypeScript Compile
gulp.task('node-ts', function() {
	//import tsconfig for server build
	var tsProject = ts.createProject('server/tsconfig.json');
	
	var tsResult = gulp.src('server/src/**/*.ts')
	.pipe(sourcemaps.init()) 
	.pipe(ts(tsProject))
	
	return merge([
		tsResult.dts.pipe(gulp.dest('server/build/definitions')),
		tsResult.js.pipe(gulp.dest('server/build/'))
	]);
	
	
});



gulp.task('default', ['node-ts']);

