const { itemMap, parseToString } = require("./src/mapper")

// let data = require("fs").readFileSync("./files/test.csv", "utf8")
const fs = require("fs")
let data = fs.readFileSync("./files/catalogue.csv", "utf8")
data = data.split("\n")
const sku = ["026074", "034974"]
let items = []

data.forEach((item, i) => {
    if (i > 0) {
        const d = itemMap(item);
        sku.includes(d.id) && items.push(d)
    }
})

const response = items.map(item => parseToString(item))
console.log(`Items procesados ${items.length}`)
fs.writeFileSync('out/export.html',response.join(""));