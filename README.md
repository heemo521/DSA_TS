# DSA_TS

## Examples of Data structures written in TS format

- To Compile, run the following command in your command-line in the same directory

```
tsc --project tsconfig.json
```

### Linked List

- Time Complexity

- Use Case: If you do a lot of insertions at the beginning of lists - linked lists are faster than arrays at this (niche)

### Stack && Stack-Linked List

### Queue && Queue-Linked List

### Hash Table

- Resolving Collisions with "Chaining"
- Resolving Collisions with "Open Addressing"

### Trees

#### _Definition_

- Tree is a **unidirectional**, **non-linear** data structure with **edges** that connect **vertices**.
  There is a **root node** and there **are no cycles**

#### _Terminology_

- _Node / Vertex_: A structure that contains a value
- _Edge_: A connection between two nodes
- _Root Node_: The top-most node in the tree
- _Sub Tree_: A nested tree (i.e. sub tree root node is NOT main tree root node)
- _Path_: A sequence of nodes and edges that connects
- _Distance_: The number of edges between two nodes
- _Parent / Child_: Two directly connected nodes, parent node is "above" child node
- _Ancestor / Descendant_: Two nodes that are connected by multiple parent-child paths
- _Siblings_: Two adjacent nodes with the same parent
- _Degree_: The number of a child nodes of a given node
- _Level_: The distance between a node and the root node
- _Depth_: THe maximum level in a tree
- _Breadth_: The number of leaves in a tree
- _Size_: The total number of a nodes in a tree

- Binary-Search-Tree: TWo children at most with values on the left that are less than the root node and values on the right that are greater than the root node
- Balanced Tree: Sub-tree depth only differs by 1 at most aka AVL Tree.
- AVL Tree: BST with self-balancing algorithm (named after the its inventor Georgy *A*delson-*V*elsky and Evgenii *L*andis)
- Balancing AVL Trees: Left Rotation, Right Rotation, Left-Right Rotation, Right-Left Rotation
- Balance Factors: Difference between subtree depths (left - right)

- Trie: Tree structure with nodes each with 26 children representing alphabets

#### _Example_

- File System
  - Depth-First-Search: Dig into the tree first and explore sibling tress step by step
  - Breadth-First-Search: Evaluate all sibling values first before you dig into the tree in depth

### Priority Queue

#### Min-Heap && Max-Heap

- (Min) Heaps are Trees where the parent node values are smaller or equal than the child node values
  (for a "max heap", it's the other way around).

### Graphs

#### _Definition_

- A tree that breaks all the rules of a tree
- The concepts of "levels", "nesting", "child / parent" don't exist
- One node (vertex) may be connected (via Edges) to multiple other nodes
- Bi-Directional connections are possible, loops are possible

#### _Terminology_

- _Directed Graphs_: Edges between Nodes are unidirectional
- _Undirected Graphs_: Edges between Nodes are bidirectional
- _Adjacency Matrix_: Represents the adjacency matrix
- _Adjacency List_: Each node contains a list of identifiers for the connected nodes
- The Matrix and List are to represent the connections between nodes, therefore the nodes themselves can be in a separate list

#### _Examples_

- Social Network: Contacts
- Dependencies (Software, Citation, etc.)
- Maps / Directions
- Knowledge Graph
- Disease Spread
- Recommendation Engines
