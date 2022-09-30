var arr=[1,, 2, 3, 4,,5]
console.log(arr.length);

arr.forEach((value,index,arr)=>{
console.log(index+"  "+"  "+value+"  "+arr)//the 1st index value wont print because 
})//in declaration it is undefined

for (let index = 0; index < arr.length; index++) {
    console.log(index+"  "+arr[index]); //index will be printed of undefined value 
}
