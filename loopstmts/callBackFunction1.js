function totalAmount(prdt1,prdt2,prdt3,prdt4,prdt5,prdt6,addition, subtraction) {
    GA=addition(prdt1,prdt2,prdt3,prdt4,prdt5,prdt6)
    GS=subtraction(GA,prdt5,prdt6)
    console.log("gross amount of money  "+GS);
}

function add(a,b,c,d,e,f) {
    c==a+b+c+d+e+f
    return c

}
function sub(totalAddedProducts, e,f){
    d=totalAddedProducts-e-f
    return d
}

totalAmount(1,2,3,4,5,6,add,sub)
//prd1=1
// prd1=2
// prd1=3
// prd1=4
// prd1=5
// prd1=6

