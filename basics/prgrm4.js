var a=10//global
let b=20//script
const c=30//script

function sum(a,b){
    var x=17//local
    let y=27//local
    const z=37//local
    function mul(i,j){
        var f=1
        let g=2
        const o=3
    }
    {
        var m=11
        let n=22
        const o=33
    }
    mul(9,9)
}
sum(3,4)//local

