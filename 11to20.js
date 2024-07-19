/*Assignment 11*/
/*Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var names = [
    "ABDUL AHAD",
    "HUSNA BANO",
    "SHUMAILA BANO",
    "3rd Friend",
];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var list = names_1[_i];
    console.log(list);
}
/*Assignment 12*/
/* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.
*/
var names_Array = [
    "ABDUL AHAD",
    "H B",
    "S B",
];
for (var _a = 0, names_Array_1 = names_Array; _a < names_Array_1.length; _a++) {
    var personalized = names_Array_1[_a];
    console.log("".concat(personalized, " is a Developer"));
}
/*Assignment 13*/
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
var myFovorite_vehicles = [];
myFovorite_vehicles.push(["Honda", "Bikes"]);
myFovorite_vehicles.push(["Corolla", "car"]),
    myFovorite_vehicles.push(["Honda", "200"]);
myFovorite_vehicles.forEach(function (_a) {
    var Model = _a[0], Company = _a[1];
    console.log("I would Like To Own A ".concat(Model, " ").concat(Company));
});
/*Assignment 14*/
/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
var Party = [
    "Subuktageen",
    "M Arif",
    "Bilal Khurshid",
    "Nasir Khan",
    "Husna Bano",
    "Shumaila Bano"
];
Party.forEach(function (People) {
    console.log("".concat(People, " You Are Inviting To Dinner at Arena Rangoli Please Join Us."));
});
/*Assignment 15*/
/* Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.
*/
var GuestList = [
    "Subuktageen",
    "M Arif",
    "Bilal Khurshid",
    "Nasir Khan",
    "Husna Bano",
    "Shumaila Bano"
];
var PeopleCanNotMakeIt = "Nasir Khan";
console.log("For Some Reason ".concat(PeopleCanNotMakeIt, " Can Not Attend The Dinner."));
console.log("And Replacing The Name Shafique Ahmed For Nasir Khan\n");
var New_Guest = "Shafique Ahmed";
var IndexOf = GuestList.indexOf(PeopleCanNotMakeIt);
if (IndexOf !== -1) {
    GuestList[IndexOf] = New_Guest;
}
GuestList.forEach(function (guest) {
    console.log("".concat(guest, " You Are Invite To The Party"));
});
/*Assignment 16*/
/* More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
var guests = [
    "(Late) Mr Ali Jaan",
    "Kamran Tessori",
    "Daniyal Nagori",
    "Sir Zia Khan",
];
for (var _b = 0, guests_1 = guests; _b < guests_1.length; _b++) {
    var inform = guests_1[_b];
    console.log("News!.. Dear ".concat(inform, " We Found A Big Dinner Table! "));
}
var newGuest_Beginning = "Saim Ayub";
var newGuest_Middle = "Imad Wasim";
var newGuest_End = "Muhammad Nawaz";
guests.unshift(newGuest_Beginning);
var indexMiddle = guests.length / 2;
guests.splice(indexMiddle, 0, newGuest_Middle);
guests.push(newGuest_End);
console.log(guests);
console.log("\n\tNew Set of Invitations");
guests.forEach(function (anyPeople) {
    console.log("".concat(anyPeople, " Please Join our Dinner Party"));
});
/*Assignment 17*/
/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.
// */
var new_Array17 = [
    "Saim Ayub",
    "Abdullah Shafique",
    "Imad Wasim",
    "Fakher Zaman",
    "Baber Azam",
    "Muhammad Rizwan",
    "Muhammad Nawaz",
];
console.log("\n\tI Can Invite Only Two people");
while (new_Array17.length > 2) {
    var remove_Guest = new_Array17.pop();
    console.log("Sorry!! ".concat(remove_Guest, " I Can't Invite To Dinner"));
}
for (var _c = 0, new_Array17_1 = new_Array17; _c < new_Array17_1.length; _c++) {
    var allow_Dinner = new_Array17_1[_c];
    console.log("Dear ".concat(allow_Dinner, " You Are Still Invite To Dinner."));
}
new_Array17.pop();
new_Array17.pop();
console.log("Guest List After Dinner", new_Array17);
/*Assignment 18*/
/*Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that itsorder has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
var SeeingPlaces = [
    "Masjid e Nabwi",
    "Suchheri",
    "Balakot River",
    "Lughmani Hill",
];
console.log("\n_______________Original Array_______________\t");
console.log(SeeingPlaces);
console.log("\t\n Array in alphabetical order without modifying the actual list.");
console.log(__spreadArray([], SeeingPlaces, true).sort());
console.log("\nShowing Array is still in its original order");
console.log(SeeingPlaces);
console.log("\nReverse The Order Of Array ");
console.log(__spreadArray([], SeeingPlaces, true).sort().reverse());
console.log("\nOrignal Array Order");
console.log(SeeingPlaces);
console.log("\nArray Store In Alphabetical Order");
SeeingPlaces.sort();
console.log(SeeingPlaces);
console.log("\nchange your array so it’s stored in reverse alphabetical order");
SeeingPlaces.sort().reverse();
console.log(SeeingPlaces);
/*Assignment 19*/
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.
*/
console.log("\nprint a message indicating the numberof people you are inviting to dinner.");
console.log("We Have Finally Invited ".concat(GuestList.length, " Guest In Dinner Party"));
/*Assignment 20*/
/*Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
else you’d like. Write a program that creates a list containing these items.
*/
var Favorite_Places = [
    "Lughmani Hill",
    "Shimla Hill",
    "Suchheri Hills",
    "Balakot",
];
console.log("List Of Pakistan Famous Hills");
for (var _d = 0, Favorite_Places_1 = Favorite_Places; _d < Favorite_Places_1.length; _d++) {
    var repeat = Favorite_Places_1[_d];
    console.log(repeat);
}
