

*Node.js* Node contructor class, takes in a 'value' (could be any type) and a 'next', the latter of which points to the next node in the list.

*List.js*

List Contructor initializes head to a given node argument or null if none is given

 _prepend_  Takes in a value and creates a new node, adding it to the front of the list.  Returns the list

 _append_   Takes in a value and creates a new node, adding it to the end of the list. Returns the list

 _remove_   Takes in an index of the list, and removes the node that resides at that index. Returns the list

 _reverse_  Reverses the order of the list. Returns the reversed list.

 *list.test.js*  Unit tests for List structure and methods. Use `mocha` to run tests. 
