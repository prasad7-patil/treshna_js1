var a=10//global
let b=20//script
const c=30//script

{
    var e=40// global
    function sum(a,b){
        var f=11//local
        let g=22//local
        const o=33//local

    }
    sum(60,77)//local
}