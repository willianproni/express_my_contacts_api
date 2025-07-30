const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');
const CategoriesController = require('./app/controllers/CategoriesController');

const router = Router();

//Contacts
router.get(
  '/contacts',
  (req, res, next) => {
    req.appId = 'middlewares';

    next();
  },
  ContactController.index
);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

//Categories
router.get('/categories', CategoriesController.index);
router.get('/categories', CategoriesController.store);
module.exports = router;
