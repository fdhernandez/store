const express = require("express")
const Store = require("../models/store")
const router = express.Router()
const {  NotFoundError } = require("../utils/errorhandling")
const {createBill} = require.("../models/store")

router.get("/", async (req, res, next) => {
  try {
    const list = await Store.productList()
    res.status(200).json({ products: list })
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const cart = req.body.cart
    const userInfo = req.body.userInfo
    const bill = await Store.createBill(cart, userInfo)
    res.status(200).json(bill)
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

router.post("/newItem", async (req, res, next) => {
  try {
    const product = req.body.product
    const newProduct = await Store.createProduct(product)
    res.status(201).json(newProduct)
  } catch (err) {
    next(err)
  }
})

module.exports = router