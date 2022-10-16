class Graph {
  public nodes: { [key: string]: unknown } | {};
  public edges: { id: number; list: number[] } | {};

  constructor() {
    this.nodes = {};
    this.edges = {};
  }

  public addNode(identifier: string, value: unknown) {
    this.nodes[identifier] = value;
  }

  public addEdge(startNode: string, endNode: string) {
    if (
      this.edges[startNode] &&
      this.edges[startNode].indexOf(endNode) === -1
    ) {
      this.edges[startNode].push(endNode);
      0;
    } else {
      this.edges[startNode] = [endNode];
    }
  }
}
