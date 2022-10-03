var manchesterCity={

    managerName:"pep",
    country:"london",

    team1:function(){
        console.log(this.skipper);
        console.log(this.managerName);
    }
}

var liverpool={
    managerName:"conte",
    country:"southlondon",

    team2:function(a,b){
        console.log(manchesterCity.managerName);//pep
        console.log(liverpool.managerName);//conte
        console.log(a);//10
        console.log(liverpool.country);//southlondon

    }
}

liverpool.team2(10,20)
manchesterCity.team1()