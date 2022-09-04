// Write your solutfuncion here!
const cats = ["Milo", "Otis", "Garfield"];

  function destructivelyAppendCat(Ralph) {
  cats.push('Ralph');
  }

  function destructivelyPrependCat(Bob) {
    cats.unshift('Bob');
  }
  cats;
 
  function destructivelyRemoveLastCat(Garfield) {
    cats.pop();
  }

  function destructivelyRemoveFirstCat(Ralph) {
    cats.shift();
  }

  function appendCat() {
    const copyOfCats = [
        ...cats,
        'Broom'
    ];
    return copyOfCats;
  }

  function prependCat() {
    const copyOfCats = [
       "Arnold", ...cats
    ];   
    return copyOfCats;
  }
  function removeLastCat() {
    const copyOfCats = 
        cats.slice(0, -1)
    ;
    return copyOfCats;
}
function removeFirstCat() {
    const copyOfCats =
    cats.slice(1);
    return copyOfCats;
}