![cf](http://i.imgur.com/7v5ASc8.png) lab 10 - Singly Linked List Data Structure
====
Description:

This app builds out an Singly Linked Lists (SLL) that is a data structure which holds a sequence of linked nodes. Each node contains data and a pointer which can point to another node.

Methods - Prepend, Apppend, Remove, and Reverse

Prepend:

Prepend adds a node to the beginning of the structure.  The current node will become the previous node.  

To use the prepend method simply call it in the index.js file:
  ex: sll.prepend(*); //where star is what you want to prepend
      sll.print(); //to view nodes

Append:

Prepend adds a node to the SLL structure.  The current node will become wherever you place it. 

To use the append method simply call it in the index.js file:
  ex: sll.append(*); //where star is what you want to append
      sll.print(); //to view nodes

Remove:

Remove deletes a node from the SLL structure.  

To use the remove method simply call it in the index.js file:
  ex: sll.remove(*); //where star is what you want to remove
      sll.print(); //to view nodes

Reverse:

Reverse reorders the structure e.g. 123 to 321.  

To use the reverse method simply call it in the index.js file:
  ex: sll.reverse(); 
      sll.print(); //to view nodes



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
