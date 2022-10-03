//one way object creation
var Bank={
    BankName:"SBI",
    BankBranch:"karolbagh",
    accountHolderDetails1:{
        Name:"shiv",
        AccountNumber:"12345",
        Address:"mumbai",
        mobNo:"9591579799"
    },

    bankBalance:function(){
        console.log("bank balance is in bitoin");

    }

}
// console.log(Bank);

//1 add an property inside the object

// console.log(Bank.Ifsc="Sbi1334");

//2 delete the property

// delete Bank.Ifsc

// console.log(Bank);

//3 add an object 

// Bank.accountHolderDetails2={
//     name:"vinay",
//     mobNO:"23455"

// }

// console.log(Bank);

// 4 print one property

// console.log(Bank.BankName);

// 5 print partcular property from an object
console.log(Bank.accountHolderDetails1); 

console.log(Bank.accountHolderDetails1.Name);

//6 print object inside an object



