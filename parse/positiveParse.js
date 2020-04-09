const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1000,
        height: 800,
      });

    await page.goto('https://www.moex.com/ru/marketdata/#/group=4&collection=3&boardgroup=57&data_type=current&mode=groups&sort=SHORTNAME&order=asc');
    
    let  clickAgreeButton = await page.evaluate(()=>{
        let getButton = document.getElementsByClassName('disclaimer__buttons');
            getButton[0].firstElementChild.click()
        })
    
      
    let  negativeChangeClick = await page.evaluate(()=>{
              let tbody = document.querySelectorAll("tbody")
                tbody[4].rows[0].cells[3].click()
                tbody[4].rows[0].cells[3].click() 
        })

        await page.waitFor(1000)

    let getDataTable = await page.evaluate(()=>{
     
      let tbody = document.querySelectorAll("tbody")

    let row1 = tbody[4].rows[1].innerText.trim().split("\n\t\n");
    let row2 = tbody[4].rows[2].innerText.trim().split("\n\t\n");
    let row3 = tbody[4].rows[3].innerText.trim().split("\n\t\n");
    let row4 = tbody[4].rows[4].innerText.trim().split("\n\t\n");
    let row5 = tbody[4].rows[5].innerText.trim().split("\n\t\n");

      return {
           row1,
           row2,
           row3,
           row4,
           row5
       }       
    })

    return Promise.resolve(getDataTable)
  }; 

scrape().then(
    (result)=>{
        console.log(`tik: ${result.row1[0]}, open: ${result.row1[4]}, close: ${result.row1[2]}, per: +${result.row1[3]}% `)
        console.log(`tik: ${result.row2[0]}, open: ${result.row2[4]}, close: ${result.row2[2]}, per: +${result.row2[3]}% `)
        console.log(`tik: ${result.row3[0]}, open: ${result.row3[4]}, close: ${result.row3[2]}, per: +${result.row3[3]}% `)
        console.log(`tik: ${result.row4[0]}, open: ${result.row4[4]}, close: ${result.row4[2]}, per: +${result.row4[3]}% `)
        console.log(`tik: ${result.row5[0]}, open: ${result.row5[4]}, close: ${result.row5[2]}, per: +${result.row5[3]}% `)
    }
)

module.exports = scrape