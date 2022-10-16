class Graph {
  private _nodes: { [key: number]: unknown };
  private _edges: { [key: number]: Set<number> };

  constructor() {
    this._nodes = {};
    this._edges = {};
  }

  public addNode(identifier: number, value: unknown) {
    if (identifier in this._nodes) return null; // OR  delete this._edges[identifier];
    this._nodes[identifier] = value;
  }

  public addEdge(startNode: number, endNode: number) {
    if (
      !this._nodes[startNode] ||
      !this._nodes[endNode] ||
      startNode === endNode
    )
      return null;
    // if there is an array of _edges for the node
    // if the endNode does not exists in the selected node's _edges array
    // Only then do we push in the endNode to the _edges
    if (this._edges[startNode]) {
      if (!this._edges[startNode].has(endNode))
        this._edges[startNode].add(endNode);
      // The _edges property does not exists for the given startNode so create one with endNode in it
    } else this._edges[startNode] = new Set([endNode]);
  }

  public removeNode(nodeIdentifier: number) {
    delete this._nodes[nodeIdentifier];
    delete this._edges[nodeIdentifier]; // Alternatively Reflect.deleteProperty(this._edges, nodeIdentifier);

    for (const edgeIdentifier in this._edges)
      this._edges[edgeIdentifier].delete(nodeIdentifier);

    // Notes on Reflect API
    // *Reflect*ion is a feature in the Java programming language.
    // It allows an executing Java program to examine or “introspect” upon itself,
    // and manipulate internal properties of the program. For example, it’s possible for a Java class to obtain the names of all its members and display them.
  }

  public removeEdge = (startNode: number, endNode: number) =>
    !this._edges[startNode] || this._edges[startNode].has(endNode)
      ? null
      : this._edges[startNode].delete(endNode);

  public hasEdge = (startNode: number, endNode: number) =>
    this._edges[startNode] ? this._edges[startNode].has(endNode) : false;

  public getAllEdges = (node: number) => this._edges[node];
}

var graph = new Graph();
graph.addNode(1, 'Max');
graph.addNode(2, 'Manuel');
graph.addNode(3, 'Jules');

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 2);

console.log('Should be true', graph.hasEdge(3, 2));
console.log('Should be true', graph.hasEdge(1, 3));
console.log('Should be true', graph.hasEdge(1, 2));
console.log('Should be false', graph.hasEdge(2, 1));
console.log(graph.getAllEdges(1));
console.log(graph.getAllEdges(2));
console.log(graph.getAllEdges(3));
console.log('Removed', graph.removeEdge(1, 3));
// console.log('Removing non-existing edge', graph.removeEdge(2, 1));
// console.log('Removing already removed edge', graph.removeEdge(1, 3));
// console.log('Removing node 3', graph.removeNode(3));
// console.log('Get all edges for removed node', graph.getAllEdges(3));
console.log(graph);
