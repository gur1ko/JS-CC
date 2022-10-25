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

let str = "Frontend Simplified"
for (let i = 0; i < str.length; ++i) {
console.log(str[i])

}
























