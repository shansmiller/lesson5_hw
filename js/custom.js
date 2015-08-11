//example of alert
//alert("hello world!");

//examples of variables in an array 
var weekdays = ['m', 't', 'w', 'th', 'f'];
var weekend = ['s', 'sun'];

//multidemisional array below
var week = [ weekdays, weekend ];
console.log( week [0][3] ); //should return th via multidimentional array
console.log( weekdays [3] ); //should return th via 
console.log( week [1][1] ); //should return sun via multidimentional array
console.log( weekend [1])



var num1 = 10;
var num2 = 20;
var total = num1 + num2;
console.log(total);

// DO NOT CHANGE THIS NAME
var firstName = "Shannon";
var lastName = "Miller";

// How to get a space between the name 
var whiteSpace = " ";
var name = firstName + whiteSpace + lastName;

console.log (name)
//var name2 = "Shannon" + "Miller"; //ShannonMiller

var me = {
	firstName : "Shannon",
	lastName : "Miller",
	birthday : "09/26",
	interest: "dogs, exercise, music"
}

console.log( me.firstName );
console.log( me.lastName );
console.log( me.birthday );
console.log( me.interest );

//This is a cheat sheat for testing
var z = 6;

if( z < 10 ){
	//alert("The vaue of z is " + z + " and it's less than 10");
}else{
	//alert( z + " is not greater than 10");
}	

if( z < 10 ){
	//alert("The value of z is " + z + " and it's less than 10");
}else if( z < 7 ){
	//alert("The value of z is " + z + " and it's less than 7");
}else{
	//alert( z + "is not greater than 10")
}

///

function sayMyName( personsName ){
	console.log("You've entered " + personsName)
}


sayMyName("Shannon");

function returnSomething(){
	console.log(":)");
}


function guessWhichDoor( doorNumber ){
	debugger;
	if( doorNumber === 1 ){
		alert("You lost!");
	}else if( doorNumber === 2){
		alert("You won!");
	}else if( doorNumber === 3){
		alert("you lost, try again!");
	}else{
		alert("Invalid door number!");
	}
	
}

//guessWhichDoor(1);
//guessWhichDoor(2);
//guessWhichDoor(3);
//guessWhichDoor(10);
console.log( "weekdays.length: " + weekdays.length)
for(i = 0; i < weekdays.length; i += 1){
	console.log( "i: "+ i );

	console.log( "weekdays [i] => weekdays["+i+"]: "+ weekdays[i] );

}





returnSomething();







