const gulp = require('gulp');
const sass = require('gulp-sass');

const autoprefixer = require('gulp-autoprefixer');


function css(){

  return gulp
     .src('scss/app.scss')

      .pipe( autoprefixer())

      .pipe(sass({ outputStyle : 'expanded'})) // nested, compact , expanded , compressed

      .pipe( gulp.dest('css'))




}



function watchArchivo()
{
   gulp.watch('scss/*.scss', css);
   gulp.watch('app/*.html');
   
}


//tareas

gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchArchivo));