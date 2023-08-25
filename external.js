// variables
var a;                  //variable declaration
a=50;                   //variable initialization

let b="Hello";
const c=20;


var string = "Hello";        //primitive datatypes
var numeric = 2434243;
var str2 = "432434323";
var float = 32423.34;
var boolean = true;
boolean=false;

var array = [34,"asadsas",true,3233.44];
var object = {
    key1: "34334",
    key2:"dadasasd",
    key3: {
        key3_1:"fdsfsdf",
        key3_2:"value",
        key3_3: {
            key3_3_1: ""
        },
        key3_4:""
    }
}

var student = {
    usno:"19MCAR2343",
    name: {
        firstname:"Akash",
        middlename:null,
        lastname:"Soni"
    },
    address: {
        line1:"",
        line2:"",
        city:"Bangalore",
        pincode:"560076"
    },
    results: {
        sem1: {
            subject1: {
                assignment:24,
                ia:23,
                final:40
            }
        }
    }
}

var myfunc = (param1,param2) => {
    return param1+param2;
}

// input/output
document.getElementById("para").innerText;
document.getElementsByTagName('input').value;
document.getElementById("para").innerText="Edited from JS";
document.write("Hello world");
window.alert("Warning!");
console.log("Print");
window.print();

window.alert("MEssage");
let x = window.confirm("Are you sure?");
let name = window.prompt("Are you sure? Write 'yes' to confirm."); 

//operations
    //arithmetic operators (+,-,*,/,%,++,--)
    //comparison operators (>,<,>=,<=,==,===,!=,!==)
    //logical operator (&&,||,!) 
    //assignment operator (=,+=,-=,*=,/=,%=)
    //conditional/ternary operator/shorthand branching stmt ( (condition)?true stmt:false stmt; )

//branching (if(), if()...else, if()...else if()...else, switch()...case )

let marks = 50;

if(marks > 40) {
    write("You have passed");
}


if(marks > 40) {
    write("You have passed")
}
else {
    write("You have failed");
}


if(marks>75) {
    write("You have passed with distinction");
}
else if(marks>65) {
    write("You have passed in first class");
}
else if(marks>55) {
    write("You have passed in second class");
}
else if(marks > 40) {
    write("You have passed in third class")
}
else {
    write("You have failed");
}


let grade = "A+";
switch(grade) {
    case "A+":
        write("Marks 95-100");
        break;
    case "A":
        write("Marks 80 to 95");
        break;
    case "B+":
        write("Marks 70 to 80");
    default:
        write("Error");
}


//iteration (for loop, while loop, do...while loop, for...in loop)

var i=0;
while(i<=10) {
    (i%2==0) ?? write(i)
    i++;
}

for(var i=0;i<=10;i++) {
    (i%2==0) ?? write(i)
}

var i=10000;
do {
    (i%2==0) ?? write(i)
    i++;
}
while(i<=10)



var student = {
    usno:"19MCAR2343",
    name: {
        firstname:"Akash",
        middlename:null,
        lastname:"Soni"
    },
    address: {
        line1:"",
        line2:"",
        city:"Bangalore",
        pincode:"560076"
    },
    results: {
        sem1: {
            subject1: {
                assignment:24,
                ia:23,
                final:40
            }
        }
    }
}

for(let value in student) {
    document.write(student[value]);
}

// functions
function add1(param1,param2) {    // function declaration
    return param1+param2;
}

let sum = add(10,20);    //function call

// JS Events

let btn = document.getElementById('btn');

btn.addEventListener('dblclick',()=> {
    btn.style.backgroundColor="Red";

})

$(document).ready(()=> {
    $("#btn").click(()=>{
        $("#btn").fadeOut();
    })
})

// error handling  -- syntax errors, logical error, runtime error



// form validation