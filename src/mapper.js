exports.parsePriceValue = (price) => {
    if (!price) return null;
    const priceFormat = (+price.split(" ")[0]);
    return priceFormat ? `S/${priceFormat.toFixed(2)}` : null
}

exports.itemMap = (item) => {
    var regex = new RegExp("\"", "g");
    item = item.split('","').map(item => item.replace(regex, ''))
    return {
        id: item[0],
        image: item[4],
        url: item[5],
        name: item[6],
        regPrice: this.parsePriceValue(item[7]),
        salePrice: this.parsePriceValue(item[8]),
        brand: item[9],
        ohPrice: this.parsePriceValue(item[15])
    }
}

exports.parseToString = (item) => {
    return `
        <a href="${item.url}"
        style="text-decoration: none; color: #000; background: #fff; display: inline-block; margin: 10px 5px; border-radius: 10px; padding: 10px; min-height: 280px;">
            <div style="padding: 5px;">
                <img src="${item.image}" alt="" style="max-width: 100%;">
            </div>
            <div style="font-size: 11px; color: #444;">${item.brand}</div>
            <div style="font-size: 12px; margin-bottom: 10px; line-height: 18px;"><b>${item.name}</b></div>
            <table width="100%">
                <tr>
                    <td>
                    ${item.salePrice ? 
                        `<div style="font-size: 12px; color: #444; text-decoration: line-through;">${item.regPrice}</div>
                        <div style="font-size: 13px; color: #000; font-weight: bold;">${item.salePrice}</div>`
                    :
                        `<div style="font-size: 13px; color: #000; font-weight: bold;">${item.regPrice}</div>` 
                    }
                    </td>
                    <td style="text-align: right;">
                        ${
                        item.ohPrice && 
                        `<img src="https://performance-mailing.s3.amazonaws.com/Mifarma/MAIL/2021/OCT/TOH/oh.jpg" width="32">
                        <div style="font-size: 13px; color: #000; font-weight: bold;">${item.ohPrice}</div>`
                        }
                    </td>
                </tr>
            </table>
        </a>
    `;
}
