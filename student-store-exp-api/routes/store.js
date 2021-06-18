const express = require("express")
const Store = require("../models/store")
const router = express.Router()
const {  NotFoundError } = require("../utils/errorhandling")

router.get("/", async (req, res, next) => {
  try {
    const products = await Store.productList()
    res.status(200).json({ products })
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const cart = req.body.cart
    const userInfo = req.body.userInfo
    const purchase = await Store.buyProducts(cart, userInfo)
    res.status(200).json({ purchase, cart })
  } catch (err) {
    next(err)
  }
})

router.get("/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId
    const product = await Store.fetchId(productId)
    if (!product) {
      throw new NotFoundError("Product not found")
    }
    res.status(200).json({ product })
  } catch (err) {
    next(err)
  }
})

module.exports = router