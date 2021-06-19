const {storage} = require("../data/storage")
const { BadRequestError } = require("../utils/errorhandling")

class Store {
    static async productList() {
      const productsStore = storage.get("products").value()
      return productsStore
    }

    static async createBill(cart, userInfo) {
        if (!cart) {
            throw new BadRequestError(`No cart was found.`)
        }
        if (!userInfo) {
            throw new BadRequestError(`There is no user info found.`)
        }
        const products = storage.get("products").value()
        var buyProducts = []
        var total = 0

        for (const [key,value] of Object.entries(cart)) {
            products.forEach((item, index) => {
                if (item.name==key) {
                    buyProducts.push(item)
                    total += (item.price * value)
                } else {
                    if (index == products.length) {
                        return new BadRequestError(`No ${key} in the store`)
                    }
                }
                
            })
        }
        total = priceFormat(total)
        const newPurchase = { name: userInfo.name, 
        email: userInfo.email,
        total: total, 
        bill : {userInfo: userInfo}, 
        productRows: buyProducts
        }
        storage.get("orders").push(newPurchase).write()
        return newPurchase;
    }

    static async createProduct(product) {
        if (!product) {
            throw new BadRequestError('No product created!')
        }
        const fieldsReq = ["name", "category", "image", "source", "description", "price"]
        fieldsReq.forEach((field) => {
            if (!product[field] && product[field] !== 0) {
                throw new BadRequestError(`You need to include ${field}`)
            }
        })
        const products = await Store.productList()
        const productId = products.length + 1
        const newProduct = { id : productId, ...product}
        storage.get("products").push(newProduct).write()
        return newProduct

    }
   /*  static createBill({cart, total, products, userInfo}) {
        const productMap = products.reduce((acc, item) => {
            acc[item.name] = item
            return acc
        }, {})

        const productRows = Object.keys(cart).map((productName) => {
            const product = productMap[productName]
        
            return {
                ...product,
                quantity: cart[productName],
                priceTotal: cart[productName] * product.price,
            }
        })

        const billFormat = [
            `This is your receipt  for ${userInfo.name}, sent to ${userInfo.email}:`,
            `\n\n`,
            ...productRows.map (
            (product) => 
                `${product.quantity} total ${product.name} with a cost of ${priceFormat(product.price)}
                with a total cost of ${priceFormat(product.priceTotal)}`
            ),
            `Your total for today is ${total}`,  
        ]
        return {
            userInfo,
            lines: billFormat,
            productRows,
        }
    } 
    */

    static async fetchId(productId) {
        const product = storage
            .get("products")
            .find({id: Number(productId)})
            .value()
        return product
    }
}

const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  
 const priceFormat = (amount) => {
    return `$${formatter.format(amount)}`
  }

module.exports = Store