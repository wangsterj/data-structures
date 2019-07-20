describe('DlinkedList', function() {
  var DlinkedList;

  beforeEach(function() {
    DlinkedList = DLinkedList();
  });

  it('should have a head and tail', function() {
    expect(DlinkedList).to.have.property('head');
    expect(DlinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(DlinkedList.addToTail).to.be.a('function');
    expect(DlinkedList.removeHead).to.be.a('function');
    expect(DlinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    DlinkedList.addToTail(4);
    expect(DlinkedList.tail.value).to.equal(4);
    DlinkedList.addToTail(5);
    expect(DlinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added', function() {
    DlinkedList.addToHead(4);
    expect(DlinkedList.head.value).to.equal(4);
    DlinkedList.addToHead(5);
    expect(DlinkedList.head.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    DlinkedList.addToTail(4);
    DlinkedList.addToTail(5);
    expect(DlinkedList.head.value).to.equal(4);
    DlinkedList.removeHead();
    expect(DlinkedList.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    DlinkedList.addToTail(4);
    DlinkedList.addToTail(5);
    expect(DlinkedList.head.value).to.equal(4);
    DlinkedList.removeTail();
    expect(DlinkedList.tail.value).to.equal(4);
  });

  it('should return the value of the former head when removeHead is called', function() {
    DlinkedList.addToTail(4);
    expect(DlinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    DlinkedList.addToTail(4);
    DlinkedList.addToTail(5);
    expect(DlinkedList.contains(4)).to.equal(true);
    expect(DlinkedList.contains(5)).to.equal(true);
    expect(DlinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    DlinkedList.addToTail(4);
    DlinkedList.addToTail(5);
    DlinkedList.removeHead();
    expect(DlinkedList.contains(4)).to.equal(false);
  });

  it('should designate a new tail when new nodes (3!) are added', function() {
    DlinkedList.addToTail(4);
    expect(DlinkedList.tail.value).to.equal(4);
    DlinkedList.addToTail(5);
    expect(DlinkedList.tail.value).to.equal(5);
    DlinkedList.addToTail(6);
    expect(DlinkedList.tail.value).to.equal(6);
  });
  // add more tests here to test the functionality of DlinkedList
});
