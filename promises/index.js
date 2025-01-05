// function delayFn(time){
//     return new Promise((res, rej)=>{
//         setTimeout(res, time)
//     })
// }

// console.log('promise lecture starts')
// delayFn(2000).then(()=>{
//     console.log("after two seconds");
// })
// console.log("end")

function divide(a, b) {
    return new Promise((res, rej)=>{
        if(b === 0) rej('Can not perform division by zero')
        else res(a/b)
    })
}

divide(10,5)
.then(value => console.log(value))
.catch(error => console.log(error))