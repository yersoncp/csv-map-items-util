var data = require("fs").readFileSync("./files/test.csv", "utf8")
data = data.split("\n")

const parsePriceValue = (price) => {
    const priceFormat = (+price.split(" ")[0]);
    return priceFormat ? `S/${priceFormat.toFixed(2)}` : null
}

const itemMap = (item) => {
    var regex = new RegExp("\"", "g");
    item = item.split('","').map(item => item.replace(regex, ''))
    return {
        image: item[4],
        url: item[5],
        name: item[6],
        regPrice: parsePriceValue(item[7]),
        salePrice: parsePriceValue(item[8]),
        brand: item[9],
        ohPrice: parsePriceValue(item[15])
    }
}

data.forEach(item => {
    item = itemMap(item)
    console.log(item)
    console.log('----------------')
})

const parseToHtml = () => {
    return `
        <a href="https://inkafarma.pe/deeplinks?product=026074"
        style="text-decoration: none; color: #000; background: #fff; display: inline-block; margin: 10px 5px; border-radius: 10px; padding: 10px; min-height: 280px;">
            <div style="padding: 5px;">
                <img src="https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/026074M.jpg" alt="" style="max-width: 100%;">
            </div>
            <div style="font-size: 11px; color: #444;">
                Huggies
            </div>
            <div style="font-size: 12px; margin-bottom: 10px; line-height: 18px;"><b>
                Pañales Huggies XXG Bigpack Natural Care Puro y Natural - Bolsa 68 UN
            </b></div>

            <table width="100%">
                <tr>
                    <td>
                        <div style="font-size: 12px; color: #444; text-decoration: line-through;">
                            S/64.80
                        </div>
                        <div style="font-size: 13px; color: #000; font-weight: bold;">
                            S/60.90
                        </div>
                        
                    </td>
                    <td style="text-align: right;">
                        <img src="https://performance-mailing.s3.amazonaws.com/Mifarma/MAIL/2021/OCT/TOH/oh.jpg" width="32">
                        <div style="font-size: 13px; color: #000; font-weight: bold;">
                            S/55.90
                        </div>
                    </td>
                </tr>
            </table>
        </a>
    `;
}
