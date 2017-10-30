![cf](http://i.imgur.com/7v5ASc8.png) lab 10 - Singly Linked List Data Structure
====



##MY NOTES
_list of all commands_
npm init --y



_index.js_
`'use strict';

module.exports = require('./lib/linked-list');
`
//index.js is pointing to this entry point, the lib folder
//this pattern allows for flexible initialization in case you need to make changes in the future; it would be easier to sort through the library



_LinkedListNode.js_
`'use strict';

var LinkedListNode = module.exports = function(value, nextNode) {
  this.value = value;
  this.next = nextNode || null;
};
`
//this is constructor that has value and nextNode


_linked-list.js_

`'use strict';

const LinkedListNode = require(__dirname + '/LinkedListNode');

//we either start with head equal to the head that we pass into that function or null if none is provided/ a blank linked-list

//passing in the head, allows us to clone other linked-list; if we pass in the head node to this linked list constructor that is the same as another linked list's head, then it is the same linked list. Because we have that head pointing to the same object in memory that we created. This is a shallow clone.
//Shallow Clone is a passed-by-reference clone. If you modify one then it's going to modify the other one.

const LinkedList = module.exports = function(head) {
  this.head = head || null;
};

//put this node in the front of our list
LinkedList.prototype.prepend = function(value) {
  //if value is already a node then return this.head equals to value
  if(value instanceof LinkedListNode) {
    value.next = this.head;
    //use return to avoid if-else statement
    return this.head = value;
  }
  // value is not an instance of LinkedListNode, then use the LinkedList constructor
  // new LinkedListNode(value, this.head); //this statement runs first and then the result of this is set to equal to this.head //we are setting this.next on the LinkedListNode constructor to equal to this.head

  <!-- var LinkedListNode = module.exports = function(value, nextNode) {
    this.value = value;
    this.next = nextNode || null;
  }; -->

  this.head = new LinkedListNode(value, this.head);
};
/////////What is the runtime of this prepend?
/////////PREPEND IS O(1) or Constant Complexity. Because it does not matter how long our list is, we are only changing the first front node; we are not iterating through all other nodes. So as the list/dataset elongates/grows, the runtime for this prepend function stays the same


//ANOTHER WAY
// LinkedList.prototype.prepend = function(value) {
//   let oldHead = this.head;
//   this.head = new Node(value, oldHead);
// };


/////////What is the runtime of this append?
/////////O(n) because with append you have to go through the entire linked list to get to the end of the list to append/to add a new node
//if you see the below statement as the first line of the function
//////let current = this.head;
//then it's a hint that we are going to iterate through the entire list; then the runtime is going to be AT LEAST O of n or O(n) operation; IT COULD BE LARGER, BUT AT LEAST O(n

LinkedList.prototype.append = function(value) {
  if (this.head === null) return this.head = value instanceof LinkedListNode ? value : new LinkedListNode(value);
  let current = this.head;

  //we are settting current.next !== null AND NOT current !== null BECAUSE with current !== null, null.next would equal to the new node I am trying to append!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  while(current.next !== null) current = current.next;
  //The below statement is a ternary; Ternary is a shortcut of an if-else that returns the expression that you are evaluating. In this case, if value is an instanceof of LinkedListNode then I am setting it equal to value; otherwise I am setting value equal to a new LinkedListNode.  So allowing to take either an exact value to append or a copy of the note
  current.next = value instanceof LinkedListNode ? value : new LinkedListNode(value);
};


//index is the parameter going into the remove function; for an example, if you want to remove a node, you have to specify at what index
LinkedList.prototype.remove = function(index) {
  //if this.head === null then you have a zero length array, so this is why we just return.
  if(this.head === null) return;
  //if index is equal to 0 then we remove this.head by setting this.head to equal to this.head.next, we are setting this head one over from the head, removing the head
  if(index === 0) return this.head = this.head.next;
  //if index is not equal to 0 then
  //if you set this.head ==== null then you are wiping out the entire list
  let current = this.head; //this is a hint that it's at least O(n)

  for(let i = 0; i < (index -1); i++) {
    //return to break out of the for loop, STOP execution at that point because there is no node to remove, because current.next === null, meaning we hit the end of the list
    if(current.next === null) return;
    current = current.next;
  }

  current.next = current.next.next;
};

LinkedList.prototype.find = function(value) {
  let current = this.head;

  while(current.value !== value) {
    if (current.next === null) return null;
    current = current.next;
  }

  return current;
};

LinkedList.prototype.print = function() {
  if(this.head === null) return console.log('empty linked list');
  let current = this.head;

//looping through and console.logging until current is equal to null
  while(current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

//For the reverse function, using prepend and n number of times (a connstant operation n times), the runtime is O of n or O(n). If we use append, the runtime would be O n squared. If you see nested for loop then it's O of n squared because you are doing n operation for every n in the dataset
//The easiest way to do reverse is to iterate through the entire list and prepend to each node as we get it. We start by prepending the first node on the new linked list. Then we put the second node before the first node
LinkedList.prototype.reverse = function() {
  //creating a new blank linked list
  let tempLinkedList = new LinkedList();
  let current = this.head;
  //we don't want to prepend null into list; this is why while current is not equal to null then we prepend
  //when we set the first node, it nulls out the original list and the whole list dies. So here I have to by value and NOT BY REFERENCE. BECAUSE we set new list.head equal to zero(demo.js) so then the zero.next equals to what old head used to be, which is null, which would also be null in this list, wiping out all the reference to all the subsequent ones . So if I do it by value then it will create a new node. So this is why we have to do current.value and not current in tempLinkedList.prepend(current.value); prepending the value contained in current
  while(current !== null) {
    tempLinkedList.prepend(current.value);
    current = current.next;
  }

  this.head = tempLinkedList.head;
};

_Shallow Clone vs. Deep Clone_
//Shallow Clone is a passed-by-reference clone. If you modify one then it's going to modify the other one.
//A Deep Clone is a passed-by-value clone. If you modify the current version of the object, it does not change the original one. So you would have to create a new node for each and every node
LinkedList.prototype.deepClone = function() {
  let tempLinkedList = new LinkedList();
  let current = this.head;

  while(current !== null) {
    tempLinkedList.append(current.value);
    current = current.next;
  }

  return tempLinkedList;
};
`

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Requirements  
#### Configuration  
  <!-- list of files, configurations, tools, etc that are required -->
  Your lab directory must include  
  * **README.md** -- with a documentation about your lab
  * **.gitignore** -- with a robust .gitignore
  * **.eslintrc** -- with the class .eslintrc file
  * **.eslintignore** -- with the class .eslintignore
  * **.package.json** -- with all dependencies and dev-dependencies
  * **lib/** -- directory for holding your programs helper modules
  * **test/** -- directory for holding your programs unit and integration tests

#### Testing  
  * write at least three test assertions for each method of the Singly Linked List Data Structure
  * organize your tests into appropriate describe/it blocks for test output readability

####  Documentation  
  * in your README, write documentation for you data structures
  * your documentation should includes code block useage examples
  * provide instructions for:
    * installing and using your data structure
    * accessing each method
    * running your tests

#### Feature Tasks  
* implement a Singly Linked List (SLL) data structor  
* implement `append(value)`, `prepend(value)`, `reverse()`, and `remove(offset)` methods to the SLL prototype
* in a comment within each function, note the it's Big-O runtime

## Bonus Points:
  * 2pts
  * implement `findNthNodeFromEnd(n)` as a method on the SLL prototype
    * takes `n` as an input/argument, representing the offset from the end to return
    * returns the nth node from the end (opposite of head) of the list
  * implement `findMiddleNode()` as a pure method on the SLL prototype
    * returns the middle node within the list

#### Rubric:
  * Tests: 2pts
  * Passes linter: 1pts
  * Completed Data Structure: 5pts
  * Big-O notation: 2pt
