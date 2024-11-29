const express = require("express")
const { getAllProducts, addProducts, updateProducts, deleteProducts } = require("../controllers/productControllers")
const router = express.Router()


router.get("/allProducts",getAllProducts)
router.post("/product",addProducts)
router.put("/product/:id",updateProducts)
router.delete("/product/:id",deleteProducts)

module.exports=router;