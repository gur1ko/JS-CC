////////// DATA TYPES & VARIABLES/////////////

// string example

/* console.log("Hello World" [10])
console.log('12345'.length) */


/* let str = 'Gurami'
console.log(str[str.length - 1]) */

// VARIABLES

/** 
var
let
const
*/ 

/* const isRaining = true
const temperature = 30
let planet = 'Earth'

temperature = temperature + 2
console.log(temperature) */


/* let celsius = 10;
let farenheit = celsius * 1.8 + 32;

console.log(farenheit) */


/* let bool = '1' !== 1 

console.log(bool)
 */



////////////CONDITIONALS/////////////

/* let subscribed = true
let loggedIn = false

if (subscribed === true) {
    console.log('show the video')
}
else if (loggedIn === true) {
    console.log('tell user to upgrade their subscription')
}
else {
    console.log('tell user to log into account')
}
 */




/* let cash = 45
let price = 40
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra - here is ${difference} dollars change`)

}

else if (cash === price) {
    console.log('you paid theexact amount, have a nice day')
}

else {
    console.log(`not enough money - you still owe ${difference * -1}  dollars`)
}
 */
// && - and
// || - or

/* let cash = 50
let price = 40
let isStoreOpen = false
 */
/* if (cash >= price || !isStoreOpen) {
    console.log('print the receipt')
}
 */


// '!isStoreOpen' is same as 'isStoreOpen === false' and 'isStoreOpen' is same as 'isStoreOpen === true'

/* 
let val = "gurami";

if (val) {
    console.log("truthy value", !!val)
}
else {
    console.log("falsy value", !!val)
} */

////Ternary Operators - 52:58///


/* let hot = true

hot ? console.log('weather is hot outside') : console.log('weather is cold')
 */


/* let subscribed = true
let loggedIn = false
let str = subscribed || loggedIn ? 'show the video' : 'hide the video'
console.log(str);
 */
// 4 short codes


/* let cash = 50
let price = 40
let isStoreOpen = true

let str = isStoreOpen && (cash >= price) ? 'give receipt' : 'do not give receipt'
console.log(str)
 */


/////////////LOOPS////////////

// DRY = Don't Repeat Yourself

/**
 * FOR LOOP >>>>
 * while loop
 * do whule loop
*/

/* let count = 1

while (count <= 100) {
    console.log(count)
    count = count + 1;
}

 */

//   set i to 0 ; less than; plus 1 or += n
/* for (let i = 0; i < 100; i++) {
console.log(i + 1);
}

 */
//////////EXERCISE 1 ////////

/**
 * Write a for-loop that loops through 1 to 20
 * if the number is divisible by 3, print "Frontend"
 * if the number is divisible by 5, print "Simplified"
 * if the number is divisible by 3 and 5, print "Frontend Simplified"
 * if the number is *not* divisible 3 or 5, print the number  */  

//MY SOLUTION
/* for (let i = 1;i <= 20; i++) {
    console.log(i + 1);
    let str = i % 3 && i && 5 ? 'Frontend Simplified' : i
    console.log(str)
    let stri = i % 3 == 0 ? 'Frontend' : i
    console.log(stri)
    let strin = i % 5 == 0 ? 'Simplified' : i
    console.log(strin)

} */
// CORRECT SOLUTION

/* for (let i = 1; i <= 20; ++i) {
    
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(`${i} -> Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} -> Frontend`)
    }

    else if (i % 5 === 0) {
        console.log(`${i} -> Simplified`)
    }
    
    else {
        console.log(i)
    }
} */


////////EXERCISE 2///////
/**
 * Print out every character from the string:
 * "Frontend Simplified" */  

/* const str = "Frontend Simplified"
for (let i = 0; i < str.length; ++i) {
console.log(str[i])

}

 */


///////////FUNCTIONS/////////





//Function definition
/* function welcomePersonToFES(firstName, lastName) {
console.log(`Welcome to Frontend Simplified, ${firstName} ${lastName}`) 
}
// Call the Function
welcomePersonToFES('Gurami', 'kiknadze') ;
welcomePersonToFES('Gur1ko', 'Gur1co') ; */
//
/* function fn() {
    return 5
    console.log('my function')
}

fn() */

/* function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
}

console.log(sumOfTwoNumbers(10, 20)); */ //a - argument when you call the function, 
// p - when you define the function



///////EXERCISE 3//////

/** Create a function that converts Celsius to Farenheit 
 * 
 * F = C * 1.8 + 32
 * 
 * 
*/
/// my answer

/* function celsusToFarenheit(num) {
    return num * 1.8 + 32
}
console.log(celsusToFarenheit(21))
 */


/// correct answer


/* function celsiusToFarenheit(celsius) {
    let farenheit = celsius * 1.8 + 32
    return farenheit
}

console.log(celsiusToFarenheit(0))

 */


// I PREFER MINE, CAUSE ITS SIMPLER


// we can also use const


/* const celsiusToFarenheit = (celsius) => {
    return celsius * 1.8 + 32
}

console.log(celsiusToFarenheit(0)) */


///////////ARRAYS//////////
///////////////////////////

/* let arr = [20, 30, 40, 50, 100] */

// First element of array

/* console.log(arr[0])


// last element of array
console.log(arr[arr.length - 1])

//add elements to end of array

arr.push(200) */
// [20, 30, 40, 50, 100, true]
//IIF we have only one element in our statement we can use "element" without additional bracket.
/* let newArr = arr.filter(element => element <= 50
)


console.log(newArr)

 */

