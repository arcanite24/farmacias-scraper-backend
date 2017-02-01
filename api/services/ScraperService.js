const cheerio = require('cheerio');
const request = require('request');

module.exports = {

  searchAhorro: function (query, cb) {
    let url = 'http://www.fahorro.com/catalogsearch/result/?q=';
    request(url + query, (err, res, html) => {
      if (err) {
        cb({err: err});
      }
      let $ = cheerio.load(html);
      let final = {
        lista: []
      };
      $('li.item').each((i, el) => {
        let name = $(el).find('h2.product-name').children('a').text();
        let price = $(el).find('.price-box').find('.price').text();
        final.lista.push({
          name: name,
          price: price
        });
      });
      cb(final);
    });
  }

};
