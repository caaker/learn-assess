
// input must have at least two characters and output must not return more than 3 hints
function searchSuggestions(dictionary, query_string) {
  const suggestions = [];
  dictionary.sort();
  for(let i = 1; i < query_string.length; i++) {

    // sub will dictionary - mo, mou, mous, mouse
    let sub = query_string.slice(0, i + 1);
    let suggests = [];
    let j = 1;
    let hints = 0;
    while(j < dictionary.length && hints < 3 ) {
      if(sub === dictionary[j].slice(0, i + 1)) {
        suggests.push(dictionary[j]);
        hints++
      }
      j++;
    }
    suggestions.push(suggests);
  }

  // return an array of arrays
  return suggestions;
}


// input
const dictionary = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'];
const query_string = 'mouse';

console.log(searchSuggestions(dictionary, query_string));

// output
const output = [
  ['mobile', 'moneypot', 'monitor'],
  ['mouse', 'mousepad'],
  ['mouse', 'mousepad'],
  ['mouse', 'mousepad']
];


/*

Time Complexity
--------------------

Notes | Links
--------------------
  - this problem suggest words as the user types, i.e. word completion

*/

