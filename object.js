// to create an object in javascript

// using literal notation:
const myObject = {};

// Using the Object() constructor function:
const muObject = new Object();

const cat = {
  age: 2,
  name: "Bailey",
  meow: function() {
    console.log("Meow!");
  },
  greet: function() {
    console.log("hello ${name}");
  }
};
const printer = {};

printer.on = true;
printer.mode = "black and white";
printer["remainingSheets"] = 168;
printer.print = function() {
  console.log("The printer is printing!");
};
delete printer.remainingSheets;

function changeToEight(n) {
  return (n = 8); // whatever n was, it is now 8... but only in this function!
}
let n = 7;

changeToEight(n);

let originalObject = {
  favoriteColor: "red"
};

function setToBlue(object) {
  object.favoriteColor = "blue";
}

setToBlue(originalObject);

originalObject.favoriteColor;
// 'blue'

const parrot = {
  group: "bird",
  feathers: true,
  chirp: function() {
    //console.log('Chirp chirp!');
  }
};

const pigeon = {
  group: "bird",
  feathers: true,
  chirp: function() {
    //console.log('Chirp chirp!');
  }
};

parrot === pigeon;

// false
const developer = {
  name: "Andrew",
  sayHello: function() {
    console.log("Hi there!");
  },
  favoriteLanguage: function(language) {
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
  type: "scalene",
  identify: function() {
    console.log(`This is a ${this.type} triangle.`);
  }
};

//triangle.identify();
// 'This is a scalene triangle.'

const dog = {
  name: "Jodi",
  age: 7,
  whatIsThis: function() {
    console.log(this);
  },
  woof: function() {
    console.log(this.name + " says 'woof!'");
  },
  ageOneYear: function() {
    this.age += 1;
    console.log("Current age: " + this.age);
  }
};
//dog.ageOneYear();
const tree = {
  type: "redwood",
  leaves: "green",
  height: 80,
  age: 15,
  growOneFoot: function() {
    this.height += 1;
  }
};

const chameleon = {
  color: "green",
  changecolor: function() {
    if (this.color === "green") {
      return (this.color = "pink");
    } else if (this.color === "pink") {
      return (this.color = "green");
    }
  }
};
/*console.log(chameleon.color);
chameleon.changecolor();
console.log(chameleon.color);
chameleon.changecolor();
console.log(chameleon.color);*/

function whoThis() {
  this.trickyish = true;
}
var currentlyEating = "ice cream";

//window.currentlyEating === currentlyEating  this windows object only avaiable on browser, it means actually the window of the browser
// true

const dictionary = {
  car: "automobile",
  apple: "healthy snack",
  cat: "cute furry animal",
  dog: "best friend"
};

//onsole.log(Object.keys(dictionary));

//console.log(Object.values(dictionary));

const returnAFunction = function() {
  return function() {
    //console.log("Hello from inside a function!");
  };
};

const newFunction = returnAFunction();

//newFunction();
//Hello from inside a function!

//returnAFunction()();
//Hello from inside a function!

higherOrderFunction = function() {
  return function() {
    return 8;
  };
};

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
}

//console.log(each([-2, 7, 11, -4, -10], isPositive));

