// to create an object in javascript

// using literal notation:
const myObject = {};

// Using the Object() constructor function:
const muObject = new Object();

const cat = {
    age: 2,
    name: 'Bailey',
    meow: function () {
        console.log('Meow!');
    },
    greet: function () {
        console.log("hello ${name}");
    }

}
const printer = {};

printer.on = true;
printer.mode = 'black and white';
printer['remainingSheets'] = 168;
printer.print = function () {
    console.log('The printer is printing!');
};
delete printer.remainingSheets;

function changeToEight(n) {
    return n = 8; // whatever n was, it is now 8... but only in this function!
}
let n = 7;

changeToEight(n);


let originalObject = {
    favoriteColor: 'red'
};

function setToBlue(object) {
    object.favoriteColor = 'blue';
}

setToBlue(originalObject);

originalObject.favoriteColor;
// 'blue'

const parrot = {
    group: 'bird',
    feathers: true,
    chirp: function () {
        //console.log('Chirp chirp!');
    }
};

const pigeon = {
    group: 'bird',
    feathers: true,
    chirp: function () {
        //console.log('Chirp chirp!');
    }
};

parrot === pigeon;

// false
const developer = {
    name: 'Andrew',
    sayHello: function () {
        console.log('Hi there!');
    },
    favoriteLanguage: function (language) {
        console.log(`My favorite programming language is ${language}`);
    }
};

//developer.sayHello();
// 'Hi there!'

//developer['sayHello']();
// 'Hi there!'


//developer.favoriteLanguage('JavaScript');
// My favorite programming language is JavaScript'

const triangle = {
    type: 'scalene',
    identify: function () {
        console.log(`This is a ${this.type} triangle.`);
    }
};

//triangle.identify();
// 'This is a scalene triangle.'

const dog = {
    name: "Jodi",
    age: 7,
    whatIsThis: function () {
        console.log(this);
    },
    woof: function () {
        console.log(this.name + " says 'woof!'");
    },
    ageOneYear: function () {
        this.age += 1;
        console.log("Current age: " + this.age);
    }
};
//dog.ageOneYear();
const tree = {
    type: 'redwood',
    leaves: 'green',
    height: 80,
    age: 15,
    growOneFoot: function () {
        this.height += 1;
    }
};

const chameleon = {
    color: 'green',
    changecolor: function () {
        if (this.color === 'green') {
            return (this.color = 'pink');
        } else if (this.color === 'pink') {
            return (this.color = 'green');
        }
    }
}
/*console.log(chameleon.color);
chameleon.changecolor();
console.log(chameleon.color);
chameleon.changecolor();
console.log(chameleon.color);*/

function whoThis() {
    this.trickyish = true
}
var currentlyEating = 'ice cream';

//window.currentlyEating === currentlyEating  this windows object only avaiable on browser, it means actually the window of the browser
// true


const dictionary = {
    car: 'automobile',
    apple: 'healthy snack',
    cat: 'cute furry animal',
    dog: 'best friend'
};

//onsole.log(Object.keys(dictionary));

//console.log(Object.values(dictionary));

const returnAFunction = function () {
    return function () {
        //console.log("Hello from inside a function!");
    }
}

const newFunction = returnAFunction();

//newFunction();
//Hello from inside a function!

//returnAFunction()();
//Hello from inside a function!

higherOrderFunction = function () {
    return function () {
        return 8;
    }
}

function callAndAdd(n, callbackFunction) {
    return n + callbackFunction();
}

function returnsThree() {
    return 3;
}

//console.log(callAndAdd(4, returnsThree));

function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            console.log(array[i]);
        }
    }
}

function isPositive(n) {
    return n > 0;
};

//console.log(each([-2, 7, 11, -4, -10], isPositive));

array = [1, 5, 2, 4, 6, 3]
array.forEach(function (n) {
    if (n % 2 !== 0) {
        //console.log(n);
    }
});

function logIfOdd(n) {
    if (n % 2 !== 0) {
        //console.log(n);
    }
}

array.forEach(logIfOdd);

const favoriteFlavors = ['cookie dough', 'salted caramel', 'toffee'];
favoriteFlavors.forEach(function (flavor) {
    // console.log("I enjoy " + flavor + "ice cream.");
})

const names = ['David', 'Richard', 'Veronika'];

const nameLengths = names.map(function (name) {
    //return console.log(name.length);
});
let numbers = [5, 42, 4, 81, 58, 33];

//Mulitply every valeu by two.
let multipliedNumbers = numbers.map(number => number * 2);

//console.log(multipliedNumbers);
//console.log(numbers);
//numbers.map(() => console.log('Hey!'));
// map() actually like forEach(), but forEach modify the original array
// with map () we take a copy of that function and return the modified one
// forEach() doesnt return anything.
let team = [{
        name: 'Lydia',
        age: 20,
    },
    {
        name: 'Peter',
        age: 23,
    },
]
team.map(teamMember => teamMember.age += 10);
//console.log(team);
// Nubers higher tan 18, but lower than 50.
let filteredNumbers =
    numbers.filter(number => (number > 18 && number < 50));

//console.log(filteredNumbers)

// Accumulator and current value added.
let reducedValue = numbers.reduce((acc, cur) => (acc * cur))
// reduce return a number and take 2 argement the Accumulator and current value and
// the 2 value start from zero and current value where the pointer is and the 
//accumulator the summation of the all value til current value.
//console.log(reducedValue)


/* Using map()
 *
 * Using the musicData array and map():
 *   - Return a string for each item in the array in the following format:
 *     <album-name> by <artist> sold <sales> copies
 *   - Store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits
 */

