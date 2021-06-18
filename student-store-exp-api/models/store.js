const {storage} = require("../data/storage")
const { BadRequestError } = require("../utils/errorhandling")

class Store {
    static async productList() {
      const productsStore = storage.get("products").value()
      return productsStore
    }

    static async buyProducts(cart, userInfo) {
        if (!cart) {
            throw new BadRequestError(`No cart was found.`)
        }
        if (!userInfo) {
            throw new BadRequestError(`There is no user info found.`)
        }
        const products = storage.get("products").value()
        const total = Store.calculateTotal(cart, products)

        const bill = Store.getBill({cart, total, products, userInfo})

        const purchase ={
            name: userInfo.name,
            email: userInfo.email,
            total,
            bill,
        }
        
        storage.get("purchases").push(purchase).write()
        return purchase;
    }


    static createBill({cart, total, products, userInfo}) {
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