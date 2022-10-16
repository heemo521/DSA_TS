class Graph {
  private _nodes: { [key: number]: unknown };
  private _edges: { [key: number]: number[] };

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
      if (this._edges[startNode].indexOf(endNode) === -1)
        this._edges[startNode].push(endNode);
      // The _edges property does not exists for the given startNode so create one with endNode in it
    } else this._edges[startNode] = [endNode];
  }

  public removeNode(nodeIdentifier: number) {
    delete this._nodes[nodeIdentifier];
    Reflect.deleteProperty(this._edges, nodeIdentifier);

    for (const edgeIdentifier in this._edges)
      this.removeEdge(nodeIdentifier, +edgeIdentifier);
  }

  public removeEdge(startNode: number, endNode: number) {
    if (!this._nodes[startNode]) return null;

    const removedNodeIndex = this._edges[startNode].indexOf(endNode);

    if (removedNodeIndex === -1) return null;

    this._edges[startNode].splice(removedNodeIndex, 1);
  }

  public hasEdge(startNode: number, endNode: number) {
    if (!this._edges[startNode]) return false;
    return this._edges[startNode].indexOf(endNode) > -1;
  }

  public getAllEdges(node: number) {
    return this._edges[node];
  }
}

const graph = new Graph();

graph.addNode(1, 'Max');
graph.addNode(2, 'Manuel');
graph.addNode(3, 'Jules');

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 2);

console.log(graph.hasEdge(3, 2));
console.log(graph.hasEdge(2, 1));

console.log(graph.getAllEdges(1));
console.log(graph.getAllEdges(2));
console.log(graph.getAllEdges(3));

console.log(graph.removeEdge(2, 1));
console.log(graph.removeEdge(1, 3));

console.log(graph);
