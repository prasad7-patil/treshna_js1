var mobile={
    company:"nokia",
    foundedYear:"2003",

    showDetails:function(){
        return "company name is "+this.company+"  founded in "+this.foundedYear

    }
}
console.log(mobile);

var mobile2={}

// console.log(mobile2.company);
mobile2.__proto__=mobile

console.log(mobile2.company)

mobile2.company="apple"
mobile2.foundedYear="2005"

console.log(mobile2.showDetails());