/**
 * DebugController
 *
 * @description :: Server-side logic for managing Debugs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	test: function (req, res) {
		let query = req.param('id');
		ScraperService.searchAhorro(query, data => {
			return res.json(data);
		});
	}

};
