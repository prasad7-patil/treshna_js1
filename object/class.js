class pen
{
    constructor(penColour,penPrice,penCompany,penDetails){
        this.penColour=penColour
        this.penPrice=penPrice
        this.penCompany=penCompany
        this.penDetails=penDetails

    }


}

var pen1=new pen("black","10 rs","hauser",{mfg:"2011",mfgBy:"Hul",distributedBy:"linc"})
var pen2=new pen("blue","20 rs","raynolds",{mfg:"2013",mfgBy:"ray.pvt.ltd",distributedBy:"ray.dist"})

console.log(pen1);
console.log(pen2);