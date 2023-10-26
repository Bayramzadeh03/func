// //lowercase-hamisi boyuk
// let data = 'salam'
// console.log(data.toUpperCase());


// //lowercase-hamisi kicik
// let data1 ='SALAM'
// console.log(data1.toLowerCase());


// //slice-hardan hara kimi bize versin
// let say='kitab'
// console.log(say.slice(1,3));


// //replace-sozun yerini deyismek birinci hansi sozu deyismek isdiyirik o daha sonra evez edeceyimiz ssoz
// let text1 = "Please visit Microsoft!";
// let newText = text1.replace("Microsoft", "W3Schools");
// console.log(newText);

// //1 defeden cox yazmaq olur
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// console.log(text);

// //concat-birlesdirir
// let text3 = "Hello";
// let text4 = "World!";
// let text5 = text3.concat(" ",text4);
// console.log(text5);


// //trim-evvelde ve sonda olan bosluqlari kesir
// let text6 = "     Hello World!     ";
// let text7 = text6.trim();


// //split- , gore bolub array yaradir
// let text12 = "a,b,c,d,e,f";
// const myArray = text12.split(",");
// console.log(myArray[0]);


// // padStart-evveline reqem artirsin , () daxilinde yazdigimiz 1 ci eded nece reqemli olmagini gosderir , ondan sonra yazilan reqem ise hansi ededin artirmaq oldugunu gosderir
// let text13 = "5";
// text13 = text13.padStart(4,"0");
// console.log(text13);


// // padEnd-sonuna reqem artirsin , () daxilinde yazdigimiz 1 ci eded nece reqemli olmagini gosderir , ondan sonra yazilan reqem ise hansi ededin artirmaq oldugunu gosderir
// let text14 = "5";
// text14 = text14.padEnd(4,"0");
// console.log(text14);


// // String substring()
// // String substr()
// // String charAt()
// // String charCodeAt()


// //indexof-daxilindeki sozunun index-ni axtarib verir
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("Apple", -1);
// console.log(index);


// let soz='050-456-23-17'
// function myinclude(text,search,index=0) {
//     for (let i = index; i < text.length; i++) {
//         if (text[i]=search) {
//             return true        
//         }    
//     }
//     return false
// }
// console.log(myinclude(soz,'5',6));


// for (let i = 0; i <100; i+=2) {
//     console.log(i);

// }

// for (let i = 100; i > 0; i-=3) {
//     if (i===100) {
//         continue
//     }
//     console.log(i);

// }


// for (let i = 0; i < 100; i+=15) {
//     if (i===0) {
//         continue;
//     }
//     console.log(i);

// }

// let text = 'salam'
// let number = [1,2,3,4,5,6,7,8,9]

// for (let i = 0; i < number.length; i++) {
//     console.log(i + '-' + number[i]);

// }

// for (let a = 0; a < text.length; a++) {
//     console.log( a + "-" + text[a]);

// }


// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let i = 0
// while (i < number.length) {
//     console.log(i + '-' + number[i]);
//     i++
// }

// let toplam=0
// for (let i = 1; i < 100; i+=2) {
//     toplam+=i;

// }
// console.log(toplam);



// let sum=0
// for (let i = 0; i < 100; i++) {
//     if (i%2===0) {
//         sum++    
//     }
// }
// console.log(sum);


// let total=1
// let num=+prompt('ededi daxil edin')
// for (let i = 1; i <= num; i++) {
//     total*=i
// }
// console.log(total);


// const arr=[1,2,3,4,5]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2===0) {
//         console.log(arr[i]);
//     }

// }


// const newarr=[1,2,3,203,5]
// for (let i = 0; i < newarr.length; i++) {
//     if (newarr[i]>200) {
//         console.log(true);
//     }else{
//         console.log(false);
//     }

// }

// const newarr=[1,2,-3,203,5]
// for (let i = 0; i < newarr.length; i++) {
//     if (newarr[i]<0) {
//         console.log(newarr[i]);
//     }

// }

// let cut=0
// let tek=0

// const newarr=[1,2,3,4,5]
// for (let i = 0; i < newarr.length; i++) {
//     if (newarr[i]%2==0 ) {
//         cut=cut+newarr[i]
//     }else if(newarr[i]%2==1){
//         tek=tek+newarr[i]
//     }
// }

// console.log(cut-tek);

// let cut=0

// const newarr=[1,12,33,44,55,66,77,88,99,10]
// for (let i = 0; i < newarr.length; i++) {
//     if (i%2==0 ) {
//         console.log(newarr[i]);
//     }
// }

// let edediorta=0
// let sum =0;
// const orta=[1,2,4,5]
// for (let i = 0; i < orta.length; i++) {
//     sum=sum+orta[i]
//     edediorta=sum/orta.length
// }
// console.log(edediorta);

// let cem=0
// for (let i = 0; i < 100; i++) {
//     if (i%11==0) {
//         cem=cem+i 
//     }

// }
// console.log(cem);

// const bigArr=[12,32,46,34,70]
// const deyisen=0

// for (let i = 0; i < bigArr.length; i++) {
//     if ( deyisen<bigArr[i]) {
//         deyisen = bigArr[i]n 

//     }


// }
// console.log(deyisen);

// 12.verilmis ededi reqemlerine ayiran proqram yazin
// let eded = 450
// let stringnumber=toString(eded)
// let number=parseInt(stringnumber)
// for (let i = 0; i < stringnumber.length; i++) {
//     if (number[i]>) {


//     }

// }
// console.log(number);


//13.en boyuyuyunu tapin

// function boyuk(number) {
//     number = number.toString()
//     number = number.split("")
//     let max = +number[0]
//     for (let i = 0; i < number.length; i++) {
//         if (+number[i] > max) {
//             max = number[i]
//         }
//     }
//     return max
// }
// console.log(boyuk(462695));


// //14.en kiciyin tapin
// function kicik(reqem) {
//     reqem = reqem.toString()
//     reqem = reqem.split("")
//     let min = +reqem[0]
//     for (let i = 0; i < reqem.length; i++) {
//         if (+reqem[i] < min) {
//             min = reqem[i]

//         }

//     }
//     return min

// }
// console.log(kicik(1223456789));

//15.verilmis ededlerin reqemlerin cemini , hasilini , ededi ortasini tapin 

function sum(eded) {
    eded = eded.toString()
    let cem = 0;
    let hasil = 1;
    let arr = []
    for (let i = 0; i < eded.length; i++) {
        cem += +eded[i]
        hasil *= eded[i]
        ededorta=cem/eded.length

    }
    arr.push(cem, hasil,ededorta)
    return arr;


}
console.log(sum(1234));


