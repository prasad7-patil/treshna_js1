var a=10//global
let b=20//script
const c=30//script

function sum(a,b){
    var x=17//local
    let y=27//local
    const z=37//local
    {
        var m=11//local
        let n=22//block
        const o=33//block
    }
}
sum(3,4)//local

