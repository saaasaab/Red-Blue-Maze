type Cell = 'red' | 'blue' | null | 'block';
type Grid = Cell[][];
export type Coord = [number, number];

interface MazeValidationResult {
  isValid: boolean;
  reason?: string;
}


export function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}

export function findSpecialCells(maze: (string | null)[][]): {
  start: Coord;
  end: Coord;
} {
  let start: [number, number] = [0, 0];
  let end: [number, number] = [0, 0]

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      const cell = maze[i][j];
      if (cell === 'start-red') {
        start = [i, j];
        maze[i][j] = 'red'
      }
      if (cell === 'end-blue') {
        end = [i, j];
        maze[i][j] = 'blue'
      }
      if (cell === 'start-blue') {
        start = [i, j];
        maze[i][j] = 'blue'

      }
      if (cell === 'end-red') {
        end = [i, j];
        maze[i][j] = 'red'
      }

    }
  }

  return { start, end };
}


export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomStartEndCorners(rows: number, cols: number): { start: Coord, end: Coord } {
  const corners: Coord[] = [
    [0, 0],
    [0, cols - 1],
    [rows - 1, 0],
    [rows - 1, cols - 1],
  ];

  const startIndex = Math.floor(Math.random() * 4);
  let endIndex = Math.floor(Math.random() * 4);
  while (endIndex === startIndex) {
    endIndex = Math.floor(Math.random() * 4);
  }

  return {
    start: corners[startIndex],
    end: corners[endIndex],
  };
}


export function generateMazeFromPath(rows: number, cols: number, path: Coord[]): Grid {
  const maze: Grid = Array.from({ length: rows }, () => Array(cols).fill(null));


  // const colors: Cell[] = ['red', 'blue'];
  let lastColor = null
  for (let i = 0; i < path.length; i++) {


    const [r, c] = path[i];


    const number = Math.random();

    if (i === 0) {
      const color = number < .5 ? 'red' : "blue";
      maze[r][c] = color;
      lastColor = color;
    }
    else if (i === path.length - 1) {

      const color: 'red' | 'blue' = lastColor === 'red' ? 'blue' : 'red';
      maze[r][c] = color;
      lastColor = color
    }

    else if (number < 0.3) {
      const color: 'red' | 'blue' = lastColor === 'red' ? 'blue' : 'red';
      maze[r][c] = color;
      lastColor = color
    }

    else maze[r][c] = null
    // Assign color every 2-3 steps, rest are left null for difficulty
  }




  // Optionally add some blocks to non-path cells
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const inPath = path.some(([pr, pc]) => pr === r && pc === c);
      if (!inPath && Math.random() < 0.9) {
        maze[r][c] = 'block';
      }
    }
  }

  return maze;
}


export function validateMaze(maze: Grid, path: Coord[]): MazeValidationResult {
  if (path.length < 2) {
    return { isValid: false, reason: 'Path too short' };
  }

  const seenColors = new Set<string>();

  for (let i = 0; i < path.length; i++) {
    const [r, c] = path[i];

    if (!isInsideGrid(maze, r, c)) {
      return { isValid: false, reason: `Out of bounds at (${r},${c})` };
    }

    const cell = maze[r][c];

    if (cell === 'block') {
      return { isValid: false, reason: `Path goes through a block at (${r},${c})` };
    }

    if (cell !== null) {
      if (seenColors.has(cell)) {
        return { isValid: false, reason: `Color '${cell}' used more than once` };
      }
      seenColors.add(cell);
    }

    if (i > 0) {
      const [pr, pc] = path[i - 1];
      const isAdjacent = Math.abs(pr - r) + Math.abs(pc - c) === 1;
      if (!isAdjacent) {
        return { isValid: false, reason: `Non-adjacent step between (${pr},${pc}) and (${r},${c})` };
      }
    }
  }

  return { isValid: true };
}

