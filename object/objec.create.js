var school={
    schoolName:"st mary",
    schoolEst:"2001",
    schoolFeatures:["english","isce","sports academy"],

    display:function(){
        return "my school name is "+"  "+this.schoolName+"   esta in  "+this.schoolEst
    }

}
 var schoolINfo=Object.create(school)
 schoolINfo.schoolName="N v" //overiding
 schoolINfo.schoolEst="1900" //overriding
 console.log(schoolINfo);
 console.log(school);
 console.log(schoolINfo.display());
 console.log(school.display());