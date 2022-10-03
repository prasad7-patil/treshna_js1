var date=new Date()

//1 toDateString()
console.log(date.toDateString());
//2 getDate()
console.log("todays date"+"  "+date.getDate());
//3 getDay()
console.log("todays day "+"  "+date.getDay());
//4 getFullYear()
console.log("todays day "+"  "+date.getFullYear());
console.log("todays day "+"  "+date.getMonth());

todayDate=date.toDateString()
console.log(todayDate);
console.log(todayDate.split(" ")[0])
console.log(todayDate.split(" ")[1])
console.log(todayDate.split(" ")[2])
