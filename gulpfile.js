//вызов gulp
const { src, dest, task, series, watch, parallel } = require("gulp");
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
//svg sprite
const svgo = require("gulp-svgo");
const svgSprite = require("gulp-svg-sprite");
// prod vs dev
const gulpif = require("gulp-if");

const env = process.env.NODE_ENV;

// config
const { SRC_PATH, DIST_PATH, STYLE_LIBS, JS_LIBS } = require("./gulp.config");

//таск удаления
task("clean", () => {
  return src(`${DIST_PATH}/**/*`, { read: false }).pipe(rm());
});

//таск копирования
task("copy:html", () => {
  return src(`${SRC_PATH}/*.html`)
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
});

task("copy:fonts", () => {
  return src(`${SRC_PATH}/**/*.ttf`)
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
});

const images = [
  `${SRC_PATH}/**/*.png`,
  `${SRC_PATH}/**/*.jpg`,
  `${SRC_PATH}/**/*.svg`,
  `${SRC_PATH}/**/*.webp`,
];

task("copy:img", () => {
  return src(images)
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
});

task("copy:video", () => {
  return src(`${SRC_PATH}/**/*.mp4`)
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
});

//массив для склейки файлов стилей
const styles = [
  /* "node_modules/" */
  `${SRC_PATH}/style/main.scss`,
];

//таск компиляции из scss в css
task("styles", () => {
  return (
    src(styles)
      .pipe(gulpif(env == "dev", sourcemaps.init()))
      .pipe(concat("main.min.scss"))
      .pipe(sassGlob())
      .pipe(sass().on("error", sass.logError))
      /* .pipe(px2rem()) */
      .pipe(
        gulpif(
          env == "dev",
          autoprefixer({
            overrideBrowserslist: ["last 2 versions"],
            cascade: false,
          })
        )
      )
      .pipe(gulpif(env == "prod", gcmq()))

      .pipe(gulpif(env == "prod", cleanCSS()))
      .pipe(gulpif(env == "dev", sourcemaps.write()))
      .pipe(dest(DIST_PATH))
      .pipe(reload({ stream: true }))
  );
});

//таск dev-server
task("server", function () {
  browserSync.init({
    server: {
      baseDir: `./${DIST_PATH}`,
    },
  });
});

task("scripts", () => {
  return src([
    ...JS_LIBS,
    `${SRC_PATH}/js/*.js`
  ])
    .pipe(gulpif(env == "dev", sourcemaps.init()))
    .pipe(concat("main.min.js"))
    .pipe(gulpif(env == "prod", babel({ presets: ["@babel/env"] })))
    .pipe(gulpif(env == "prod", uglify()))
    .pipe(gulpif(env == "dev", sourcemaps.write()))
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
});

task("watch", () => {
  //слежка за изменениями стилей
  watch(`${SRC_PATH}/style/**/*.scss`, series("styles"));
  //слежка за изменениями html
  watch(`${SRC_PATH}/*.html`, series("copy:html"));
  //слежка за изменениями js
  watch(`${SRC_PATH}/js/*.js`, series("scripts"));

  watch(`${SRC_PATH}/**/*.ttf`, series("copy:fonts"));

  watch(images, series("copy:img"));

  watch(`${SRC_PATH}/**/*.mp4`, series("copy:video"));
});

//таск запускающийся по-умолчанию
task(
  "default",
  series(
    "clean",
    parallel(
      "copy:img",
      "copy:video",
      "copy:html",
      "copy:fonts",
      "styles",
      "scripts"
    ),
    parallel("watch", "server")
  )
);

task(
  "build",
  series(
    "clean",
    parallel(
      "copy:img",
      "copy:video",
      "copy:html",
      "copy:fonts",
      "styles",
      "scripts"
    )
  )
);
