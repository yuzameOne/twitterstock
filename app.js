const negativeParse = require("./parse/negativeParse");
const positiveParse = require("./parse/positiveParse");


negativeParse().then(
    (result)=>{
        console.log(`tikets : ${result.row1[0]}, name : ${result.row1[1]}, percent : ${result.row1[3]}%`)
        console.log(`tikets : ${result.row2[0]}, name : ${result.row2[1]}, percent : ${result.row2[3]}%`)
        console.log(`tikets : ${result.row3[0]}, name : ${result.row3[1]}, percent : ${result.row3[3]}%`)
        console.log(`tikets : ${result.row4[0]}, name : ${result.row4[1]}, percent : ${result.row4[3]}%`)
        console.log(`tikets : ${result.row5[0]}, name : ${result.row5[1]}, percent : ${result.row5[3]}%`)
    }
)

positiveParse().then(
    (result)=>{
        console.log(`tikets : ${result.row1[0]}, name : ${result.row1[1]}, percent : +${result.row1[3]}%`)
        console.log(`tikets : ${result.row2[0]}, name : ${result.row2[1]}, percent : +${result.row2[3]}%`)
        console.log(`tikets : ${result.row3[0]}, name : ${result.row3[1]}, percent : +${result.row3[3]}%`)
        console.log(`tikets : ${result.row4[0]}, name : ${result.row4[1]}, percent : +${result.row4[3]}%`)
        console.log(`tikets : ${result.row5[0]}, name : ${result.row5[1]}, percent : +${result.row5[3]}%`)
    }
)