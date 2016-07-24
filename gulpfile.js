var gulp = require("gulp"),
    htmlreplace = require("gulp-html-replace"),
    source = require("vinyl-source-stream"),
    browserify = require("browserify"),
    watchify = require("watchify"),
    reactify = require("reactify"),
    // babelify = require("babelify"),
    eslintify = require("eslintify");
var path = {
    HTML: "index.html",
    LIBS: [
        "node_modules/react/dist/react.js",
        "node_modules/react-dom/dist/react-dom.js"
    ],
    ASSETS: "assets/**/*",
    OUT: "build.js",
    DEST: "dist",
    DEST_SRC: "dist/src",
    DEST_LIB: "dist/lib",
    DEST_ASSETS: "dist/assets",
    ENTRY_POINT: "src/main.jsx"
};

gulp.task("copy", function(){
    gulp.src(path.HTML).pipe(gulp.dest(path.DEST));
    gulp.src(path.LIBS).pipe(gulp.dest(path.DEST_LIB));
    gulp.src(path.ASSETS).pipe(gulp.dest(path.DEST_ASSETS));
});

gulp.task("watch", function() {
    var watcher  = watchify(browserify({
        debug: true,
        // extensions: [".jsx", ".js", ".json"],
        entries: [path.ENTRY_POINT],
        // presets: ["es2015", "react"],
        // transform: [babelify, eslintify],
        transform: [reactify, eslintify],
        cache: {}, packageCache: {}, fullPaths: true
    }));
    return watcher.on("update", function () {
        watcher.bundle()
            .pipe(source(path.OUT))
            .pipe(gulp.dest(path.DEST_SRC));
        console.log("updated");
    })
        .bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task("buildSources", function() {
    return browserify(path.ENTRY_POINT)
        .transform("babelify", {presets: ["es2015", "react"]})
        .transform("eslintify")
        .bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_SRC));
});


gulp.task("replaceHTML", function(){
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            "react": "../" + path.DEST_LIB + "/" + "react.js",
            "react-dom": "../" + path.DEST_LIB + "/" + "react-dom.js",
            "js": "../" + path.DEST_SRC + "/" + path.OUT
        }))
        .pipe(gulp.dest(path.DEST));
});

// gulp.task("default", ["watch", "copy", "replaceHTML"]);
gulp.task("default", ["buildSources", "copy", "replaceHTML"]);
