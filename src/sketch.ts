import p5 from "p5";
import { aStarPathForConnectingClicks, Coord, isInvalid } from "./utils";

interface ISketch {
  canvasRef: React.RefObject<HTMLDivElement | null>;
  pathRef: React.RefObject<Coord[]>
  onWin: () => void;
  mazeDotsRef: React.RefObject<(string | null)[][]>
  start: Coord;
  end: Coord;
  visited: Map<string, Set<string>> | null;
  overlayOpenRef: React.RefObject<boolean>


}

function getFittingCellSize(rows: number, cols: number): number {
  const screenWidth = window.innerWidth - 40;
  const screenHeight = window.innerHeight - 40 - 60; // 20px top + 20px bottom padding

  const maxCellWidth = screenWidth / cols;
  const maxCellHeight = screenHeight / rows;

  return Math.min(Math.floor(Math.min(maxCellWidth, maxCellHeight)), 100);
}

export default function sketch(params: ISketch) {

  const { canvasRef, pathRef, onWin, mazeDotsRef, start: START, end: END,overlayOpenRef } = params;  // ,visited 
  const mazeDots = mazeDotsRef.current;

  let hoverCell: [number, number] | null = null;
  let hoverStartTime: number = 0;

  let path = pathRef.current;
  let cellSize = getFittingCellSize(mazeDots.length, mazeDots[0].length)
  let isDragging = false;

  let isInvalidPath = false;
  // let isInvalidPath = false;


  return (p: p5) => {
    p.preload = () => {
    };

    p.setup = () => {
      p.frameRate(10);
      p.clear(); 
      p.angleMode(p.DEGREES);

      if (canvasRef.current) {
        const canvas = p.createCanvas(mazeDots[0].length * cellSize, mazeDots.length * cellSize);

        canvas.parent(canvasRef.current);
        p.cursor(p.ARROW)
      }
    };



    p.draw = () => {
      p.background(255);
      drawGrid();
      drawPath();
      drawDots();
      drawStartEnd();


      if (isWin()) {
        onWin();
        p.fill(0, 200, 0);
        p.textSize(32);
        p.textAlign(p.CENTER);
        p.text('You Win!', p.width / 2, p.height / 2);
        p.noLoop();
      }


      drawHoverEffect()
      updateHoverState(); // 👈 track hover

      drawCurrentDot();
      // drawVisited();
    }

    p.mouseDragged = () => {
      if(overlayOpenRef.current) return;
      let last = path[path.length - 1];
      if (!isDragging || !last) return;
      let [i, j] = getCell(p.mouseX, p.mouseY);
      if (!isValid(i, j)) return;
      isInvalidPath = isInvalid(path, mazeDots)
      if (isInvalidPath) return;

      if ((last[0] !== i || last[1] !== j) && isAdjacent(i, j, last)) {
        path.push([i, j]);

        pathRef.current = path
        // if (isColor(i, j)) lastPassedColor = mazeDots[i][j];
      }
    }

    // P5.js sketch replicating the maze path game

    p.mousePressed = () => {
      
      if(overlayOpenRef.current) return;

      let [i, j] = getCell(p.mouseX, p.mouseY);
      if (!isValid(i, j)) return;
      if (path.length === 0) {

        pathRef.current.splice(0, path.length, [START[0], START[1]])

      } 
      
      if (path.length > 0) {

        const clickedCoord: Coord = [i, j];

        tryConnectToClickedCell(clickedCoord, path, mazeDots);



        if (isAdjacent(i, j, path[path.length - 1])) {
          pathRef.current.push([i, j]);
        }
      }
      isDragging = true;
    }

    p.mouseReleased = () => {
      isDragging = false;
    }

    p.touchStarted = () => {

      if(overlayOpenRef.current) return true
      p.mousePressed();
      return false;
    }


    p.touchMoved = () => {
      if(overlayOpenRef.current) return true
      p.mouseDragged();
      return false;
    }

    p.touchEnded = () => {
      if(overlayOpenRef.current) return true
      p.mouseReleased();
      return false;
    }


    function tryConnectToClickedCell(
      clickCoord: Coord,
      path: Coord[],
      mazeDots: (string | null)[][],
    ): void {

      const lastCoord = path[path.length - 1];

      const _maze: (string | null)[][] = JSON.parse(JSON.stringify(mazeDots))
      const __maze = _maze.map(
        (row: (string | null)[]) =>
        row.map(cell => cell !== null ? "block" : cell)
      );


      const connectionPath = aStarPathForConnectingClicks(lastCoord, clickCoord,__maze);
        
      if (!connectionPath || connectionPath.length <= 1) return;

      const fullPath = [...path, ...connectionPath.slice(1)];


      isInvalidPath = isInvalid(fullPath, mazeDots)
      if (!isInvalidPath) {

        pathRef.current.push(...connectionPath.slice(1))

        // Replace original path in-place
        // path.splice(0, path.length, ...fullPath);
      }
    }




    // function drawVisited() {
    //   if(!visited) return;
    //   visited.forEach((colorSet, coordStr) => {
    //     const [r, c] = coordStr.split(',').map(Number);

    //     if (colorSet.has('red')) {
    //       p.fill(255, 0, 0);
    //       p.noStroke();
    //       p.ellipse(
    //         c * cellSize + cellSize * 0.2,
    //         r * cellSize + cellSize * 0.2,
    //         cellSize * 0.2
    //       );
    //     }

    //     if (colorSet.has('blue')) {
    //       p.fill(0, 0, 255);
    //       p.noStroke();
    //       p.ellipse(
    //         c * cellSize + cellSize * 0.8,
    //         r * cellSize + cellSize * 0.2,
    //         cellSize * 0.2
    //       );
    //     }
    //   });
    // }

    function getFillColor(cell: string | null) {
      if (cell === "blue") {
        return "#6495ED"
      }
      else if (cell === "red") {
        return "#FF6347"
      }
      else return "black";
    }


    function getPathSegmentCounts(path: [number, number][]) {
      const segmentMap = new Map<string, number>();

      for (let k = 0; k < path.length - 1; k++) {
        const [i1, j1] = path[k];
        const [i2, j2] = path[k + 1];

        // Represent each segment in a normalized order
        const key = i1 < i2 || (i1 === i2 && j1 < j2)
          ? `${i1},${j1}-${i2},${j2}`
          : `${i2},${j2}-${i1},${j1}`;

        segmentMap.set(key, (segmentMap.get(key) || 0) + 1);
      }

      return segmentMap;
    }

    function getPointer() {
      if (p.touches.length > 0) {
        const touch = p.touches[0] as { x: number; y: number }
        return { x: touch.x, y: touch.y };
      } else {
        return { x: p.mouseX, y: p.mouseY };
      }
    }

    function getPointerCell() {
      const { x, y } = getPointer();
      return [Math.floor(y / cellSize), Math.floor(x / cellSize)];
    }

    function updateHoverState() {
      const [i, j] = getPointerCell();
      if (isValid(i, j)) {
        if (!hoverCell || hoverCell[0] !== i || hoverCell[1] !== j) {
          hoverCell = [i, j];
          hoverStartTime = p.millis();
        }
      } else {
        hoverCell = null;
      }
    }

    function drawHoverEffect() {
      if (!hoverCell) return;
      const [i, j] = hoverCell;
      const cell = mazeDots[i][j];
      if (!isColor(i, j)) return;

      const centerX = j * cellSize + cellSize / 2;
      const centerY = i * cellSize + cellSize / 2;

      const elapsed = p.millis() - hoverStartTime;

      // Animate: fast grow to 1.5x, then ease back to 1.0x
      let scaleMax = .75 * cellSize;
      let scale = 1;
      if (elapsed < 150) {
        scale = p.map(elapsed, 0, 150, 1, scaleMax); // fast grow
      } else {
        scale = p.map(elapsed, 150, 600, scaleMax, 1); // slow shrink
        scale = p.constrain(scale, 1, scaleMax);
      }



      p.fill(getFillColor(cell));
      p.noStroke();
      p.ellipse(centerX, centerY, scale);
    }

    function drawGrid() {
      p.stroke(200);
      p.strokeWeight(cellSize / 24)
      for (let i = 0; i < mazeDots.length; i++) {
        for (let j = 0; j < mazeDots[0].length; j++) {
          p.fill(mazeDots[i][j] === 'block' ? 50 : 255);
          p.rect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
      }
    }

    function drawDots() {
      p.noStroke();
      for (let i = 0; i < mazeDots.length; i++) {
        for (let j = 0; j < mazeDots[0].length; j++) {
          const cell = mazeDots[i][j];
          if (cell === 'red' || cell === "blue") {
            p.fill(getFillColor(cell));
          }
          else {
            continue;
          }
          p.ellipse(j * cellSize + cellSize / 2, i * cellSize + cellSize / 2, cellSize / 3);
        }
      }
    }


    function drawCurrentDot() {
      p.stroke(200);
      p.strokeWeight(cellSize / 10);
      if (path.length > 0) {
        const cell = path[path.length - 1];
        p.noFill();
        p.ellipse(cell[1] * cellSize + cellSize / 2, cell[0] * cellSize + cellSize / 2, cellSize / 2);
      }
    }


    // function drawPath() {
    //   p.noFill();
    //   p.stroke(isInvalid() ? 'orange' : 'green');
    //   p.strokeWeight(10);
    //   p.beginShape();
    //   for (let [i, j] of path) {
    //     p.vertex(j * cellSize + cellSize / 2, i * cellSize + cellSize / 2);
    //   }
    //   p.endShape();
    // }


    function drawPath() {
      const segmentMap = getPathSegmentCounts(path);

      for (let k = 0; k < path.length - 1; k++) {
        const [i1, j1] = path[k];
        const [i2, j2] = path[k + 1];

        const key = i1 < i2 || (i1 === i2 && j1 < j2)
          ? `${i1},${j1}-${i2},${j2}`
          : `${i2},${j2}-${i1},${j1}`;

        const count = segmentMap.get(key) || 0;

        p.stroke(count > 1 ? '#333' : 'green')

        if (isInvalidPath) {
          p.stroke('orange')
        }

        p.strokeWeight((count) * cellSize / 15 + cellSize / 10);
        p.line(
          j1 * cellSize + cellSize / 2,
          i1 * cellSize + cellSize / 2,
          j2 * cellSize + cellSize / 2,
          i2 * cellSize + cellSize / 2
        );
      }
    }

    function drawStartEnd() {
      p.fill('green');

      p.textSize(cellSize / 3.5);
      p.textStyle(p.BOLD);
      p.textAlign(p.CENTER, p.TOP);

      // if (path.length === 0) {
      p.text('START', START[1] * cellSize + cellSize / 2, START[0] * cellSize + cellSize / 12);
      p.text('END', END[1] * cellSize + cellSize / 2, END[0] * cellSize + cellSize / 12);
    }

    function getCell(x: number, y: number) {
      return [Math.floor(y / cellSize), Math.floor(x / cellSize)];
    }

    function isValid(i: number, j: number) {
      return (
        i >= 0 &&
        j >= 0 &&
        i < mazeDots.length &&
        j < mazeDots[0].length &&
        mazeDots[i][j] !== 'block'
      );
    }

    function isAdjacent(i1: number, j1: number, [i2, j2]: [number, number]) {
      return Math.abs(i1 - i2) + Math.abs(j1 - j2) === 1;
    }

    function isColor(i: number, j: number) {
      return mazeDots[i][j] === 'red' || mazeDots[i][j] === 'blue';
    }





    function isWin() {
      if (path.length === 0) return false;
      let startMatch = path[0][0] === START[0] && path[0][1] === START[1];
      let endMatch = path[path.length - 1][0] === END[0] && path[path.length - 1][1] === END[1];
      return startMatch && endMatch && !isInvalid(path, mazeDots);
    }


    // function getLastPassedColor(){

    // }
  };


}


