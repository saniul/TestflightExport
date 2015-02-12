# Testflight Export Bookmarklet
##How to use

* Copy contents of the [bookmarklet](https://github.com/saniul/TestflightExport/raw/master/build/testflightexport.bookmark.js)
* Go to http://chriszarate.github.io/bookmarkleter/, paste the code and drag out the bookmarklet into your bookmarks bar. You can rename it to whatever you want.
* Go to iTunes Connect/My Apps/$(APPLICATION)/Prerelease/External Testers (the URL is https://itunesconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/app/$(APPLICATION_ID_GOES_HERE)/pre/testers/beta )
* Click the bookmarklet


##What about the repo?

The structure of this repo was based on the [example artoo.js Hacker News Bookmarklet gist](https://gist.github.com/Yomguithereal/5d792d88ad6f1fe7c15d). All it does is it packages up [index.js](https://github.com/saniul/TestflightExport/blob/master/index.js) and its dependencies into js that can be used in a bookmarklet.
