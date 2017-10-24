![cf](http://i.imgur.com/7v5ASc8.png) lab 10 - Singly Linked List Data Structure
====



## Requirements  
#### Configuration  
  <!-- list of files, configurations, tools, etc that are required -->
  Your lab directory must include  
  * **README.md** -- with a documentation about your lab
  * **.eslintignore** -- with the class .eslintignore

#### Testing  
  * write at least three test assertions for each method of the Singly Linked List Data Structure
  * organize your tests into appropriate describe/it blocks for test output readability

  * your documentation should includes code block useage examples
  * provide instructions for:
    * installing and using your data structure
    * accessing each method
    * running your tests

#### Feature Tasks  
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
