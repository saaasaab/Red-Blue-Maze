type Cell = 'red' | 'blue' | null | 'block' | 'start-red' | 'start-blue'| 'end-red' | 'end-blue';
type Grid = Cell[][];
export type Coord = [number, number];

interface MazeValidationResult {
  isValid: boolean;
  reason?: string;
}


export function getTodayDate(): string {
  const localeDate = new Date().toLocaleDateString();
  const parsedDate = new Date(localeDate);
  const normalized = parsedDate.toISOString().split('T')[0];
  
  return normalized;
}

export function findSpecialCells(maze: (string | null)[][]): {
  start: Coord;
  end: Coord;
  maze: (string | null)[][];
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

  return { maze: JSON.parse(JSON.stringify(maze)), start, end };
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

function sealOuterWalls(
  mazeDots:  Grid,
  path: [number, number][]
): Grid {
  const rows = mazeDots.length;
  const cols = mazeDots[0].length;

  const isInPath = new Set(path.map(([r, c]) => `${r},${c}`));

  // Check top and bottom rows
  for (let c = 0; c < cols; c++) {
    if (mazeDots[0][c] === null && !isInPath.has(`0,${c}`)) {
      mazeDots[0][c] = 'block';
    }
    if (mazeDots[rows - 1][c] === null && !isInPath.has(`${rows - 1},${c}`)) {
      mazeDots[rows - 1][c] = 'block';
    }
  }

  // Check left and right columns
  for (let r = 0; r < rows; r++) {
    if (mazeDots[r][0] === null && !isInPath.has(`${r},0`)) {
      mazeDots[r][0] = 'block';
    }
    if (mazeDots[r][cols - 1] === null && !isInPath.has(`${r},${cols - 1}`)) {
      mazeDots[r][cols - 1] = 'block';
    }
  }

  return JSON.parse(JSON.stringify(mazeDots));
}


export function generateMaze(rows: number, cols: number): { maze: Grid, path: Coord[], start: Coord, end: Coord } {
  const maze: Grid = Array.from({ length: rows }, () => Array(cols).fill(null));

  let count = 0;
  const { start, end } = getRandomStartEndCorners(rows, cols);
  // const number = Math.random();
  // const color = number < .5 ? 'red' : "blue";
  // let lastColor = color;
  maze[start[0]][start[1]] = 'red';
  maze[end[0]][end[1]] = 'blue';



  // Creates a maze with a random start and end with NO obstacles
  const validPath = searchValidPathBFS(
    start,
    end,
    maze
  )

  // let basePath = aStarPath(start, end, rows, cols);

  const path: Coord[] = [...(validPath.path as Coord[])];

  let sameCount = 0;
  let pathCount = 0;
  let lastColor = maze[path[0][0]][path[0][1]]

  while (path.length < 140 && count < 2000) {

    count++;

    if (count % 200 === 0) {
      console.log(`count`, count,path.length)
    }

    if (path.length === pathCount) {
      sameCount++;
    }

    pathCount = path.length;

    // CHANGE THIS NUMBER UP OR DOWN TO MAKE THE BLOCKS MORE OR LESS
    if (sameCount > 120) {
      sameCount = 0;

      const blocks = getRandomBlocks(maze)
      blocks.forEach(block => {
        maze[block[0]][block[1]] = null;
      })
      // Randomly remove 10 blocks. 
    }



    const nr = getRandomInt(0, rows - 1);
    const nc = getRandomInt(0, cols - 1);



    if (
      !path.some(([r, c]) => (Math.abs(r - nr) + Math.abs(c - nc)) <= 1) &&
      (Math.abs(nr - start[0]) + Math.abs(nc - start[1]) > 2) &&
      (Math.abs(nr - end[0]) + Math.abs(nc - end[1]) > 2)
    ) {

      const _maze = JSON.parse(JSON.stringify(maze));

      const randomPathPointIndex = getRandomInt(1, path.length - 2);
      const randomPathPoint = path[randomPathPointIndex];


      const color: 'red' | 'blue' = lastColor === 'red' ? 'blue' : 'red';



      if (Math.random() < 0.1) {
        _maze[randomPathPoint[0]][randomPathPoint[1]] = color;
        lastColor = color;
      }
      else if (
        _maze[randomPathPoint[0]][randomPathPoint[1]] !== 'blue' &&
        _maze[randomPathPoint[0]][randomPathPoint[1]] !== 'red'
      ) {
        _maze[randomPathPoint[0]][randomPathPoint[1]] = 'block';
      }


      if (Math.random() < 0.25 && (_maze[randomPathPoint[0]][randomPathPoint[1]] === 'blue' ||
        _maze[randomPathPoint[0]][randomPathPoint[1]] === 'red')) {
        _maze[randomPathPoint[0]][randomPathPoint[1]] = 'block';

      }

      const isValidPath = searchValidPathBFS(
        start,
        end,
        _maze
      )



      if (isValidPath.path.length) {
        path.splice(0, path.length, ...isValidPath.path);
        maze.splice(0, maze.length, ..._maze);
      }
    }

  }


  const __path = searchValidPathBFS(
    start,
    end,
    maze
  )

  const __maze = sealOuterWalls(
    maze,
    path)


  const ___maze = markStartEndColors(
    __maze,
    start,
    end)



  return { maze: ___maze, path: __path.path, start, end }
}



function getRandomBlocks(mazeDots: (null | string)[][], count = 10): [number, number][] {
  const rows = mazeDots.length;
  const cols = mazeDots[0].length;

  const candidates: [number, number][] = [];

  // Step 1: Gather all empty (null) cells
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mazeDots[r][c] === 'block') {
        candidates.push([r, c]);
      }
    }
  }

  // Step 2: Shuffle candidates
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }


  const randomBlocks = []
  // Step 3: Add blocks to the first `count` candidates
  for (let i = 0; i < Math.min(count, candidates.length); i++) {
    randomBlocks.push(candidates[i])
  }

  return randomBlocks
}



function markStartEndColors(
  mazeDots: Grid,
  start: Coord,
  end: Coord
): Grid {
  const [sr, sc] = start;
  const [er, ec] = end;

  const startVal = mazeDots[sr][sc];
  const endVal = mazeDots[er][ec];

  if (startVal === 'red') {
    mazeDots[sr][sc] = 'start-red';
  } else if (startVal === 'blue') {
    mazeDots[sr][sc] = 'start-blue';
  }

  if (endVal === 'red') {
    mazeDots[er][ec] = 'end-red';
  } else if (endVal === 'blue') {
    mazeDots[er][ec] = 'end-blue';
  }

  return JSON.parse(JSON.stringify(mazeDots));
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

export function aStarPathForConnectingClicks(start: Coord, end: Coord, maze:(string | null | 'block')[][]): Coord[] | null {
  // Create the beginning to end in the shortest distance wiht A*.
  const rows = maze.length;
  const cols = maze[0].length;

  maze[start[0]][start[1]] = null;
  maze[end[0]][end[1]] = null;

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
  


      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && maze[nr][nc] === null) {
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
