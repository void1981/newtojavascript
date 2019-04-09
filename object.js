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

//let engineer = new SoftwareDeveloper();
//let programmer = new SoftwareDeveloper();

//console.log(engineer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }

//console.log(programmer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }

function SoftwareDeveloper2(name) {
    this.favoriteLanguage = 'JavaScript';
    this.name = name;
}

let engineer = new SoftwareDeveloper2('Abdo')

//console.log(engineer)

function Hero(name, role) {
    this.name = name;
    this.role = role;

    this.introduce = function () {
        console.log(`My name is ${this.name} and I am a ${this.role}.`);
    }

}
const Taylor = new Hero('Taylor', 'mother')
//Taylor.introduce()

const riley = new Hero('Riley', 'coach')
//console.log(riley.role)

//riley.introduce()

/*

Now it's your turn to create a constructor function. Declare a
`Sandwich` constructor function that takes three parameters:

1. `bread` (string) - the type of bread for the sandwich (e.g. "Wheat")
2. `meat` (array) - the meats to put on the sandwich
   (e.g. `[]` for a vegetarian sandwich!)
3. `vegetables` (array) - the vegetables to include in the sandwich

*/
function Sandwich(bread, meat, vegetables) {
    this.bread = bread;
    this.meat = meat;
    this.vegetables = vegetables;
}

const shawarma = new Sandwich('Wheat', 'Chicken', ['Onion', 'Pfeffer'])
//Another wired way to check the type of constructor function 
// true if Sandwich is a constructor function of object shawarma which it is.
//console.log(shawarma instanceof Sandwich)


var sayName = function (lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}.`)
};

var stacey = {
    name: 'Stacey',
    age: 34
};

var languages2 = ['JavaScript', 'Ruby', 'Python'];
// Here stacey is replace with this in the function sayName and that
// because call()
//sayName.call(stacey, languages2[0], languages2[1], languages2[2])

// we can do more with apply() , apply can take array languages2 and
// expend that array like in call
//sayName.apply(stacey, languages2)

// bind() it is just like call but it is not invoked the function
// instead it return a new function with the argements that passed
// though it. So 
let newfn = sayName.bind(stacey, languages2[0], languages2[1], languages2[2])
// would return in newfn a copy of sayName which can invoked later.
//newfn()

// new Binding meaning 'this' in new will mean this object.

function Animal(color, name, type) {
    //this = {}
    this.color = color;
    this.name = name;
    this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');
//console.log(zebra)

const mockingbird = {
    title: 'To Kill a Mockingbird',
    describe: function () {
        console.log(`${this.title} is a classic novel`);
    }
};

//mockingbird.describe();
// 'To Kill a Mockingbird is a classic novel'

const pride = {
    title: 'Pride and Prejudice'
};

//mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'

const dog0 = {
    age: 5,
    growOneYear: function () {
        this.age += 1;
    }
};

function invokeTwice(cb) {
    cb();
    cb();
}
const myGrow0 = dog0.growOneYear.bind(dog0);
invokeTwice(myGrow0)

//console.log(dog0.age)
// this is the last thing about call, apply and bind.
const driver = {
    name: 'Danica',
    displayName: function () {
        console.log(`Name: ${this.name}`);
    }
};

const car = {
    name: 'Fusion'
};

const fusion = driver.displayName.bind(car)
//fusion()
// So the prototype allows us to create the method outside the object.
function Apple(color, weight) {
    this.color = color;
    this.weight = weight;
}
// that means saving memory and 
Apple.prototype = {
    eat: function () {
        return "eat the apple";
    },
    throw: function () {
        return 'throw the apple';
    }
}

var apple1 = new Apple('red', 99);
var apple2 = new Apple('gree', 109);
var apple3 = new Apple('yellow', 299);
// the prototype object saved as __proto__:ojbect inside the original object.
// __proto__: object is a link with the object that we can access through that object.
// but we cannot modify the __proto__ :object through the object (Constructor function)
//we can invoke (call) any method inside __proto__ with your object.

// (A) normal constructor function

function Dalmatian(name) {
    this.name = name;

    this.bark = function () {
        console.log(`${this.name} barks!`);
    };
}

// (B) constructor function only with variables and the method through the prototype 

function Dalmatian(name) {
    this.name = name;
}

Dalmatian.prototype.bark = function () {
    console.log(`${this.name} barks!`);
};


//join()

const my2Array = [1, 2, 3];
// console.log(my2Array.join(''));
// 123

function Hamster() {
    this.hasFur = true;
}

let waffle = new Hamster();
let pancake = new Hamster();

Hamster.prototype.eat = function () {
    console.log('Chomp chomp chomp!');
};

//waffle.eat();
// 'Chomp chomp chomp!'

//pancake.eat();
// 'Chomp chomp chomp!'

Hamster.prototype = {
    isHungry: false,
    color: 'brown'
};

//console.log(waffle.color);
// undefined

//waffle.eat();
// 'Chomp chomp chomp!'

//console.log(pancake.isHungry);
// undefined

const muffin = new Hamster();

//muffin.eat();
// TypeError: muffin.eat is not a function

//console.log(muffin.isHungry);
// false

//console.log(muffin.color);
// 'brown'


function Phone() {
    this.operatingSystem = 'Android';
}

Phone.prototype.screenSize = 6;

const myPhone = new Phone();

// hasOwnProperty check whether this method its own property or not.
const own = myPhone.hasOwnProperty('operatingSystem');
// true means yes it is.
//console.log(own);
// true

const inherited = myPhone.hasOwnProperty('screenSize');

//console.log(inherited);
// false

const rodent = {
    favoriteFood: 'cheese',
    hasTail: true
};

function Mouse() {
    this.favoriteFood = 'cheese';
}

Mouse.prototype = rodent;

const ralph = new Mouse();

const result = rodent.isPrototypeOf(ralph);

console.log(result);
// true
// Object.getPrototypeof return a copy of the prototype which is connected to this object.
const myPrototype = Object.getPrototypeOf(ralph);

console.log(myPrototype);
// { favoriteFood: 'cheese', hasTail: true }