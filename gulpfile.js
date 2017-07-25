const gulp = require('gulp');
const sass = require('gulp-sass');
const sequence = require('gulp-sequence');
const cssmin = require('gulp-minify-css');
const browserSync = require('browser-sync').create();
const del = require('del');
const rigger = require('gulp-rigger');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const gulpCopy = require('gulp-copy');


gulp.task('html', () =>
   gulp.src('./*.html')
    .pipe(rigger())
    .pipe(gulp.dest('Project/'))
);

gulp.task('html-watch', ['html'], (done) => {
  browserSync.reload();
  done();
});


gulp.task('js', () =>
  gulp.src('./js/*.js')
    .pipe(rigger())
    .pipe(uglify())
    .pipe(gulp.dest('Project/js/'))
);

gulp.task('js-watch', ['js'], (done) => {
  browserSync.reload();
  done();
});

gulp.task('style', () =>
  gulp.src('css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('Project/css/'))
);

gulp.task('style-watch', ['style'], (done) => {
  browserSync.reload();
  done();
});

gulp.task('sass', () => 
    gulp.src("./css/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("Project/css/"))
);

gulp.task("sass-watch", ['sass'], (done) => {
    browserSync.reload();
  done();
});

gulp.task('image', () =>
  gulp.src('./images/**/*.*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest('./Project/images/'))
);

gulp.task('image-watch', ['image'], (done) => {
  browserSync.reload();
  done();
});


gulp.task('font', () => {
     gulp
      .src('fonts/*.*')
      .pipe(gulp.dest('Project/fonts/'));
});
gulp.task('font-watch', ['font'], (done) => {
  browserSync.reload();
  done();
});




gulp.task('clean', () => del('Project/'));

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: 'Project/'
    }
  });
  gulp.watch('./*.html', ['html-watch']);
  gulp.watch('./js/*.*', ['js-watch']);
  gulp.watch('./css/*.css', ['style-watch']);
  gulp.watch('./css/*.scss', ['sass-watch']);
  gulp.watch('./images/**/*.*', ['image-watch']);
  gulp.watch('./fonts/*.*', ['font-watch']);
});



gulp.task('build', sequence('clean', ['html','js','style','sass','image','font','serve']));