const { watch, series, src, dest } = require("gulp")
const browserSync = require("browser-sync").create()
const concat = require("gulp-concat")

function scripts(done) {
				src("./src/js/*.js")
								.pipe(concat("app.js"))
								.pipe(dest("./dist/"))
				done()
}

function html(done) {
				src("./src/index.html")
								.pipe(dest("./dist/"))
				done()
}

function reload_browsers(done) {
				browserSync.reload()
				done()
}

function sync(done) {
				browserSync.init({
								server: {
												baseDir: "./dist/"
								}
				})
				watch("./src/*.html", series(html, reload_browsers))
				watch("./src/js/*.js", series(scripts, reload_browsers))
				done()
}

exports.default = series(html, scripts, sync)
exports.build = series(html, scripts)
