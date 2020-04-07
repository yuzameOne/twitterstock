const puppeteer = require('puppeteer');
const negativeParse = require("./parse/negativeParse");
const positiveParse = require("./parse/positiveParse");


let pwd ='xxxxx'

let signIn = async () =>{

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({
        width: 1000,
        height: 800,
      });

      await page.goto("https://twitter.com/home") 

      await page.waitFor(2000)
      await page.$('input[name="session[username_or_email]"]') 
      await page.keyboard.type('MoexStocks',{delay: 300}); 
      await page.$('input[name="session[password]"]')
      await page.focus('input[name="session[password]"]')
      await page.keyboard.type(pwd,{delay: 300});
      let log = await page.$('div[data-testid="LoginForm_Login_Button"]')
      log.click()

      const inputTweet = await page.$('span[data-offset-key]');

    }
signIn();


// negativeParse().then(
//     (result)=>{
//         console.log(`tik: ${result.row1[0]}, open: ${result.row1[4]}, close: ${result.row1[2]}, per: ${result.row1[3]}% `)
//         console.log(`tik: ${result.row2[0]}, open: ${result.row2[4]}, close: ${result.row2[2]}, per: ${result.row2[3]}% `)
//         console.log(`tik: ${result.row3[0]}, open: ${result.row3[4]}, close: ${result.row3[2]}, per: ${result.row3[3]}% `)
//         console.log(`tik: ${result.row4[0]}, open: ${result.row4[4]}, close: ${result.row4[2]}, per: ${result.row4[3]}% `)
//         console.log(`tik: ${result.row5[0]}, open: ${result.row5[4]}, close: ${result.row5[2]}, per: ${result.row5[3]}% `)
       
//     }
// )

 


// positiveParse().then(
//     (result)=>{
//         console.log(`tik: ${result.row1[0]}, open: ${result.row1[4]}, close: ${result.row1[2]}, per: +${result.row1[3]}% `)
//         console.log(`tik: ${result.row2[0]}, open: ${result.row2[4]}, close: ${result.row2[2]}, per: +${result.row2[3]}% `)
//         console.log(`tik: ${result.row3[0]}, open: ${result.row3[4]}, close: ${result.row3[2]}, per: +${result.row3[3]}% `)
//         console.log(`tik: ${result.row4[0]}, open: ${result.row4[4]}, close: ${result.row4[2]}, per: +${result.row4[3]}% `)
//         console.log(`tik: ${result.row5[0]}, open: ${result.row5[4]}, close: ${result.row5[2]}, per: +${result.row5[3]}% `)
//     }
// )