array = [1, 5, 2, 4, 6, 3];
array.forEach(function(n) {
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

const favoriteFlavors = ["cookie dough", "salted caramel", "toffee"];
favoriteFlavors.forEach(function(flavor) {
  // console.log("I enjoy " + flavor + "ice cream.");
});

const names = ["David", "Richard", "Veronika"];

const nameLengths = names.map(function(name) {
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
let team = [
  {
    name: "Lydia",
    age: 20
  },
  {
    name: "Peter",
    age: 23
  }
];
team.map(teamMember => (teamMember.age += 10));
//console.log(team);
// Nubers higher tan 18, but lower than 50.
let filteredNumbers = numbers.filter(number => number > 18 && number < 50);

//console.log(filteredNumbers)

// Accumulator and current value added.
let reducedValue = numbers.reduce((acc, cur) => acc * cur);
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

const musicData = [
  {
    artist: "Adele",
    name: "25",
    sales: 1731000
  },
  {
    artist: "Drake",
    name: "Views",
    sales: 1608000
  },
  {
    artist: "Beyonce",
    name: "Lemonade",
    sales: 1554000
  },
  {
    artist: "Chris Stapleton",
    name: "Traveller",
    sales: 1085000
  },
  {
    artist: "Pentatonix",
    name: "A Pentatonix Christmas",
    sales: 904000
  },
  {
    artist: "Original Broadway Cast Recording",
    name: "Hamilton: An American Musical",
    sales: 820000
  },
  {
    artist: "Twenty One Pilots",
    name: "Blurryface",
    sales: 738000
  },
  {
    artist: "Prince",
    name: "The Very Best of Prince",
    sales: 668000
  },
  {
    artist: "Rihanna",
    name: "Anti",
    sales: 603000
  },
  {
    artist: "Justin Bieber",
    name: "Purpose",
    sales: 554000
  }
];

const albumSalesStrings = musicData.map(
  music =>
    music.name + " by " + music.artist + " sold " + music.sales + " copies"
);

//console.log(albumSalesStrings);

const REnames = ["David", "Richard", "Veronika"];

const shortNames = REnames.filter(function(name) {
  return name.length < 8;
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

const musicData2 = [
  {
    artist: "Adele",
    name: "25",
    sales: 1731000
  },
  {
    artist: "Drake",
    name: "Views",
    sales: 1608000
  },
  {
    artist: "Beyonce",
    name: "Lemonade",
    sales: 1554000
  },
  {
    artist: "Chris Stapleton",
    name: "Traveller",
    sales: 1085000
  },
  {
    artist: "Pentatonix",
    name: "A Pentatonix Christmas",
    sales: 904000
  },
  {
    artist: "Original Broadway Cast Recording",
    name: "Hamilton: An American Musical",
    sales: 820000
  },
  {
    artist: "Twenty One Pilots",
    name: "Blurryface",
    sales: 738000
  },
  {
    artist: "Prince",
    name: "The Very Best of Prince",
    sales: 668000
  },
  {
    artist: "Rihanna",
    name: "Anti",
    sales: 603000
  },
  {
    artist: "Justin Bieber",
    name: "Purpose",
    sales: 554000
  }
];

const results = musicData2.filter(
  music => music.name.length <= 25 && music.name.length >= 10
);

//console.log(results);

const symbol = "¥";

function displayPrice(price) {
  const symbol = "$";
  //console.log(symbol + price);
}

displayPrice("80");
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
  return function() {
    return number;
  };
}

const returnedFunction = remember(5);

//console.log( returnedFunction() );
// 5
//this is a Closure, it is just like recursion

const myName = "Andrew";

function introduceMyself() {
  const you = "student";

  function introduce() {
    //console.log(`Hello, ${you}, I'm ${myName}!`);
  }

  return introduce();
}

introduceMyself();
// 'Hello, student, I'm Andrew!'

function myCounter() {
  let count = 0;

  return function() {
    count += 1;
    return count;
  };
}
let counter = myCounter();
counter();
counter();
counter();
//console.log(counter());

// Here are two function which I think they should return the same result
// the difference is the first one has a anoymous function while the second one has a normal function.

function expandArray0() {
  let myArray = [1, 1, 1];
  return () => myArray.push(1);
}

function expandArray1() {
  let myArray = [1, 1, 1];
  return function() {
    myArray.push(1);
    return myArray;
  };
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
  return "Hello!";
}
// here myfunction is called function expression.
// anonymous
const myFunction0 = function() {
  return "Hello!";
};

// named
const myFunction1 = function returnHello() {
  return "Hello!";
};

//Immediately Invoked function expressions
(function sayHi() {
  //console.log('Hi there!');
})();
// alerts 'Hi there!'

(function(name) {
  //console.log(`Hi, ${name}`);
})("Andrew");

// alerts 'Hi, Andrew'

(function(x, y) {
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
let me = new SoftwareDeveloper("JavaScript");

//console.log(me)

//let engineer = new SoftwareDeveloper();
//let programmer = new SoftwareDeveloper();

//console.log(engineer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }

//console.log(programmer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }

function SoftwareDeveloper2(name) {
  this.favoriteLanguage = "JavaScript";
  this.name = name;
}

let engineer = new SoftwareDeveloper2("Abdo");

//console.log(engineer)

function Hero(name, role) {
  this.name = name;
  this.role = role;

  this.introduce = function() {
    console.log(`My name is ${this.name} and I am a ${this.role}.`);
  };
}
const Taylor = new Hero("Taylor", "mother");
//Taylor.introduce()

const riley = new Hero("Riley", "coach");
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

const shawarma = new Sandwich("Wheat", "Chicken", ["Onion", "Pfeffer"]);
//Another wired way to check the type of constructor function
// true if Sandwich is a constructor function of object shawarma which it is.
//console.log(shawarma instanceof Sandwich)
// true
var sayName = function(lang1, lang2, lang3) {
  console.log(
    `My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}.`
  );
};

var stacey = {
  name: "Stacey",
  age: 34
};

var languages2 = ["JavaScript", "Ruby", "Python"];
// Here stacey is replace with this in the function sayName and that
// because call()
//sayName.call(stacey, languages2[0], languages2[1], languages2[2])

// we can do more with apply() , apply can take array languages2 and
// expend that array like in call
//sayName.apply(stacey, languages2)

// bind() it is just like call but it is not invoked the function
// instead it return a new function with the argements that passed
// though it. So
let newfn = sayName.bind(stacey, languages2[0], languages2[1], languages2[2]);
// would return in newfn a copy of sayName which can invoked later.
//newfn()

// new Binding meaning 'this' in new will mean this object.

function Animal(color, name, type) {
  //this = {}
  this.color = color;
  this.name = name;
  this.type = type;
}

var zebra = new Animal("black and white", "Zorro", "Zebra");
//console.log(zebra)

const mockingbird = {
  title: "To Kill a Mockingbird",
  describe: function() {
    console.log(`${this.title} is a classic novel`);
  }
};

//mockingbird.describe();
// 'To Kill a Mockingbird is a classic novel'

const pride = {
  title: "Pride and Prejudice"
};

//mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'

const dog0 = {
  age: 5,
  growOneYear: function() {
    this.age += 1;
  }
};

function invokeTwice(cb) {
  cb();
  cb();
}
const myGrow0 = dog0.growOneYear.bind(dog0);
invokeTwice(myGrow0);

//console.log(dog0.age)
// this is the last thing about call, apply and bind.
const driver = {
  name: "Danica",
  displayName: function() {
    console.log(`Name: ${this.name}`);
  }
};

const car = {
  name: "Fusion"
};

const fusion = driver.displayName.bind(car);
//fusion()
// So the prototype allows us to create the method outside the object.
function Apple(color, weight) {
  this.color = color;
  this.weight = weight;
}
// that means saving memory and
Apple.prototype = {
  eat: function() {
    return "eat the apple";
  },
  throw: function() {
    return "throw the apple";
  }
};

var apple1 = new Apple("red", 99);
var apple2 = new Apple("gree", 109);
var apple3 = new Apple("yellow", 299);
// the prototype object saved as __proto__:ojbect inside the original object.
// __proto__: object is a link with the object that we can access through that object.
// but we cannot modify the __proto__ :object through the object (Constructor function)
//we can invoke (call) any method inside __proto__ with your object.

// (A) normal constructor function

function Dalmatian(name) {
  this.name = name;

  this.bark = function() {
    console.log(`${this.name} barks!`);
  };
}

// (B) constructor function only with variables and the method through the prototype

function Dalmatian(name) {
  this.name = name;
}

Dalmatian.prototype.bark = function() {
  console.log(`${this.name} barks!`);
};
// also could be
//Dalmatian.prototype = bark;
// const bark = {
//     bark: function (){
//         console.log(`${this.name} barks!`);
//     }
// }

//join()

const my2Array = [1, 2, 3];
// console.log(my2Array.join(''));
// 123

function Hamster() {
  this.hasFur = true;
}

let waffle = new Hamster();
let pancake = new Hamster();

Hamster.prototype.eat = function() {
  //console.log("Chomp chomp chomp!");
};

//waffle.eat();
// 'Chomp chomp chomp!'

//pancake.eat();
// 'Chomp chomp chomp!'

Hamster.prototype = {
  isHungry: false,
  color: "brown"
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
  this.operatingSystem = "Android";
}

Phone.prototype.screenSize = 6;

const myPhone = new Phone();

// hasOwnProperty check whether this method its own property or not.
const own = myPhone.hasOwnProperty("operatingSystem");
// true means yes it is.
//console.log(own);
// true

const inherited = myPhone.hasOwnProperty("screenSize");

//console.log(inherited);
// false

const rodent = {
  favoriteFood: "cheese",
  hasTail: true
};

function Mouse() {
  this.favoriteFood = "cheese";
}

Mouse.prototype = rodent;

const ralph = new Mouse();
// isPrototypeOf return whether or not the the prototype (rodent)
//is applied to this particular object given (ralph)
// as we dont know because this object is new.

//isPrototypeOf is a great way to confirm if an object exists in
//another ojbect's prototype chain.
const result = rodent.isPrototypeOf(ralph);

//console.log(result);
// true

// Object.getPrototypeof return a copy of the prototype which is connected to this object.
const myPrototype = Object.getPrototypeOf(ralph);

//console.log(myPrototype);
// { favoriteFood: 'cheese', hasTail: true }
// The prototype of (ralph) has the same proerties as the result because they
// are the smae object. Object.getPrototype oOf() is great for retrieving
// the prototype of a given object.

function Longboard() {
  this.material = "bamboo";
}

const board = new Longboard();

// Object.constructor return the constructor function of this object
// as following
// console.log(board.constructor);

// function Longboard() {
//   this.material = 'bamboo';
// }

//Keep in mind that if an object was ceeated using literal notation
// its constructor is the built-in Object() constructor function!
const rodent2 = {
  favoriteFood: "cheese",
  hasTail: true
};

//console.log(rodent2.constructor);
// function Object() { [native code] }

const capitals = {
  California: "Sacramento",
  Washington: "Olympia",
  Oregon: "Salem",
  Texas: "Austin"
};

const youtube = Object.getPrototypeOf(capitals);
//console.log(youtube);

// __proto__ is a property is created by defult with the constructor
// function. (__proto__) is a secret link to that object through
// the constructor function.

const bear = {
  claws: true,
  diet: "carnivore"
};
// create an empty constructor function for PolarBear
function PolarBear() {
  // ...
}
PolarBear.prototype = bear;
// create an object snowball with constructor function.
const snowball = new PolarBear();
// adding a private properties to this particular object/
snowball.color = "white";
snowball.favoriteDrink = "cola";
// this is how snowball object looks like.
// {
//     color: 'white',
//     favoriteDrink: 'cola'
//   }
// but it has a secret link prototype through __proto__
// we can execute claws and diet method as we linked them with
// the constructor function PolarBear. in line 906.

//console.log(snowball.claws);
// true

//console.log(snowball.diet);
// 'carnivore'

// to access this secret link propteries we could do so.

//console.log(snowball.__proto__);

// { claws: true, diet: 'carnivore' }
// since the __proto__ property refers to the same object as PolarBear's prototype

//console.log(snowball.__proto__ === bear);

// true

// Object.create() gives us a clean method of establishing protoypal
// inheritance in JavaScript. We can easily extend the prototype chain
// this way, and we can have obejects inherit from just aobut any
// object we want!

// What does that mean ? (In my words)
// When we use Object.create() , we create a new object with the properties
// of the argement object that we passed through the function.
// and return a new object with protoype (Secret link) with these properties.

// lets look at an example.
// this is a normal object (without constructor function).
const mammal = {
  vertebrate: true,
  earBones: 3
};
// rabbit a new object (child) will inherit the properties of mammal as prototype
const rabbit = Object.create(mammal);

// check out rabbit.
//console.log(rabbit);

// {} // nothing because thes properties are secret link in __proto__

//console.log(rabbit.__proto__ === mammal);
// true

//console.log(rabbit.vertebrate);
// true

//console.log(rabbit.earBones);
// 3

//Object.create() nochmal
// It returns a new object whose __proto__ property is set to the object passed into Object.create()
// Using Object.create(), we can have objects inherit from just about any object we want( not only the prototype)
// Object.create() allows us to implement prototypal inheritance without mutaing the prototype

// Object.assign()
// it creates a copy of the its own properties (non-inherited)
// and assign it the the terget object
// so
let target = {};

let source = { number: 7 };

Object.assign(target, source);

//onsole.log(target);
// { number: 7 }

// Object.assign doesn't create and return a new object
// it just copies the properties from source to terget
// and not all properties (only its own propteries "the properties included in the object or the constructor function").

let target0 = { letter: "a", number: 11 };

let source0 = { number: 7 };

Object.assign(target0, source0);

//console.log(target0);
// { letter: 'a', number: 7 }

// Object.assign() can also mix the properties from different sources.
// like so here we have three different objects as sources.
// and we would mix all these properteries togother in one object.
const duck = {
  hasBill: true
};
const beaver = {
  hasTail: true
};
const otter = {
  hasFur: true,
  feet: "webbed"
};

const platypus = Object.assign({}, duck, beaver, otter);

//console.log(platypus);
// { hasBill: true, hasTail: true, hasFur: true, feet: 'webbed' }

// note: these propteries are not prototype for platypus (non-inherited)
// these properties are not secret linked

// If there any name collisions between any of the properties of the sources objects
// the order of the sources is matter while the sources are executed by order.
// the last properties with the same name will be the final value.

const duck2 = {
  hasBill: true,
  feet: "orange"
};
const beaver2 = {
  hasTail: true
};
const otter2 = {
  hasFur: true,
  feet: "webbed"
};

const platypus2 = Object.assign({}, duck2, beaver2, otter2);

//console.log(platypus2);
// { hasBill: true, hasTail: true, hasFur: true, feet: 'webbed' }

// Factory Functions
/* A factory function is a function that returns an object, but isn't itself
  a class or constructor. As such, we invoke a factory function as a normal
  function without using the (new)operator. Using a factory function
  we can easily create object instances without the complexity of 
  classes and constructors.
  */

function Basketball(color) {
  return {
    color: color,
    numDots: 35000
  };
}

// the function itself return the properties as an object.
// this is different from a constructor function which returns ist object automatically.
// note here we don't this keyword.

const orangeBasketball = Basketball("orange");

//console.log(orangeBasketball);
// { color: 'orange', numDots: 35000 }

//Functional Mixins

function CoffeeMaker(object) {
  let needsRefill = false;

  return Object.assign({}, object, {
    pourAll: function() {
      needsRefill = true;
    },
    isEmpty: function() {
      return needsRefill;
    }
  });
}

// Unlike Object.assign with constructor function
// here with factory function which takes in individual property values
// as arguments
// the functional mixin acutually takes in an object itself!
// whichever object is passed in to the function, is merged with
// other objects passed into Object.assign()

const mixedCoffeeMaker = CoffeeMaker({ style: "percolator" });

// mixedCoffeeMaker object now looks like the following:

// {
//     style: 'percolator',
//     pourAll: function () {
//       needsRefill = true;
//     },
//     isEmpty: function () {
//       return needsRefill;
//     }
//   }

// one of the great things about functional mixins is that they are composable
// we can use them as indiviual pieces of code that add specific properties
// like an assembly line.

let person = (function() {
  let privateAge = 0;
  let privateName = "Andrew";

  function privateAgeOneYear() {
    privateAge += 1;
    console.log(`One year has passed! Current age is ${privateAge}`);
  }

  function displayName() {
    console.log(`Name: ${privateName}`);
  }

  function ageOneYear() {
    privateAgeOneYear();
  }

  return {
    name: displayName,
    age: ageOneYear
  };
})();

// here another thing that are more complicated than anything else.
// it's called the revealing Module Pattern
// basically we use the module to provided a privacy for the information.
// which we would like to prevent anyone to access expect JavaScript and the Devepler
// the difference here from the module pattern , is that here we
// return only the information (properties, method , etc.)
// as we would.
// in the basic module pattern we return the IIFE function.
// the user can only access the returned values with the keys name and age

// the person is just an object with these properties.
// {
//     name: displayName,
//     age: ageOneYear
// };
// Unlike normal object here name reveals the otherwise private displayName() function.
//console.log(person.name());
// 'My name is Andrew'

// However, what happens if we try to access and mutate privateName
person.privateName = "Richard";

//console.log(person.name());
// 'My name is Andrew'

//console.log(person.displayName());
// undefined

//console.log(person.age());
// 'One year has passed! Current age is 1'

//console.log(person.age());
// ''One year has passed! Current age is 2'

/*
Benefits of the Revealing Module Pattern
When writing your modules, there are a few key advantages of using the Revealing
Module Pattern. For one , there is Clarity at the end of the module ( return statement)
as to which variables or methods may be accessed publicly. Modules may grow large,
and this eases readability for other developers who read you code.

Along with clear intent of public or private data, the Revealing Module Pattern
lends itself ot consistent syntax as well. In contrast, the normal Moudle Pattern may
contain variables and functions spread throughout the entire function body.

while you can't go wrong with either approach to cread private properties in your code
be sure to take the time and choose which makes the most sense for your project.

*/
