const gulp = require('gulp');

const sass = require('gulp-sass');

const autoprefixer = require('gulp-autoprefixer');    

const browserSync = require('browser-sync').create();


function css(){

   return gulp
      .src('scss/app.scss')

       .pipe( autoprefixer())

       .pipe(sass({ outputStyle : 'expanded'})) // nested, compact , expanded , compressed

       .pipe( gulp.dest('css'))


         //browserSync

        .pipe(browserSync.stream());

}








function watchArchivo()
{
  
  browserSync.init(
   {

    server : {baseDir: './'}

   }

  ) 

    
   gulp.watch('scss/*.scss', css);
   gulp.watch('*.html').on('change', browserSync.reload);
   gulp.watch('js/*.js').on('change', browserSync.reload);
}


//tareas

gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchArchivo));



