"Ex One: Logic Loops"

let users = ["Jim", "Mike", "Dave", "Josh", "Tim", "Jane", "Susan", "Haley", "Matthew", "John", "Spencer", "Stephan", "Mable", "Steve", "Jacob", "Ruby", "Adam", "Bruce"];
let stevePresent = false;


for(let i=0; i < users.length; i++){
   if(users[i] === "Steve"){
    stevePresent = true
   }

}

if(stevePresent === true){
    console.log("Yes, Steve is present")
} else{

    console.log("No, Steve is not present")
}



let computers = [600, 1000, 400, 300, 600, 200, 100, 400, 500];
let requiredPower = 3500; 
let totalPower = 0;

for(let i=0; i< computers.length;i++){
    totalPower+= computers[i]
    console.log(totalPower)
}

if(totalPower >= requiredPower){
    console.log("There is enough power")
} else{
    console.log("There is NOT enough power")
}


for(let i = 0; i < 100; i++){
    if(i % 2 !== 0){
     console.log(i)
    }

}


let marks = [23, 45, 67, 55, 80, 90, 45, 60, 56, 30, 31];
let total = 0

for(let i = 0; i < marks.length; i++){
    total += marks[i];
  }

  let average = total/marks.length 

 console.log("The total average is " + average);



 let ageOne = 23;
 let userOne = "Josh";
 
 let ageTwo = 16;
 let userTwo = "Jacob";

 if(ageOne > 18 && userOne === "Josh"){
    console.log("User and Age Match");
} else {
    console.log("User and Do Not Age Match");
}


if(ageTwo < 18 || userTwo === "Peter"){
    console.log("User is Younger than 18 or is Peter");
} else {
    console.log("User is Younger than 18 and is Not Peter");
}


 








