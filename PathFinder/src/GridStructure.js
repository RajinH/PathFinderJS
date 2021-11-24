export default class GridStructure {
  constructor(nodes, size) {
    this.size = size;
    this.grid = [];
    this.startNode = null;
    this.endNode = null;
    this.wallNodes = [];

    // push rows into a 2D array based on size and number of elements
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(nodes[j]);
      }
      this.grid.push(row);
    }
  }

  setStartNode(x, y) {
    this.grid[x][y].isStart = true;
    this.grid[x][y].isEnd = false;
    this.grid[x][y].isWall = false;
    this.startNode = this.grid[x][y];
  }

  setEndNode(x, y) {
    this.grid[x][y].isStart = false;
    this.grid[x][y].isEnd = true;
    this.grid[x][y].isWall = false;
    this.endNode = this.grid[x][y];
  }

  setWallNode(x, y) {
    this.grid[x][y].isStart = false;
    this.grid[x][y].isEnd = false;
    this.grid[x][y].isWall = true;
    this.wallNodes.push(this.grid[x][y]);
  }

  removeWallNode(x, y) {
    this.wallNodes.remove(this.grid[x][y]);
  }
}
