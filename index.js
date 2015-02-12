;(function($, undefined) {

var data = artoo.scrape('.table-testers tbody tr', {
	name: function($) {
		return $(this).find('.tt-name span:first').text().trim()
	},
	email: function($) {
		return $(this).find('.tt-email span:first').text().trim()
	},
	status: function($) {
		return $(this).find('.tt-status span:first').text().trim()
	},
	latestBuild: function($) {
		return $(this).find('.tt-latest-build span:first').text().trim()
	},
	
})

artoo.saveCsv(data)

}).call(this, artoo.$);
