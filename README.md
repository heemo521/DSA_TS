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

- Node / Vertex : A structure that contains a value
- Edge: A connection between two nodes
- Root Node: The top-most node in the tree
- Sub Tree: A nested tree (i.e. sub tree root node is NOT main tree root node)
- Path: A sequence of nodes and edges that connects
- Distance: The number of edges between two nodes
- Parent / Child: Two directly connected nodes, parent node is "above" child node
- Ancestor / Descendant: Two nodes that are connected by multiple parent-child paths
- Siblings: Two adjacent nodes with the same parent
- Degree: The number of a child nodes of a given node
- Level: The distance between a node and the root node
- Depth: THe maximum level in a tree
- Breadth: The number of leaves in a tree
- Size: The total number of a nodes in a tree

- Binary-Search-Tree: TWo children at most with values on the left that are less than the root node and values on the right that are greater than the root node
- Balanced Tree: Sub-tree depth only differs by 1 at most aka AVL Tree.
- AVL Tree: BST with self-balancing algorithm (named after the its inventor Georgy *A*delson-*V*elsky and Evgenii *L*andis)
- Balancing AVL Trees: Left Rotation, Right Rotation, Left-Right Rotation, Right-Left Rotation
- Balance Factors: Difference between subtree depths (left - right)

-Trie: Tree structure with nodes each with 26 children representing alphabets

#### _Example_

- File System
  - Depth-First-Search: Dig into the tree first and explore sibling tress step by step
  - Breadth-First-Search: Evaluate all sibling values first before you dig into the tree in depth
