![cf](http://i.imgur.com/7v5ASc8.png) lab 10 - Singly Linked List Data Structure
====


    * To use SinglyLinkedList:
    `const SLL = require ('./lib/LinkedList');
    let myLinkList = new SLL();``
    * accessing each method
    add a value to the end of the linked list:
    `myLinkList.append(value)`
    add a value to the beginning of the linked list:
    `myLinkList.prepend(value)`
    get a node by index
    SLL is zero indexed
    `myLinkList.getNode(index)`
    get a node nth from the end of the list (also zero indexed)
    `myLinkList.findNthNodeFromEnd(index)`
    `myLinkList.findNthNodeFromEnd(0)` will get you the last node.

    * running tests
    `npm i`
    `npm test`

  * implement `findMiddleNode()` as a pure method on the SLL prototype
    * returns the middle node within the list
