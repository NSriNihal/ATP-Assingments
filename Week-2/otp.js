
// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends

// console.log("OTP sent successfully")
// setInterval(()=>{console.log("resend enabled")},10000)


// let count =10;


// console.log("OTP sent successfully")
// setInterval(()=>{if(count>0)count --;el; console.log(count)},1000)

console.log("OTP sent Successfully")

let second = 5;

let intervelID = setInterval(()=>{
    second --;
    console.log(`OTP can be sent after ${second}`)

    if(second === 0){
        console.log("Resend OTP")
        clearInterval(intervelID)
    }
},1000)
