const negativeParse = require("./parse/negativeParse");
const positiveParse = require("./parse/positiveParse");


negativeParse().then(
    (result)=>{
        console.log(`tik: ${result.row1[0]}, open: ${result.row1[4]}, close: ${result.row1[2]}, per: ${result.row1[3]}% `)
        console.log(`tik: ${result.row2[0]}, open: ${result.row2[4]}, close: ${result.row2[2]}, per: ${result.row2[3]}% `)
        console.log(`tik: ${result.row3[0]}, open: ${result.row3[4]}, close: ${result.row3[2]}, per: ${result.row3[3]}% `)
        console.log(`tik: ${result.row4[0]}, open: ${result.row4[4]}, close: ${result.row4[2]}, per: ${result.row4[3]}% `)
        console.log(`tik: ${result.row5[0]}, open: ${result.row5[4]}, close: ${result.row5[2]}, per: ${result.row5[3]}% `)
       
    }
)

// positiveParse().then(
//     (result)=>{
//         console.log(`tikets : ${result.row1[0]}, name : ${result.row1[1]}, percent : +${result.row1[3]}%`)
//         console.log(`tikets : ${result.row2[0]}, name : ${result.row2[1]}, percent : +${result.row2[3]}%`)
//         console.log(`tikets : ${result.row3[0]}, name : ${result.row3[1]}, percent : +${result.row3[3]}%`)
//         console.log(`tikets : ${result.row4[0]}, name : ${result.row4[1]}, percent : +${result.row4[3]}%`)
//         console.log(`tikets : ${result.row5[0]}, name : ${result.row5[1]}, percent : +${result.row5[3]}%`)
//     }
// )

// 014268