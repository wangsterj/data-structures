describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });
  
  it('should refer to the corrent parent in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.parent.value).to.equal(2);
    expect(binarySearchTree.right.left.parent.value).to.equal(7);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });
  
  it('should execute a callback on every value in a tree using "breadth FirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 7, 3]);
  });
  
  it('should hold correct depth values', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(10);
    expect(binarySearchTree.minDepth).to.equal(2);
    expect(binarySearchTree.maxDepth).to.equal(5);
  });
  
  it('should return ordered array', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(10);
    var array = binarySearchTree.treeToOrderedArray();
    expect(array).to.eql([2,5,6,7,8,9,10]);
    // expect(binarySearchTree.treeToOrderedArray()).to.equal([2,6,7,8,9,10]);
    // expect(binarySearchTree.treeToOrderedArray()).to.equal([2,6,7,8,9,10]);
  });
  
  // it('should balance correctly', function() {
  //   binarySearchTree.rebalanceFlag = true;
  //   binarySearchTree.insert(6);
  //   binarySearchTree.insert(4);
  //   binarySearchTree.insert(7);
  //   binarySearchTree.insert(8);
  //   var array = [];
  //   var func = function(value) { array.push(value); };
  //   var tree = binarySearchTree.rebalance();
  //   console.log(tree)
  //    tree.breadthFirstLog(func);
  //   console.log(array)
  //   expect(array).to.eql([6,5,8,4,7]);
  // });
});
