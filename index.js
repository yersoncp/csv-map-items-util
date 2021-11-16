const { itemMap, parseToString } = require("./src/mapper")

let data = require("fs").readFileSync("./files/test.csv", "utf8")
data = data.split("\n")

const sku = ["026074", "034974"]
let items = []

data.forEach(item => {
    const d = itemMap(item);
    sku.includes(d.id) && items.push(d)
})

const response = parseToString(items[0])
console.log(response)