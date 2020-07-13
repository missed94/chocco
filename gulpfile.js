//вызов gulp
const { src, dest, task, series, watch } = require("gulp");
//вызов плагина удаления
const rm = require("gulp-rm");
//вызов плагина компилятора препроцессора sass
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
//вызов плагина для склейки файлов
const concat = require("gulp-concat");
//вызов dev-server
const browserSync = require("browser-sync").create();
//конфиг автообновления браузера при изменениях
const reload = browserSync.reload;
//продвинутая склейка файлов
const sassGlob = require("gulp-sass-glob");
//автопрефиксер для разных браузеров
const autoprefixer = require("gulp-autoprefixer");
//px to rem
const px2rem = require("gulp-smile-px2rem");
//группировка медиа
const gcmq = require("gulp-group-css-media-queries");
// минификация css
const cleanCSS = require("gulp-clean-css");
//sourcemaps
const sourcemaps = require("gulp-sourcemaps");
//трансляция ES6
const babel = require("gulp-babel");
//min js
const uglify = require("gulp-uglify");

//таск удаления
task("clean", () => {
  return src("dist/**/*", { read: false }).pipe(rm());
});

//таск копирования
task("copy:html", () => {
  return src("src/*.html")
    .pipe(dest("dist"))
    .pipe(reload({ stream: true }));
});

//массив для склейки файлов стилей
const styles = [
  /* "node_modules/" */
  "src/style/main.scss"
];

//таск компиляции из scss в css
task("styles", () => {
  return (
    src(styles)
      .pipe(sourcemaps.init())
      .pipe(concat("main.min.scss"))
      .pipe(sassGlob())
      .pipe(sass().on("error", sass.logError))
      /* .pipe(px2rem()) */
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 2 versions"],
          cascade: false,
        })
      )
      .pipe(gcmq())
      .pipe(cleanCSS())
      .pipe(sourcemaps.write())
      .pipe(dest("dist"))
      .pipe(reload({ stream: true }))
  );
});

//таск dev-server
task("server", function () {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
});

const libs = [
  "node_modules/jquery/dist/jquery.js",
  "src/js/*.js"
]

task("scripts", () => {
  return src(libs)
    .pipe(sourcemaps.init())
    .pipe(concat("main.min.js"))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest("dist"))
    .pipe(reload({ stream: true }));
});

//слежка за изменениями стилей
watch("src/style/**/*.scss", series("styles"));
//слежка за изменениями html
watch("src/*.html", series("copy:html"));
//слежка за изменениями js
watch("src/js/*.js", series("scripts"));
//таск запускающийся по-умолчанию
task("default", series("clean", "copy:html", "styles", "scripts", "server"));
