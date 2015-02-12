var through = require("through2"),
	copy_paste = require("copy-paste").silent()
	gutil = require("gulp-util");

module.exports = function (param) {
	"use strict";

	function clipboard(file, enc, callback) {

		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {
			return callback(uglifyError('Streaming not supported'));
		}

		if (file.isBuffer()) {
			copy(String(file.contents));
			this.push(file);
		}

		return callback();
	}

	return through.obj(clipboard);
};