////exercise///
/**
 * filter out all the 'FAIL' elements in an array
 * 
 *  */


/* let grades = ['A+', 'A', 'FAIL']
 */
/* let goodGrades = grades.filter(element => element !== 'FAIL')

console.log(goodGrades)

 */
// create a new empty array 'goodGrades'
/* let goodGrades = []
for (let i = 0; i < grades.length; ++i) {
    if (grades[i] !== 'FAIL') {
        goodGrades.push(grades[i]);
    } */
    //add the current element onto 'goodGrades' only if 
    //the current element is not equal to 'FAIL'

/*     console.log(goodGrades);
}  */

/// returns each element in what we want 
/* let arr = [1, 4, 9, 16]

let newArray = arr.map(element => 'dog')

console.log(newArray)

 */

/////exercise///
////turn each element into cent////

/* let dollars = [1,5,10,3]

let cents = dollars.map(element => element *100 )
console.log(cents) */


////now without .map method
/*
for (let i = 0; i < grades.length; ++i) {
    if (grades[i] !== 'FAIL') {
        goodGrades.push(grades[i]);
    } */
    //add the current element onto 'goodGrades' only if 
    //the current element is not equal to 'FAIL'

/*     console.log(goodGrades);
}  */

/* let dollars = [1, 5, 10, 3];

let cents = [];

for (let i = 0; i < dollars.length; ++i) {
    cents.push(dollars[i] * 100);

}
console.log(cents) */




///////OBJECTS////////////
///////////////////////////
////////////////////////
////////////////////////////

// used to store multiple properties in one variable

/* let userFirstName = 'Gurami'
let userLastName = 'Kiknadze'
let UserDiscordId = 'Gur1ko'
let userSubscriptionStatus = 'VIP'
 */



/* let users = [
    {
    username: 'Gurami',
    email: 'blabla@gmail.com',
    password: 'test123',
    userSubscriptionStatus: 'VIP',
    userDiscordId: 'Gur1ko',
    lessonsCompleted: [0, 1]
}, 
{
    username: 'george',
    email: 'blabla@gmail.com',
    password: 'test321',
    userSubscriptionStatus: 'VIP',
    userDiscordId: 'georgur1ko',
    lessonsCompleted: [0, 1]
},
];
function login(email, password) {   
    for (let i = 0; i < users.length; ++i) {
    console.log('this ran')

    if (users[i].email === email) {
    console.log(users[i]);
    if (users[i].password === password) {
    console.log(email, password) 
    console.log('log the user in - the derails are correct')
            }
    else {
    console.log('password incorrect, try again')
            }
        }
    return;
    }
    console.log('couldnt find an email that matches')
    }


login('blabla@gmail.com', 'test123');

 */

let users = [
{
    username: 'Gurami',
    email: 'gg@gmail.com',
    password: 'test123',
    userSubscriptionStatus: 'VIP',
    userDiscordId: '123',
    lessonsCompleted: [0, 2, 5, 10]
}, 
{
    username: 'rami',
    email: 'gg@gmail.com',
    password: 'test123',
    userSubscriptionStatus: 'VIP',
    userDiscordId: '123',
    lessonsCompleted: [0, 2, 5, 10]
},
];
/* function login(username, email, password, userSubscriptionStatus, usersDiscordId, lessonsCompleted) {
    for (let i = 0; i < users.length; ++1){
        if (user[i].username === username) {
            console.log(users[i]);
        if (user[i].email === email) {
            console.log(users[i]);
        if (user[i].password === password) {
            console.log(users[i]);
        if (user[i].userSubscriptionStatus === userSubscriptionStatus) {
            console.log(users[i]);
        if (user[i].userDiscordId === userDiscordId) {
            console.log(users[i]);
        if (user[i].lessonsCompleted === lessonsCompleted) {
            console.log(users[i]);
            console.log(username, email, password, userSubscriptionStatus, userDiscordId, lessonsCompleted)
            console.log('log the user in - the details are correct')
            
        }
        else {
            console.log('incorrect details')
        }
    }
}
        }
    }
    return;
}

}
login('Gurami', 'gg@gmail.com', 'test123', 'VIP', '123', [0, 2, 5, 10]) */ 

/* if (users[i].email === email) {
    console.log(users[i]);
    if (users[i].password === password) {
    console.log(email, password) 
    console.log('log the user in - the derails are correct')
            }
    else {
    console.log('password incorrect, try again')
            }
        }
    return;
    }
    console.log('couldnt find an email that matches')
    }


login('blabla@gmail.com', 'test123');
 */



/* function register(
    namme,
    email,
    password,
    userSubscriptionStatus,
    discordId,
    lessonsCompleted
) {
    users.push(user);
}

register( {
    username: "Guri",
    email: "guri@gmail.com",
    password:"12345678",
    userSubscriptionStatus:"VIP",
    userDiscordId:"gg123",
    lessonsCompleted:[0, 2, 1, 5]
});

console.log(users) */



///////DOM//////////
////////////////////
////////////////////

//Document Object Model allows you  to access and change the styiling and content of elements on your website




/* // First way of accessing an element
console.log(document.querySelector('h1'));


// second way
console.log(document.getElementById('title'))

// class - .       id - # */


//change HTML
/* document.querySelector('.title').innerHTML += 'Frontend Simplified'





//Change CSS

document.querySelector(".title").style.dontSize = '16px'

function toggleDarkMode() {
    document.querySelector(".title").style.color = 'red'

} */

function toggleDarkMode() {
document.querySelector('body').classList.toggle("dark-theme")
}