import { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
import './App.scss';
import sketch from './sketch.ts';
import { Coord, findSpecialCells, generateMaze, getTodayDate, } from './utils.ts';
import { defaultPuzzle, puzzles } from './puzzles.ts';
import ScorePage from './ScorePage.tsx';
import { Undo, RefreshCcwDotIcon } from 'lucide-react'; //Box, Bike

function App() {
  const startTime = Date.now();

  const canvasRef = useRef<HTMLDivElement>(null);
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [undoCount, setUndoCount] = useState(0);
  const [resetCount, setResetCount] = useState(0);
  const [closeOverlay, setCloseOverlay] = useState(false)
  const [generateNewCount, setGenerateNewCount] = useState(0)


  // const rows = 11;
  // const cols = 8;


  const pathRef = useRef<Coord[]>([]);
  const mazeDotsRef = useRef<(string | null)[][]>([]);
  const startRef = useRef<Coord>([0, 0]);
  const endRef = useRef<[number, number]>([0, 0]);
  const visitedRef = useRef<(Map<string, Set<string>>) | null>(null);


  useEffect(() => {

    // const { maze, start, end } = generateMaze(rows, cols) // path,

    const today = getTodayDate()

    mazeDotsRef.current = puzzles[today] ? puzzles[today] : defaultPuzzle;
    // /maze;  

    const { start, end } = findSpecialCells(mazeDotsRef.current)
    // findSpecialCells(mazeDotsRef.current)

    console.log(`today`, today)
    startRef.current = start
    endRef.current = end
    // pathRef.current = path
    // visitedRef.current = visited;
  }, [])

  useEffect(() => {
    let start = startRef.current
    let end = endRef.current

    const s = sketch({ canvasRef, pathRef, onWin, mazeDotsRef, start, end, visited: visitedRef.current });
    const p5Instance = new p5(s);

    return () => p5Instance.remove();


  }, [generateNewCount]);

  function onWin() {
    const endTime = Date.now();
    const duration = Math.floor((endTime - startTime) / 1000);

    setTimeInSeconds(duration);

    setGameWon(true);
  }




  const onClickUndoHandler = () => {
    if (pathRef.current.length > 0) {
      pathRef.current.pop();
      setUndoCount(undoCount + 1);
    }
  }

  const onClickResethandler = () => {
    pathRef.current.length = 0;
    setResetCount(resetCount + 1);
  }


  const onClose = () => {
    setCloseOverlay(true)
  }

  const onNewMaze = () => {
    setGameWon(false);

    const rows = 11;
    const cols = 8;


    const { maze, start, end } = generateMaze(rows, cols) // path,

    console.log(`maze, start, end `, maze, start, end )
    // console.log(`object`, object)

    startRef.current = start
    endRef.current = end


    const {maze:_maze} = findSpecialCells(maze)


    mazeDotsRef.current = _maze;
    pathRef.current = [];


    const _generateNewCount = generateNewCount + 1;
    setGenerateNewCount(_generateNewCount);

  }

  useEffect(()=>{
    console.log(`generateNewCount`, generateNewCount)
  },[generateNewCount])

  return (
    <div className="maze-container">
      {
        gameWon && !closeOverlay ?
          <ScorePage pathRef={pathRef} mazeRef={mazeDotsRef} timeInSeconds={timeInSeconds} onClose={onClose} onNewMaze={onNewMaze} /> : <></>
      }


      <div className="top-bar">
        <div className="top-bar-controls">
          <button
            onClick={onClickResethandler}
            onTouchStart={onClickResethandler}

          >
            <RefreshCcwDotIcon /> Reset: {resetCount}
          </button>
          <button
            onClick={onClickUndoHandler}
            onTouchStart={onClickUndoHandler}

          >
            <Undo /> Undo: {undoCount}
          </button>

        </div>

      </div>

      <div ref={canvasRef} />
    </div>
  );



}

export default App;
