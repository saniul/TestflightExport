# gulp-clipboard
[![NPM version][npm-image]][npm-url]

> A [gulp](https://github.com/wearefractal/gulp) plugin to copy the content of your file to the clipboard 

## Usage

First, install `gulp-clipboard` as a development dependency:

```shell
npm install --save-dev gulp-clipboard
```

Then, add it to your `gulpfile.js`:

```javascript
var clipboard = require("gulp-clipboard");

gulp.src("./src/*.ext")
	.pipe(clipboard())
	.pipe(gulp.dest("./dist"));
```


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-clipboard
[npm-image]: https://badge.fury.io/js/gulp-clipboard.png

[travis-url]: http://travis-ci.org/duivvv/gulp-clipboard
[travis-image]: https://secure.travis-ci.org/duivvv/gulp-clipboard.png?branch=master

[coveralls-url]: https://coveralls.io/r/duivvv/gulp-clipboard
[coveralls-image]: https://coveralls.io/repos/duivvv/gulp-clipboard/badge.png

[depstat-url]: https://david-dm.org/duivvv/gulp-clipboard
[depstat-image]: https://david-dm.org/duivvv/gulp-clipboard.png
