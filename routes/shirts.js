var express = require('express');
var router = express.Router();
var prismic = require('prismic.io');

/* GET home page. */
router.get('/', function(req, res, next) {
  prismic.api("https://tiny-shirt-co.prismic.io/api").then(function(api) {
    return api.query(prismic.Predicates.at("document.type", "product"));
  }).then(function(response) {
    let shirtData = {
      url: response.results[0].data['product.image'].value.main.url,
      title: response.results[0].data['product.title'].value[0].text,
      description: response.results[0].data['product.description'].value[0].text,
    }
    res.render('shirts', { data: shirtData });
  }, function(err) {
    console.log("Something went wrong: ", err);
  });
});

module.exports = router;
