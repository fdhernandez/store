const path = require("path")
const lowdb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

class Storage {
  constructor() {
    this.path = path.resolve(__dirname, "productdata.json")
    this.setup()
  }

  async setup() {
    const adapter = new FileSync(this.path)
    this.productdata = lowdb(adapter)
    this.productdata.defaults({ purchases: [], products: [] }).write()
  }

  set(key, value) {
    return this.productdata.set(key, value)
  }

  get(key) {
    return this.productdata.get(key)
  }
}

module.exports = {
  storage: new Storage(),
}