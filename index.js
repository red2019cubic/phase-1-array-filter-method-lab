// Code your solution here
//This function takes an array of drivers' names and a string as arguments, 
//returns the matching list of drivers. The function should be case insensitive.
function findMatching(names, driverName){
return names.filter(name => name == driverName || name.toLowerCase() == driverName.toLowerCase());
}
//1. This function takes an array of drivers' names and a string as arguments for querying the array, 
//2. returns all drivers whose names begin with the provided letters.
function fuzzyMatch(names, driverName){
    return names.filter(name => name.charAt(0) == driverName.charAt(0));
}
//This function takes an array of driver objects and a string as arguments. 
//Each driver object has two properties: name and hometown
// The function should return each element whose name property matches the provided string argument.
function matchName(drivers, driver){
    return drivers.filter(driverName => driverName['name'] === driver);
}