/*
------------------------------QUESTION NO 41 -------------------------
 Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/
var show_magicians0 = function (magician) {
    magician_names.forEach(function (value) {
        console.log(value);
    });
};
var magician_names = [
    "Osama",
    "Saira Tanda Magician",
    "Umer Aftab",
    "Samina Magician",
];
show_magicians0(magician_names);
/*
-------------------------------QUESTION NO 42 ---------------------------
 Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/
function make_great1(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
function show_magicians1(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ["David Copperfield", "Houdini", "Dynamo"];
var greatMagicians1 = make_great(magicians);
show_magicians(greatMagicians1);
/*
-----------------------QUESTION NO 43 -----------------
 Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var originalMagicians = ["David Copperfield", "Houdini", "Dynamo"];
var copyOfOriginalMagicians = originalMagicians.slice();
var greatMagicians = make_great(copyOfOriginalMagicians);
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
/*
---------------------------QUESTION NO 44 -------------------------
 Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.
*/
var sandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("\nYou ordered an empty sandwich. Please specify some items.");
    }
    else {
        console.log("\nYou ordered a sandwich with the following items:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
    }
};
sandwich("Egg Sandwich", "Grilled Chicken ", "Seafood Sandwich");
sandwich("Grilled Cheese", "Nutella Sandwich");
sandwich();
/*
------------------------------------QUESTION NO 45 ------------------------------
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly.
*/
var about_car = function (manufactured, model) {
    var extra_qualities = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extra_qualities[_i - 2] = arguments[_i];
    }
    return {
        manufactured: manufactured,
        model: model,
        extra_qualities: extra_qualities,
    };
};
console.log(about_car("Honda", "Civic 2012", "Red Color", "Auto Driving Mod"));
console.log(about_car("Harley Devidson", "Alpha 2018", "Multi-Colors", "120+ Speed.."));
