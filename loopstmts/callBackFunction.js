function totalProductsCost(a, b, addition){
    
    result=(addition(a,b));
    console.log(result);
}


function add(a,b){
    c=a+b
    return c
}

totalProductsCost(1,6,add)

//a=1
//b=6
//addition=add