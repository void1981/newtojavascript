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

console.log(whoThis());
window.location