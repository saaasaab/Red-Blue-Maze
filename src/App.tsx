import { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
import './App.scss';
import sketch from './sketch.ts';
import ScorePage from './ScorePage.tsx';
import { Coord, findSpecialCells, getTodayDate, } from './utils.ts';
import { puzzles , defaultPuzzle } from './puzzles.ts'

function App() {
  const startTime = Date.now();

  const canvasRef = useRef<HTMLDivElement>(null);
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [undoCount, setUndoCount] = useState(0);
  const [resetCount, setResetCount] = useState(0);




  // const rows = 11;
  // const cols = 8;



  // const { start, end } = getRandomStartEndCorners(rows, cols);

  const pathRef = useRef<[number, number][]>([]);
  const mazeDotsRef = useRef<(string | null)[][]>([]);
  const startRef = useRef<Coord>([0,0]);
  const endRef = useRef<[number, number]>([0,0]);



  

  
  
  useEffect(() => {
    // const testPath = generateRandomPath(rows, cols, 61, start, end)

    // const testMaze = generateMazeFromPath(rows, cols, testPath);

    const today = getTodayDate()

    mazeDotsRef.current = puzzles[today] ? puzzles[today] : defaultPuzzle;
    
    
    // GPT 2
    // [
    //   [BLOCK,BLOCK,BLOCK,BLOCK,BLUE,EMPTY,EMPTY,STARTRED],
    //   [BLOCK,BLUE,EMPTY,EMPTY,EMPTY,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,EMPTY,BLOCK,RED,EMPTY,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,EMPTY,EMPTY,EMPTY,RED,EMPTY,EMPTY,BLOCK],
    //   [BLOCK,EMPTY,BLOCK,BLOCK,EMPTY,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,RED,BLOCK,BLOCK,EMPTY,BLUE,EMPTY,BLOCK],
    //   [BLOCK,BLUE,EMPTY,EMPTY,RED,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,BLOCK,BLOCK,BLUE,BLOCK,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,BLOCK,BLUE,EMPTY,EMPTY,EMPTY,RED,BLOCK],
    //   [BLOCK,BLOCK,EMPTY,BLOCK,BLOCK,BLOCK,BLOCK,BLOCK],
    //   [ENDBLUE,EMPTY,RED,BLOCK,BLOCK,BLOCK,BLOCK,BLOCK],
    // ]
    
    // GPT 1
    // [
    //   [BLOCK,BLOCK,BLOCK,BLOCK,RED,EMPTY,EMPTY,STARTBLUE],
    //   [BLOCK,EMPTY,EMPTY,BLUE,EMPTY,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,RED,BLOCK,EMPTY,EMPTY,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,EMPTY,EMPTY,EMPTY,BLUE,EMPTY,EMPTY,BLOCK],
    //   [BLOCK,EMPTY,BLOCK,BLOCK,EMPTY,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,EMPTY,BLOCK,BLOCK,EMPTY,RED,EMPTY,BLOCK],
    //   [BLOCK,BLUE,EMPTY,EMPTY,RED,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,BLOCK,BLOCK,BLUE,BLOCK,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,BLOCK,RED,EMPTY,EMPTY,EMPTY,BLUE,BLOCK],
    //   [BLOCK,BLOCK,EMPTY,BLOCK,BLOCK,BLOCK,BLOCK,BLOCK],
    //   [ENDRED,EMPTY,BLUE,BLOCK,BLOCK,BLOCK,BLOCK,BLOCK],
    // ]
    
    // ME CREATED
    // [
    //   [BLOCK,BLOCK,BLOCK,BLOCK,BLUE,EMPTY,EMPTY,STARTRED],
    //   [BLOCK,BLUE,EMPTY,EMPTY,EMPTY,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,EMPTY,BLOCK,EMPTY,EMPTY,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,EMPTY,EMPTY,EMPTY,RED,EMPTY,EMPTY,BLOCK],
    //   [BLOCK,EMPTY,BLOCK,BLOCK,EMPTY,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,EMPTY,BLOCK,BLOCK,EMPTY,RED,EMPTY,BLOCK],
    //   [BLOCK,RED,EMPTY,EMPTY,BLUE,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,BLOCK,BLOCK,BLUE,BLOCK,BLOCK,EMPTY,BLOCK],
    //   [BLOCK,BLOCK,BLUE,EMPTY,EMPTY,EMPTY,RED,BLOCK],
    //   [BLOCK,BLOCK,EMPTY,BLOCK,BLOCK,BLOCK,BLOCK,BLOCK],
    //   [ENDBLUE,EMPTY,RED,BLOCK,BLOCK,BLOCK,BLOCK,BLOCK],
    //   ]

    // FROM PUZZLE
   
      const {start, end } = findSpecialCells(mazeDotsRef.current)

      startRef.current = start
      endRef.current = end

      console.log(`start,end`, start,end)
    // pathRef.current = testPath;

  }, [])







  useEffect(() => {
    let start = startRef.current
    let end = endRef.current

    const s = sketch({ canvasRef, pathRef, onWin, mazeDotsRef, start , end});
    const p5Instance = new p5(s);
    return () => p5Instance.remove();
  }, []);

  function onWin() {
    const endTime = Date.now();
    const duration = Math.floor((endTime - startTime) / 1000);

    console.log(`duration`, duration)
    setTimeInSeconds(duration);


    setGameWon(true);

    const length = pathRef.current.length;
    const difficulty = length < 10 ? 'Easy' : length < 20 ? 'Medium' : 'Hard';

    const existing = JSON.parse(localStorage.getItem('maze-score') || '{}');
    const streak = (existing?.streak || 0) + 1;

    const score = { streak, length, difficulty };
    localStorage.setItem('maze-score', JSON.stringify(score));
  }





  return (
    <div className="maze-container">
      {
        gameWon ?
          <ScorePage pathRef={pathRef} mazeRef={mazeDotsRef} timeInSeconds={timeInSeconds} /> : <></>
      }



      <div className="top-bar">
        <div className="score">
          Undo: {undoCount} | Reset: {resetCount}
        </div>
        <div className="top-bar-controls">
          <button
            onClick={() => {
              if (pathRef.current.length > 0) {
                pathRef.current.pop();
                setUndoCount(undoCount + 1);
              }
            }}

          >
            🔙 Undo
          </button>
          <button
            onClick={() => {
              pathRef.current.length = 0;
              setResetCount(resetCount + 1);
            }}

          >
            🔄 Reset
          </button>
        </div>

      </div>

      <div ref={canvasRef} />
    </div>
  );



}

export default App;
