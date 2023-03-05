'use strict';
var userName;

userName = prompt("enter your name?")
console.log(userName);
var gender;
gender = prompt("whats your gender?male or female")
//prompt("male","female")

console.log(gender);
if (gender !== "female" && gender !== "male") {
    alert("please enter male or female")
}
var age;
age = prompt("how old are you?")
if (age <= 0) {
    alert("there is something wrong")
}
var a = confirm("do you want to skip welcome message")
if (a == false) {
    if (gender == "female") {
        alert("welcome" + "~Ms~" + userName);
    }

    else if (gender == "male") {
        alert("welcome~Mr~" + userName);

    }
    else {
        alert("welcome" + userName);

    }
}
function confirmAction(questions) {
   
    var response = prompt(questions);
    console.log(response);
    if(response==""){
        response="invalid"
    }
answerArray.push(response);
    

}
const qArray=[];
const answerArray=[];
qArray.push("are you a student?(yes/no)");
qArray.push("are you in a university?(yes/no)");
qArray.push("is your major IT?(yes/no)");
console.log(qArray,"hi");
for (let i =0; i <qArray.length; i++) {
   
    confirmAction(qArray[i]);
}
for(let i=0;i<answerArray.length;i++){
console.log(answerArray[i]);

}



