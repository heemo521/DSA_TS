class Graph {
  private _nodes: { [key: number]: unknown };
  private edges: { [key: number]: number[] };

  constructor() {
    this._nodes = {};
    this.edges = {};
  }

  public addNode(identifier: number, value: unknown) {
    if (identifier in this._nodes) return null; // OR  delete this.edges[identifier];
    this._nodes[identifier] = value;
  }

  public addEdge(startNode: number, endNode: number) {
    if (
      !this._nodes[startNode] ||
      !this._nodes[endNode] ||
      startNode === endNode
    )
      return null;

    // if there is an array of edges for the node
    // if the endNode does not exists in the selected node's edges array
    // Only then do we push in the endNode to the edges
    if (this.edges[startNode]) {
      if (this.edges[startNode].indexOf(endNode) === -1)
        this.edges[startNode].push(endNode);
      // The edges property does not exists for the given startNode so create one with endNode in it
    } else this.edges[startNode] = [endNode];
  }

  public hasEdge(startNode: number, endNode: number) {
    if (!this.edges[startNode]) return false;
    return this.edges[startNode].indexOf(endNode) > -1;
  }

  public getAllEdges(node: number) {
    return this.edges[node];
  }
}