const musicData = [{
        artist: 'Adele',
        name: '25',
        sales: 1731000
    },
    {
        artist: 'Drake',
        name: 'Views',
        sales: 1608000
    },
    {
        artist: 'Beyonce',
        name: 'Lemonade',
        sales: 1554000
    },
    {
        artist: 'Chris Stapleton',
        name: 'Traveller',
        sales: 1085000
    },
    {
        artist: 'Pentatonix',
        name: 'A Pentatonix Christmas',
        sales: 904000
    },
    {
        artist: 'Original Broadway Cast Recording',
        name: 'Hamilton: An American Musical',
        sales: 820000
    },
    {
        artist: 'Twenty One Pilots',
        name: 'Blurryface',
        sales: 738000
    },
    {
        artist: 'Prince',
        name: 'The Very Best of Prince',
        sales: 668000
    },
    {
        artist: 'Rihanna',
        name: 'Anti',
        sales: 603000
    },
    {
        artist: 'Justin Bieber',
        name: 'Purpose',
        sales: 554000
    }
];

const albumSalesStrings = musicData.map((music) => (music.name + " by " + music.artist + " sold " + music.sales + " copies"));

//console.log(albumSalesStrings);

const REnames = ['David', 'Richard', 'Veronika'];

const shortNames = REnames.filter(function (name) {
    return (name.length < 8);
});
//console.log(shortNames)

/* Using filter()
 *
 * Using the musicData array and filter():
 *   - Return only album objects where the album's name is
 *     10 characters long, 25 characters long, or anywhere in between
 *   - Store the returned data in a new `results` variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 */

const musicData2 = [{
        artist: 'Adele',
        name: '25',
        sales: 1731000
    },
    {
        artist: 'Drake',
        name: 'Views',
        sales: 1608000
    },
    {
        artist: 'Beyonce',
        name: 'Lemonade',
        sales: 1554000
    },
    {
        artist: 'Chris Stapleton',
        name: 'Traveller',
        sales: 1085000
    },
    {
        artist: 'Pentatonix',
        name: 'A Pentatonix Christmas',
        sales: 904000
    },
    {
        artist: 'Original Broadway Cast Recording',
        name: 'Hamilton: An American Musical',
        sales: 820000
    },
    {
        artist: 'Twenty One Pilots',
        name: 'Blurryface',
        sales: 738000
    },
    {
        artist: 'Prince',
        name: 'The Very Best of Prince',
        sales: 668000
    },
    {
        artist: 'Rihanna',
        name: 'Anti',
        sales: 603000
    },
    {
        artist: 'Justin Bieber',
        name: 'Purpose',
        sales: 554000
    }
];

const results = musicData2.filter((music) => (music.name.length <= 25 && music.name.length >= 10));

//console.log(results);

const symbol = '¥';

function displayPrice(price) {
    const symbol = '$';
    //console.log(symbol + price);
}

displayPrice('80');
// '$80'

let nv = 8;

function functionOne() {
    let nv = 9;

    function functionTwo() {
        let nv = 10;
        //console.log(nv);  // First log
    }

    functionTwo();

    //console.log(nv);  // Second log
}

functionOne();

//console.log(nv);  // Third log

// 10, 9, 8

function remember(number) {
    return function () {
        return number;
    }
}

const returnedFunction = remember(5);

//console.log( returnedFunction() );
// 5
//this is a Closure, it is just like recursion

const myName = 'Andrew';

function introduceMyself() {
    const you = 'student';

    function introduce() {
        //console.log(`Hello, ${you}, I'm ${myName}!`);
    }

    return introduce();
}

introduceMyself();
// 'Hello, student, I'm Andrew!'

function myCounter() {
    let count = 0;

    return function () {
        count += 1;
        return count;
    };
}
let counter = myCounter();
counter()
counter()
counter()
//console.log(counter());

// Here are two function which I think they should return the same result
// the difference is the first one has a anoymous function while the second one has a normal function.

function expandArray0() {
    let myArray = [1, 1, 1];
    return (() => (myArray.push(1)))
}

function expandArray1() {
    let myArray = [1, 1, 1];
    return function () {
        myArray.push(1);
        return myArray;
    }
}

let Arr0 = expandArray0();
let Arr1 = expandArray1();
// this is wired.
//console.log(Arr0())
//console.log(Arr1())

//4
//[ 1, 1, 1, 1 ]

// this is what I know as recursion.
let out = 0;

function expand() {

    if (out > 4) {
        return out;
    } else {
        out += 1;
        return expand();
    }
}

let outexpand = expand();
//console.log(outexpand)


//Function Declarations vs Function Expressions

// returnHello is a function declarations
function returnHello() {
    return 'Hello!';
}
// here myfunction is called function expression.
// anonymous
const myFunction0 = function () {
    return 'Hello!';
};

// named
const myFunction1 = function returnHello() {
    return 'Hello!';
};

//Immediately Invoked function expressions
(function sayHi() {
    //console.log('Hi there!');
})();
// alerts 'Hi there!'

(function (name) {
    //console.log(`Hi, ${name}`);
})('Andrew');

// alerts 'Hi, Andrew'

(function (x, y) {
    //console.log(x * y);
})(2, 3);

// 6

//((x, y) => (console.log(x * y)))(2, 3) //6
//(((x, y) => (console.log(x * y)))(2, 3))
// Constructor Functions
// 
function SoftwareDeveloper(favoriteLanguage) {
    this.favoriteLanguage = favoriteLanguage;
}
let me = new SoftwareDeveloper('JavaScript')

//console.log(me)