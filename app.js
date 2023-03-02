var userName;
userName=prompt("enter your name?")
console.log(userName);
var gender;
gender=prompt("whats your gender?male or female")
//prompt("male","female")

console.log(gender);
if(gender!=="female"&& gender!=="male"){
    alert("please enter male or female")
}
var age;
age=prompt("how old are you?")
if(age<=0){
    alert("there is something wrong")
}
var a= confirm("do you want to skip welcome message")
if(a==false){
if(gender=="female"){
    alert("welcome"+"~Ms~"+userName);}

    else if (gender=="male")
       { alert("welcome~Mr~"+userName);

    }
    else {
alert("welcome"+userName);

}
}


 
