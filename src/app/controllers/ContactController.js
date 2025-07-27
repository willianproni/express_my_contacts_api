class ContactController {
  index(req, res) {
    res.send('Send from contact controller');
  }

  // show() {}

  // store() {}

  // update() {}

  // delete() {}
}

// Singleton
module.exports = new ContactController();
