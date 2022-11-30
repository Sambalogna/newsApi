const testArr = [
    {
        "source": {
            "id": null,
            "name": "WBTV"
        },
        "author": "WBTV Web Staff",
        "title": "WBTV mourning the loss of meteorologist Jason Myers, pilot Chip Tayag - WBTV",
        "description": "The two were killed in a helicopter crash Tuesday afternoon.",
        "url": "https://www.wbtv.com/2022/11/22/wbtv-mourning-loss-meteorologist-jason-myers-pilot-chip-tayag/",
        "urlToImage": "https://gray-wbtv-prod.cdn.arcpublishing.com/resizer/vPAv-hOJWA4wR6pzQhWQT0X9vog=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/OCD6DIQJZZAWDDGWKDHZHSMAAE.jpg",
        "publishedAt": "2022-11-22T20:07:00Z",
        "content": "CHARLOTTE, N.C. (WBTV) - WBTV Meteorologist Jason Myers and Sky3 pilot Chip Tayag were killed in a helicopter crash early Tuesday afternoon.\r\nThe crash happened near Interstate 77 at the Nations Ford… [+1184 chars]"
    },
    {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Brooke Singman, Bill Mears, Shannon Bream",
        "title": "Supreme Court orders Trump's tax returns to be turned over to House Democrats - Fox News",
        "description": "The Supreme Court on Tuesday ordered the handover of former President Donald Trump’s tax returns to the House Ways and Means Committee.",
        "url": "https://www.foxnews.com/politics/supreme-court-orders-trumps-tax-returns-turned-over-house-democrats",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/11/GettyImages-1244627968.jpg",
        "publishedAt": "2022-11-22T19:51:33Z",
        "content": "The Supreme Court on Tuesday ordered the handover of former President Donald Trumps tax returns to the House Ways and Means Committee.\r\nLast month, Chief Justice John Roberts granted a stay, temporar… [+2071 chars]"
    },
    {
        "source": {
            "id": "financial-times",
            "name": "Financial Times"
        },
        "author": "Tabby Kinder",
        "title": "Bankman-Fried ran FTX as personal fiefdom, court hears - Financial Times",
        "description": "‘Substantial amounts of money’ spent on items such as vacation homes in Bahamas, bankruptcy lawyer testifies",
        "url": "https://www.ft.com/content/470ce8e8-0e5d-4fe4-8b62-08eb0749da9c",
        "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F1b8ecd25-33ae-4578-9101-d53968335e60.jpg?source=next-opengraph&fit=scale-down&width=900",
        "publishedAt": "2022-11-22T19:03:11Z",
        "content": "FTX founder Sam Bankman-Fried ran the cryptocurrency exchange as his personal fiefdom before its implosion, according to a lawyer working on the bankruptcy, with substantial amounts of money spent on… [+3470 chars]"
    },
    {
        "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
        },
        "author": "Alexander Saeedy, Jonathan Randles",
        "title": "FTX Lawyer Says ‘Substantial Amount’ of Crypto Firm’s Assets Stolen or Missing - The Wall Street Journal",
        "description": "The failed exchange is making its first appearance at a Delaware bankruptcy court since filing the largest-ever crypto chapter 11",
        "url": "https://www.wsj.com/articles/ftx-lawyer-says-substantial-amount-of-crypto-firms-assets-stolen-or-missing-11669134521",
        "urlToImage": "https://images.wsj.net/im-671686/social",
        "publishedAt": "2022-11-22T18:20:00Z",
        "content": "A substantial amount of failed crypto exchange FTXs assets is missing and may have been stolen as a run on customer deposits and a liquidity crunch precipitated a crisis of leadership and led the fir… [+384 chars]"
    },
    
]
//query for mourning takes out single instance
//let query = "mourning"

// let query = "ftx"
//         let resultArr = testArr 
//         for(i=0; i<testArr.length; i++) {
//         if(testArr[i].title.toLowerCase().includes(query)){
//         //console.log(resultArr[i])
//         resultArr.splice(i,1)
//         i--
//         }
//         //console.log(testArr[i])
//         //let resultArr = testArr.filter(news => news.title.toLowerCase() != filteredArr)
//         // return resultArr
//         }
//         //console.log(testArr)
//         console.log(resultArr)
    

let query = "ftx"
        let resultArr = testArr 
        for(i=0; i<resultArr.length; i++) {
        if(resultArr[i].title.toLowerCase().includes(query)){
        //console.log(resultArr[i])
        resultArr.splice(i,1)
        i--
        }
        }
        //console.log(testArr)
        console.log(resultArr)