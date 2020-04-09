/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 100
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */



var Tree = function(value) {
  this.value = value;
  this.children = [];
  
};

Tree.prototype.map = function (callback) {
  var newTree = new Tree(callback(this.value));
  for (var i = 0; i < this.children.length; i++) {
    newTree.children.push(this.children[i].map(callback));
  }
  return newTree;
};


Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.(child)) {
    this.children.push(child);
  } else {
    ('That child is already a child of this tree');
  }
 
  return child;
};



Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
  
    this.children.splice(index, 1);
  } else {
    ('That node is not an immediate child of this tree');
  }
};


