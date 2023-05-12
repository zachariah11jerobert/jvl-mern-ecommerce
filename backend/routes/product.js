const express = require('express');
const { getProducts, newProducts, getSingleProduct,updateProduct, deleteProduct} = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/products/new').post(newProducts);
router.route('/product/:Id')
                            .get(getSingleProduct)
                            .put(updateProduct)
                            .delete(deleteProduct)

module.exports = router;