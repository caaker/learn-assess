// helper
function isEmpty() {
  return Object.keys(obj).length === 0;
}

class Node {
  constructor() {

    // we have a hash with key type letter and value type node
    this.letters = {};

    // this marks the last letter of a word
    this.end = false;
  }
}

class Trie {

  // a trie consists of at least one node
  constructor() {
    this.root = new Node();
  }

  // insert one word
  insertWord(word) {
    let node = this.root;
    for(let i = 0; i < word.length; i++) {
      const char = word[i];
      if(!node.letters[char]) {
        node.letters[char] = new Node();
      }
      if( i === (word.length - 1)) {
        node.letters[char].end = true;
      }
      node = node.letters[char];
    }
  }

  printNodes() {
    function recurse(letters) {

      // recurse
      if(letters) {
        Object.keys(letters).forEach((key) => {
          console.log(key, letters[key]);
          recurse(letters[key].letters)
        });
      }
    }

    recurse(this.root.letters);

  }


}

const trie = new Trie();
trie.insertWord('cat');
trie.insertWord('catty');
trie.insertWord('dog');
trie.insertWord('doggy');
trie.insertWord('bat');
trie.insertWord('batty');

trie.printNodes();
