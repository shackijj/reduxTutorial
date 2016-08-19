import gulp from "gulp";
import gutil from "gulp-util";
import browserify from "browserify";
import source from "vinyl-source-stream";
import watchify from "watchify";
import browserSync from "browser-sync";
import eslint from "gulp-eslint";
import mocha from "gulp-mocha";

watchify.args.debug = true;

const sync = browserSync.create();

var bundler = browserify("src/app.js");
bundler.transform('babelify');

function bundle() {
    return bundler.bundle()
        .on('error', function(error) {
            console.log("\nError: ", error.message, "\n");
            this.emit('end');
        })
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist"));
}

function updateBrowser() {
    console.log("Update browser");
    sync.reload();
}

gulp.task('mocha', function() {
    return gulp.src(['tests/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', function() {
            gutil.log();
            this.emit("end")
        });
});

gulp.task('transpile', ['lint', 'mocha'], () => bundle());

gulp.task('lint', () => {
    return gulp.src(['src/**/*.js', 'gulpfile.babel.js'])
      .pipe(eslint())
      .pipe(eslint.format())
});

gulp.task('default', ['transpile']);

gulp.task('js-watch', ['transpile'], () => updateBrowser());

gulp.task('serve', ['transpile'], () => sync.init({
    server: 'dist',
    port: process.env.PORT || 8000,
    host: process.env.IP || 'localhost'
}));

gulp.task('watch', ['serve'], () => {
    gulp.watch('src/**/*', ['js-watch'])
    gulp.watch('tests/**/*', ['js-watch'])
});                          
