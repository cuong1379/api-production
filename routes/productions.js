const express = require('express')
const router = express.Router()

const {createProduction, getAllProduction, getSingleProduction, updateProduction, deleteProduction} = require('../controllers/production')
  
router.post('/', createProduction);
router.get('/', getAllProduction);
router.get('/:id', getSingleProduction);
router.put('/:id', updateProduction);
router.delete('/:id', deleteProduction);

module.exports = router