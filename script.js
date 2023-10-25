// // Decleration function
// function sum(a,b,c) {
//     return a+b+c
// }
// console.log(sum(1,2,3));


// // Expresion function
// const data1=function (a,b,c) {
//     return a+b+c
// }
// console.log(data1(3,2,3));



// // Arrow function
// const data =(a,b,c)=>(a+b+c);
// console.log(data(3,4,5));



// const data=(...params)=>{
//     let sum=0

//     for (let i = 0; i < params.length; i++) {
//         sum=sum+params[i]
//     }
//     orta=sum/params.length  
//    return orta
// }
// console.log(data(2,3,4,4,6,5,6));


// let twoarr = [54, 31, 3, 76, 17, 90, 65, 49, 51]
// let little = Infinity
// let enkicikindex = 0

// for (let i = 0; i < twoarr.length; i++) {
//     if (twoarr[i] % 2 == 1 && twoarr[i] < little) {
//         little = twoarr[i]
//         enkicikindex = i
//     }
// }
// console.log(enkicikindex);


// let max=-Infinity
// const enboyuk=(...params)=>{
//     for (let i = 0; i < params.length; i++) {
//         params[i]>max
//         max=params[i]
//     }
//     return max
// }
// console.log(enboyuk(1,2,3,4,5,6,7,8,9,10));




const enkicik=(...params)=>{
    let count =0
    for (let i = 0; i < params.length; i++) {
        if (params[i]%2==0) {
            count++
        }
    }
    return count


}
console.log(enkicik(1,2,3,4,5,6,7,8,9));




// function OddCount(...params) {
//     let count = 0;
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(OddCount(1,2,34,5,6,4,4))



// function  tek(...params) {
//     let count=0
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]%2===1) {
//             count++
//         }
//     }
//     return count
// }
// console.log(tek(12,3,4,5,6,7));


//cut edede bolunenlerin siyaisi
// const params=[2,3,4,56,7,8]
// function siyahi(...params) {
//     for (let i = 0; i < params.length; i++) {
//        if (params[i]%2==0) {
//         console.log(params[i]);
//        }  
//     }
// }
// siyahi(...params)