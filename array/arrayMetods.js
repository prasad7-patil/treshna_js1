// var arr=["city",10,"pep","north london"]
// var arr1=["Football"]

//1 concat(number[])

// console.log(arr.concat(arr1));//[ 'city', 10, 'pep', 'north london', 'Football' ]
// console.log(arr);//[ 'city', 10, 'pep', 'north london' ]

// //2 push()
// /* push method will accept element as an argument and it will */
// console.log(arr);//[ 'city', 10, 'pep', 'north london' ]
//  console.log(arr.push("pep"));//5
// console.log(arr);//[ 'city', 10, 'pep', 'north london', 'pep' ]

// //3 pop()
// console.log(arr);//[ 'city', 10, 'pep', 'north london', 'pep' ]
// console.log(arr.pop())//pep
// console.log(arr);//[ 'city', 10, 'pep', 'north london' ]

//4 unshift(element)
// console.log(arr);
// console.log(arr.unshift("FIFA"));
// console.log(arr);

// //5 shift()
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

// //6 splice(start index,delete count, new element)
// console.log(arr);
// console.log(arr.splice(1,2,"london derby"));
// console.log(arr);

//7 slice(start indes, end index)
var arr2=[3,4.4,5,6,17,8,9,10,99]
// console.log(arr2);
// console.log(arr2.slice(1,4));
// console.log(arr2);

//8 every()s
// console.log(arr2);
console.log(arr2.every((element)=>{
//  return element <25
// // return element <5// false
// }))
// console.log(arr2);

//9 some()

// console.log(arr2);
// console.log(arr2.some((element)=>{
//  return element <5
// }))
// console.log(arr2);

//10 indexOf()
// console.log(arr2);
// console.log(arr2.indexOf(0,1));
// console.log(arr2);

//11 lastIndexOf()

// console.log(arr2);
// console.log(arr2.lastIndexOf(6,7));
// console.log(arr2);

//12 reverse()

// console.log(arr2);
//  console.log(arr2.reverse());
// console.log(arr2);

//13 includes()


// console.log(arr2);
//  console.log(arr2.includes(10));
// console.log(arr2);

//14 join

// console.log(arr2);
//  console.log(arr2.join("hello"));
// console.log(arr2);

//15 foreach(()=>{})

// arr2.forEach((element,index)=>{
//    console.log(index+"   "+element);
//     console.log(element+2);
// })

// console.log(arr2);

//16 map(()=>{})

// console.log(arr2);
//        console.log(arr2.map((element,index) => {
//                       return element+2
//                     }));
//         console.log(arr2);

//17 filter(()=>{})

// console.log(arr2);
//       console.log(arr2.filter((element,index) => {
//             if(element>10)
//                       return element
//                     }));
//         console.log(arr2);

//18 sort(()={})ascending order
// console.log(arr2);
        // console.log(arr2.sort((a,b) => {
//             return a-b
//                     }));
//         console.log(arr2);

// sort(()={})-->descending order
// console.log(arr2);
//      console.log(arr2.sort((a,b) => {
//             return b-a
//                     }));
//         console.log(arr2);

//19 reduce
// var number=[300,05,99,100]
//        function funtn(total,number) {
//                return total-number     
//        }
//     console.log(number.reduce(funtn));
//        console.log(number);

//20 reduce right

// var number=[3,05,90,100]
//        function funtn(total,number) {
//                return total-number     
//        }
//         console.log(number.reduceRight(funtn));
//        console.log(number);
//      