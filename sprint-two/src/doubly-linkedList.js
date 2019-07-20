var DLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    if (list.tail === null) {
      list.head = newTail;
      list.tail = newTail;
    } else {
      newTail.previous = list.tail;
      list.tail.next = newTail;
      list.tail = newTail;
    }
  };

  list.addToHead = function(value) {
    var newHead = Node(value);
    if (list.tail === null) {
      list.head = newHead;
      list.tail = newHead;
    } else {

      newHead.next = list.head;
      list.head.previous = newHead;
      list.head = newHead;
    }
  };

  list.removeHead = function() {
    var temp = list.head.next;
    var value = list.head.value;
    if (list.head === null) {
      return null;
    } else {
      if (temp !== null) {
      temp.previous = null;
    }
      list.head.next = null;
      list.head = temp;
      return value;
    }
  };

  list.removeTail = function() {
    var temp = list.tail.previous;
    var value = list.tail.value;
    if (list.tail === null) {
      return null;
    } else {
      if (temp !== null) {
      temp.next = null;
    }
      list.tail.previous = null;
      list.tail = temp;
      return value;
    }
  };

  list.contains = function(target, node) {
    if (node === undefined) {
      node = list.head;
    }
    if (node.value === target) {
      return true;
    } else {
      if (node.next !== null) {
        return this.contains(target,node.next);
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
