/* Filename: ComplexAlgorithm.js */

// Custom data structure for a binary tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Custom binary search tree implementation
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Inserts a value into the binary search tree
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      this._insertRecursive(this.root, value);
    }
  }

  // Helper function to recursively insert a value into the binary search tree
  _insertRecursive(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        this._insertRecursive(node.left, value);
      }
    } else if (value > node.value) {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this._insertRecursive(node.right, value);
      }
    }
  }

  // Checks if a given value exists in the binary search tree
  contains(value) {
    return this._containsRecursive(this.root, value);
  }

  // Helper function to recursively check if a value exists in the binary search tree
  _containsRecursive(node, value) {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    }

    if (value < node.value) {
      return this._containsRecursive(node.left, value);
    } else {
      return this._containsRecursive(node.right, value);
    }
  }

  // Performs an in-order traversal of the binary search tree and returns an array of sorted values
  inOrderTraversal() {
    const values = [];
    this._inOrderTraversalRecursive(this.root, values);
    return values;
  }

  // Helper function to recursively perform in-order traversal of the binary search tree
  _inOrderTraversalRecursive(node, values) {
    if (node !== null) {
      this._inOrderTraversalRecursive(node.left, values);
      values.push(node.value);
      this._inOrderTraversalRecursive(node.right, values);
    }
  }
}

// Usage example of the custom Binary Search Tree implementation
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(17);
bst.insert(1);
bst.insert(4);

console.log("In-order traversal: " + bst.inOrderTraversal().join(", "));

console.log("Contains 7: " + bst.contains(7));
console.log("Contains 11: " + bst.contains(11));
console.log("Contains 99: " + bst.contains(99));
// ... (perform more operations and test cases) 

// ... (more complex code can be added here)
// ... (it can comprise additional classes, functions, and extensive logic)

// End of ComplexAlgorithm.js