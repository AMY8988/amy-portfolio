const { src , watch , dest , series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function builtStyle(){
    return src("sass/**/*.scss").pipe(sass()).pipe(dest("css/"));
}

function watchTask(){
    watch(["sass/**/*.scss"] , builtStyle );
}

exports.default = series(  builtStyle  , watchTask  );