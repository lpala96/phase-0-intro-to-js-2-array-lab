// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    console.log(cats.push(name));
}
function destructivelyPrependCat(name) {
    console.log(cats.unshift(name));
}
function destructivelyRemoveLastCat() {
    console.log(cats.pop(name));
}
function destructivelyRemoveFirstCat() {
    console.log(cats.shift(name));
}
function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat() {
    return cats.slice(0, cats.length-1);
}
function removeFirstCat() {
    return cats.slice(1, cats.length);
}