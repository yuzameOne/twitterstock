const CronJob = require('cron').CronJob;
const puppeteer = require('puppeteer');
const negativeParse = require('./parse/negativeParse');
const positiveParse = require('./parse/positiveParse')


process.env.PORT || 5000;

let work = new CronJob('0 19 * * 1-5',async function(){
   

    let pwd ='Fmb384qj7da'

let signIn = async () =>{
    const browser = await puppeteer.launch(/*{headless: false}*/);
    const page = await browser.newPage();
    
    /*await page.setViewport({
        width: 1000,
        height: 800,
      });*/
            
      await page.goto("https://twitter.com/home",{waitUntil: 'domcontentloaded'}) 
      
      await page.waitFor(2000)
      await page.$('input[name="session[username_or_email]"]') 
      await page.keyboard.type('MoexStocks',{delay: 300}); 
      await page.$('input[name="session[password]"]')
      await page.focus('input[name="session[password]"]')
      await page.keyboard.type(pwd,{delay: 300});
      let log = await page.$('div[data-testid="LoginForm_Login_Button"]')
      log.click()

        let postNegativeString = await negativeParse()
        let postPositiveString = await positiveParse()


        await page.waitForSelector('[data-testid="tweetTextarea_0"]')
        await page.click('[data-testid="tweetTextarea_0"]')
        
         let rowNegativeData = `tik: ${postNegativeString.row1[0]}, open: ${postNegativeString.row1[4]}, close: ${postNegativeString.row1[2]}, per: ${postNegativeString.row1[3]}% 
tik: ${postNegativeString.row2[0]}, open: ${postNegativeString.row2[4]}, close: ${postNegativeString.row2[2]}, per: ${postNegativeString.row2[3]}% 
tik: ${postNegativeString.row3[0]}, open: ${postNegativeString.row3[4]}, close: ${postNegativeString.row3[2]}, per: ${postNegativeString.row3[3]}% 
tik: ${postNegativeString.row4[0]}, open: ${postNegativeString.row4[4]}, close: ${postNegativeString.row4[2]}, per: ${postNegativeString.row4[3]}% 
tik: ${postNegativeString.row5[0]}, open: ${postNegativeString.row5[4]}, close: ${postNegativeString.row5[2]}, per: ${postNegativeString.row5[3]}% `;
    
          await page.keyboard.type( rowNegativeData, {delay: 100})

          await page.waitForSelector('[data-testid="tweetButtonInline"]')
          await page.click('[data-testid="tweetButtonInline"]')


          await page.waitFor(2000)

          await page.waitForSelector('[data-testid="tweetTextarea_0"]')
          await page.click('[data-testid="tweetTextarea_0"]')

          let rowPositiveData =  `tik: ${postPositiveString.row1[0]}, open: ${postPositiveString.row1[4]}, close: ${postPositiveString.row1[2]}, per: +${postPositiveString.row1[3]}% 
tik: ${postPositiveString.row2[0]}, open: ${postPositiveString.row2[4]}, close: ${postPositiveString.row2[2]}, per: +${postPositiveString.row2[3]}% 
tik: ${postPositiveString.row3[0]}, open: ${postPositiveString.row3[4]}, close: ${postPositiveString.row3[2]}, per: +${postPositiveString.row3[3]}% 
tik: ${postPositiveString.row4[0]}, open: ${postPositiveString.row4[4]}, close: ${postPositiveString.row4[2]}, per: +${postPositiveString.row4[3]}% 
tik: ${postPositiveString.row5[0]}, open: ${postPositiveString.row5[4]}, close: ${postPositiveString.row5[2]}, per: +${postPositiveString.row5[3]}% `;
          await page.keyboard.type( rowPositiveData, {delay: 100})

          await page.waitForSelector('[data-testid="tweetButtonInline"]')
          await page.click('[data-testid="tweetButtonInline"]')
          
          
          await page.waitFor(2000)
          
          browser.close()
          
}

signIn()

}, 
    null,
        true,
            'Europe/Moscow')

work.start();
