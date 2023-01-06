const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

// GET /feed/posts
router.get('/', contactsController.getAllData);
// localhost:8080/contacts/

router.get('/:id', contactsController.getDataById);
// localhost:8080/contacts/

module.exports = router;