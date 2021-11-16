const fs = require("fs")
const { itemMap, parseToString } = require("./src/mapper")

// let data = require("fs").readFileSync("./files/test.csv", "utf8")
let data = fs.readFileSync("./files/catalogue.csv", "utf8")
data = data.split("\n")
const sku = [
    "026074",
    "034974",
    "025868",
    "023807",
    "029551",
    "035494",
    "014955",
    "034573",
    "023956",
    "023100",
    "032685",
    "034640",
    "029884",
    "034567",
    "028875",
    "033431",
    "424158",
    "019940",
    "427244",
    "002916",
    "006433",
    "019204",
    "032741",
    "023088"
]
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