function isInsideGrid(grid: Grid, r: number, c: number): boolean {
  return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
}


function heuristic(a: Coord, b: Coord): number {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}



export function aStarPath(start: Coord, end: Coord, rows: number, cols: number): Coord[] | null {
  // Create the beginning to end in the shortest distance wiht A*.

  const openSet: Set<string> = new Set([start.toString()]);
  const cameFrom: Map<string, string> = new Map();
  const gScore: Map<string, number> = new Map();
  const fScore: Map<string, number> = new Map();

  gScore.set(start.toString(), 0);
  fScore.set(start.toString(), heuristic(start, end));

  const directions: Coord[] = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ];

  let basePath: Coord[] | null = null;

  while (openSet.size > 0) {
    const currentStr = Array.from(openSet).reduce((a, b) => (
      (fScore.get(a) || Infinity) < (fScore.get(b) || Infinity) ? a : b
    ));

    const [r, c] = currentStr.split(',').map(Number) as Coord;
    if (r === end[0] && c === end[1]) {
      basePath = [];
      let current = currentStr;
      while (current !== start.toString()) {
        const [ri, ci] = current.split(',').map(Number) as Coord;
        basePath.unshift([ri, ci]);
        current = cameFrom.get(current)!;
      }

      basePath.unshift(start);
      return basePath
    }


    openSet.delete(currentStr);


    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      const neighborStr = `${nr},${nc}`;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {


        const tentativeG = (gScore.get(currentStr) || 0) + 1;
        if (tentativeG < (gScore.get(neighborStr) || Infinity)) {

          cameFrom.set(neighborStr, currentStr);
          gScore.set(neighborStr, tentativeG);
          fScore.set(neighborStr, tentativeG + heuristic([nr, nc], end));
          openSet.add(neighborStr);
        }
      }
    }
  }

  return null
}


