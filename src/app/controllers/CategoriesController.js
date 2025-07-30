class CategoriesController {
  index(req, res) {
    res.send('ok - index');
  }

  store(req, res) {
    res.send('ok - store');
  }
}

module.exports = new CategoriesController();
