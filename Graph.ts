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

  public removeNode(identifier: number) {
    delete this._nodes[identifier]; // OR Reflect.deleteProperty(this._nodes, identifier);
    delete this._edges[identifier];

    for (const nodeIdentifier in this._edges)
      this.removeEdge(identifier, +nodeIdentifier);
  }

  public removeEdge(startNode: number, endNode: number) {
    const removedNodeIndex = this._edges[endNode].indexOf(startNode);
    if (removedNodeIndex >= 0) this._edges[endNode].splice(removedNodeIndex, 1);
  }

  public hasEdge(startNode: number, endNode: number) {
    if (!this._edges[startNode]) return false;
    return this._edges[startNode].indexOf(endNode) > -1;
  }

  public getAll_edges(node: number) {
    return this._edges[node];
  }
}