export function hasAdjacentSameColor(path: [number, number][], mazeDots: (string | null | 'block')[][]): boolean {
  // Filter out empty/null cells from the path


  const coloredPath = path.filter(([i, j]) => {
    const cell = mazeDots[i]?.[j];
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

export function hasUTurn(path: [number, number][], mazeDots: (string | null | 'block')[][]): boolean {
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

function pathCrossesBlockedTiles(path: Coord[], mazeDots: (string | null)[][]): boolean {
  for (const [r, c] of path) {
    if (mazeDots[r]?.[c] === 'block') {
      return true; // crossed a black/block tile
    }
  }
  return false;
}


export function isInvalid(path: Coord[], mazeDots: (string | null)[][]) {
  const hasConsecutiveColors = hasAdjacentSameColor(path, mazeDots);

  const isUTurn = hasUTurn(path, mazeDots);
  const crossesBlock = pathCrossesBlockedTiles(path, mazeDots);

  const isInvalidPath = hasConsecutiveColors || isUTurn || crossesBlock

  return isInvalidPath
}




function constructPath(currentStr: string, start: Coord, cameFrom: Map<string, string>) {
  let basePath: Coord[] = [];
  let current = currentStr;
  while (current !== start.toString()) {
    const [ri, ci] = current.split(',').map(Number) as Coord;
    basePath.unshift([ri, ci]);
    current = cameFrom.get(current)!;
  }
  basePath.unshift(start);

  return basePath
}



function getLastPassedColor(path: Coord[], mazeDots: (string | null)[][]): 'red' | 'blue' {
  for (let i = path.length - 1; i >= 0; i--) {
    const [r, c] = path[i];
    const val = mazeDots[r]?.[c];
    if (val === 'red' || val === 'blue') {
      return val;
    }
  }
  return 'red'; // No colored tile in path
}


// !!IT WORKS!!! 3/29/2025 at 10:44 pm
export function searchValidPathBFS(
  start: Coord,
  end: Coord,
  mazeDots: (null | string)[][]
): { path: Coord[], visited: Map<string, Set<string>> } {
  const rows = mazeDots.length;
  const cols = mazeDots[0].length;
  const directions: Coord[] = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ];

  const queue: Coord[][] = [[start]];
  const visited: Map<string, Set<string>> = new Map(); // key = "r,c", value = Set of previous colors

  function key([r, c]: Coord): string {
    return `${r},${c}`;
  }

  while (queue.length > 0) {
    const path = queue.shift()!;
    const current = path[path.length - 1];
    const currentKey = key(current);

    if (current[0] === end[0] && current[1] === end[1] && !isInvalid(path, mazeDots)) {
      return { path, visited };
    }

    const previous = path.length >= 2 ? path[path.length - 2] : null;
    const previousColor = getLastPassedColor(path, mazeDots);
    const currentVal = mazeDots[current[0]][current[1]];

    // ✅ Only skip/add visited state for white (null) tiles
    if (currentVal === null) {
      const seenColors = visited.get(currentKey) ?? new Set<string>();
      if (seenColors.has(previousColor)) continue;
      seenColors.add(previousColor);
      visited.set(currentKey, seenColors);
    }

    for (const [dr, dc] of directions) {
      const nr = current[0] + dr;
      const nc = current[1] + dc;
      const next: Coord = [nr, nc];

      if (
        nr < 0 || nr >= rows ||
        nc < 0 || nc >= cols ||
        mazeDots[nr][nc] === 'block'
      ) continue;

      // Prevent U-turn (going back to previous cell)
      if (previous && nr === previous[0] && nc === previous[1]) continue;

      const nextPath = [...path, next];

      if (!isInvalid(nextPath, mazeDots)) {
        queue.push(nextPath);
      }
    }
  }

  return { path: [], visited };
}



export function removeUTurns(path: Coord[]): [Coord[], boolean] {
  let cleaned: Coord[] = [...path];
  let hasUTurn = false;
  for (let i = 2; i < cleaned.length; i++) {
    const [prevI, prevJ] = cleaned[i - 2];
    const [currI, currJ] = cleaned[i];
    if (prevI === currI && prevJ === currJ) {
      cleaned.splice(i - 1, 1);
      hasUTurn = true
      break;
    }
  }
  return [cleaned, hasUTurn];

}


export function generateRandomPath(rows: number, cols: number, start: Coord, end: Coord): Coord[] {

  let basePath = aStarPath(start, end, rows, cols);

  const path: Coord[] = [...(basePath as Coord[])];


  // Reroute 3–4 internal points
  const rerouteCount = 4//getRandomInt(2, 1)

  for (let i = 0; i < rerouteCount; i++) {


    const index = getRandomInt(2, path.length - 2);

    let newPoint: Coord | null = null;
    let attempts = 0;


    while (attempts < 10 && !newPoint) {
      const nr = getRandomInt(1, rows - 2);
      const nc = getRandomInt(1, cols - 2);

      if (
        !path.some(([r, c]) => (Math.abs(r - nr) + Math.abs(c - nc)) <= 1) &&
        (Math.abs(nr - start[0]) + Math.abs(nc - start[1]) > 2) &&
        (Math.abs(nr - end[0]) + Math.abs(nc - end[1]) > 2)
      ) {
        newPoint = [nr, nc];
      }
      attempts++;
    }


    if (!newPoint) continue

    const before = path[index - 1];
    const after = path[index + 1];

    const segment1 = aStarPath(before, newPoint, rows, cols);
    const segment2 = aStarPath(newPoint, after, rows, cols);

    if (segment1 && segment2) {
      const combined = [...segment1.slice(1), ...segment2.slice(1)];
      path.splice(index, 1, ...combined);
    }
  }




  let uTurnsExist = true;
  let _path = [...path];

  while (uTurnsExist) {
    const [cleaned, hasUTurn] = removeUTurns(_path);
    _path = [...cleaned];
    uTurnsExist = hasUTurn
  }

  return _path;
}
