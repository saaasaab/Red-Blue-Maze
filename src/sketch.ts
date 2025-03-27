import p5 from "p5";
import { Coord } from "./utils";

interface ISketch {
  canvasRef: React.RefObject<HTMLDivElement | null>;
  pathRef: React.RefObject<Coord[]>
  onWin: () => void;
  mazeDotsRef: React.RefObject<(string | null)[][]>
  start: Coord;
  end: Coord;


}

function getFittingCellSize(rows: number, cols: number): number {
  const screenWidth = window.innerWidth - 40;
  const screenHeight = window.innerHeight - 40 - 60; // 20px top + 20px bottom padding

  const maxCellWidth = screenWidth / cols;
  const maxCellHeight = screenHeight / rows;

  return Math.floor(Math.min(maxCellWidth, maxCellHeight));
}

export default function sketch(params: ISketch) {

  const { canvasRef, pathRef, onWin, mazeDotsRef, start: START, end: END } = params;
  const mazeDots = mazeDotsRef.current;

  let hoverCell: [number, number] | null = null;
  let hoverStartTime: number = 0;




  let path = pathRef.current;
  let cellSize = getFittingCellSize(mazeDots.length, mazeDots[0].length)
  let isDragging = false;
  let isInvalidPath = false;


  return (p: p5) => {
    p.preload = () => {
    };

    p.setup = () => {
      p.frameRate(10);
      p.clear(); // Clear the canvas
      p.angleMode(p.DEGREES);


      if (canvasRef.current) {
        const canvas = p.createCanvas(8 * cellSize, 11 * cellSize);

        canvas.parent(canvasRef.current);
        p.cursor(p.ARROW)
      }

      // mazeDots = [
      //   ['block', 'block', null, 'red', null, 'blue', null, 'red'],
      //   ['block', 'block', null, 'block', 'blue', 'block', 'red', 'block'],
      //   [null, 'blue', null, 'red', null, null, null, 'block'],
      //   [null, 'block', 'red', 'block', 'red', 'block', null, 'block'],
      //   [null, 'block', null, 'blue', null, null, null, 'block'],
      //   ['red', 'block', null, 'block', 'block', 'block', 'block', 'block'],
      //   [null, 'block', null, 'red', null, null, null, 'block'],
      //   [null, 'block', 'blue', 'block', 'red', 'block', null, 'block'],
      //   [null, 'blue', null, 'red', null, 'blue', null, 'block'],
      //   ['block', 'block', 'blue', 'block', 'blue', 'block', 'red', 'block'],
      //   ['block', 'block', null, 'red', null, 'blue', null, 'red'],
      // ];

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
      }


      drawHoverEffect()
      updateHoverState(); // 👈 track hover

      drawCurrentDot();
    }

    p.mouseDragged = () => {
      if (!isDragging) return;
      let [i, j] = getCell(p.mouseX, p.mouseY);
      if (!isValid(i, j)) return;
      if (isInvalid()) return;
      let last = path[path.length - 1];
      if ((last[0] !== i || last[1] !== j) && isAdjacent(i, j, last)) {
        path.push([i, j]);

        pathRef.current = path
        // if (isColor(i, j)) lastPassedColor = mazeDots[i][j];
      }
    }

    // P5.js sketch replicating the maze path game

    p.mousePressed = () => {
      let [i, j] = getCell(p.mouseX, p.mouseY);
      if (!isValid(i, j)) return;
      if (i === START[0] && j === START[1]) {
        path = [[i, j]];
        // lastPassedColor = isColor(i, j) ? mazeDots[i][j] : null;
      } else if (path.length > 0 && isAdjacent(i, j, path[path.length - 1])) {
        path.push([i, j]);

        pathRef.current = path
        // if (isColor(i, j)) lastPassedColor = mazeDots[i][j];
      }
      isDragging = true;
    }

    p.mouseReleased = () => {
      isDragging = false;
    }

    p.touchStarted = () => {
      p.mousePressed();
      return false;
    }


    p.touchMoved = () => {
      p.mouseDragged();
      return false;
    }

    p.touchEnded = () => {
      p.mouseReleased();
      return false;
    }

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

        if (isInvalid()) {
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

      if (path.length === 0) {
        p.text('START', START[1] * cellSize + cellSize / 2, START[0] * cellSize + cellSize / 12);
      }
      else {
        p.text('Reset', START[1] * cellSize + cellSize / 2, START[0] * cellSize + cellSize / 12);

      }
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


    function hasAdjacentSameColor(path: [number, number][], mazeDots: (string | null | 'block')[][]): boolean {
      // Filter out empty/null cells from the path
      const coloredPath = path.filter(([i, j]) => {
        const cell = mazeDots[i][j];
        return cell === 'red' || cell === 'blue';
      });

      // Loop through adjacent pairs and compare colors
      for (let k = 1; k < coloredPath.length; k++) {
        const [prevI, prevJ] = coloredPath[k - 1];
        const [currI, currJ] = coloredPath[k];
        const prevColor = mazeDots[prevI][prevJ];
        const currColor = mazeDots[currI][currJ];
        if (prevColor === currColor) {
          return true; // Found two adjacent colored cells with the same color
        }
      }

      return false; // No invalid adjacent colors found
    }
    function hasUTurn(path: [number, number][], mazeDots: (string | null | 'block')[][]): boolean {
      for (let i = 2; i < path.length; i++) {
        const [prevI, prevJ] = path[i - 2];
        const [midI, midJ] = path[i - 1];
        const [currI, currJ] = path[i];


        const midColor = mazeDots[midI][midJ];
        if (midColor === 'red' || midColor === 'blue') {
          if (prevI === currI && prevJ === currJ) {
            return true;
          }
        }
      }
      return false;
    }

    function isInvalid() {
      const hasConsecutiveColors = hasAdjacentSameColor(path, mazeDots);
      const isUTurn = hasUTurn(path, mazeDots);
      isInvalidPath = hasConsecutiveColors || isUTurn
      return isInvalidPath
    }

    function isWin() {
      if (path.length === 0) return false;
      let startMatch = path[0][0] === START[0] && path[0][1] === START[1];
      let endMatch = path[path.length - 1][0] === END[0] && path[path.length - 1][1] === END[1];
      return startMatch && endMatch && !isInvalid();
    }


    // function getLastPassedColor(){

    // }
  };


}


