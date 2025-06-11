class TrieNode {
    constructor() {
        this.children = {}; // Map from character to TrieNode
        this.isEndOfWord = false; // Indicates if the node represents the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this._searchPrefix(word);
        return node !== null && node.isEndOfWord;
    }

    startsWith(prefix) {
        return this._searchPrefix(prefix) !== null;
    }

    _searchPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return null;
            }
            node = node.children[char];
        }
        return node;
    }
}
