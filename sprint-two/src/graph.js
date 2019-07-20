

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    var newNode = {};
    newNode.edge = {};
    this.nodes[node] = newNode;
  };

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // var tempFunc = this.removeEdge;
  this.forEachNode(function(fromNode) {
    // console.log(fromNode, node);
    // tempFunc(fromNode, node);
    this.removeEdge(fromNode, node)
  })
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].edge[toNode]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edge[toNode] = true;
  this.nodes[toNode].edge[fromNode] = true;
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edge[toNode] = false;
  this.nodes[toNode].edge[fromNode] = false;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb.call(this, key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


