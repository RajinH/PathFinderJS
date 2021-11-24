export default class NodeStructure {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isStart = false;
    this.isEnd = false;
    this.isWall = false;
    this.isVisited = false;
  }
}
