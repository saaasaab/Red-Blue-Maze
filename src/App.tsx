import { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
import './App.scss';
import sketch from './sketch.ts';
import { Coord, findSpecialCells, generateMaze, getTodayDate, } from './utils.ts';
import { defaultPuzzle, puzzles } from './puzzles.ts';
import ScorePage from './ScorePage.tsx';
import { Undo, RefreshCcwDotIcon, HelpCircleIcon } from 'lucide-react'; //Box, Bike
import MazeIntroOverlay from './MazeIntroOverlay.tsx';
// import MazeIntroOverlay from './MazeIntroOverlay.tsx';
const INTRO_STORAGE_KEY = 'maze-has-seen-intro';

function App() {
  const startTime = Date.now();


  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [undoCount, setUndoCount] = useState(0);
  const [resetCount, setResetCount] = useState(0);
  const [closeOverlay, setCloseOverlay] = useState(false)
  const [generateNewCount, setGenerateNewCount] = useState(0)
  const [showIntro, setShowIntro] = useState(false);

  const overlayOpenRef = useRef<boolean>(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<Coord[]>([]);
  const mazeDotsRef = useRef<(string | null)[][]>([]);
  const startRef = useRef<Coord>([0, 0]);
  const endRef = useRef<[number, number]>([0, 0]);
  const visitedRef = useRef<(Map<string, Set<string>>) | null>(null);


  useEffect(() => {


    // const today = getTodayDate()

    // mazeDotsRef.current = puzzles[today] ? puzzles[today] : defaultPuzzle;
    // // maze;  

    // const { start, end } = findSpecialCells(mazeDotsRef.current)
    // // findSpecialCells(mazeDotsRef.current)

    // console.log(`today`, today)
    // startRef.current = start
    // endRef.current = end



    onNewMaze()


  }, [])

  useEffect(() => {
    let start = startRef.current
    let end = endRef.current

    const s = sketch({  overlayOpenRef, canvasRef, pathRef, onWin, mazeDotsRef, start, end, visited: visitedRef.current });
    const p5Instance = new p5(s);

    return () => p5Instance.remove();


  }, [generateNewCount]);



  useEffect(() => {
    const hasSeenIntro = localStorage.getItem(INTRO_STORAGE_KEY);
    if (!hasSeenIntro) {
      setShowIntro(true);
      overlayOpenRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showIntro]);


  const handleCloseIntro = () => {
    localStorage.setItem(INTRO_STORAGE_KEY, 'true');
    setShowIntro(false);
    overlayOpenRef.current = false;
  };



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
    overlayOpenRef.current=true;
    
  }

  const onNewMaze = () => {
    setGameWon(false);

    const rows = 15;
    const cols = 13;


    const { maze, start, end } = generateMaze(rows, cols) // path,

    startRef.current = start
    endRef.current = end

    const { maze: _maze } = findSpecialCells(maze)

    mazeDotsRef.current = _maze;
    pathRef.current = [];

    const _generateNewCount = generateNewCount + 1;
    setGenerateNewCount(_generateNewCount);
  }

  // useEffect(()=>{
  //   // console.log(`generateNewCount`, generateNewCount)
  // },[generateNewCount])



  return (
    <div className="maze-container">
      {
        gameWon && !closeOverlay ?
          <ScorePage pathRef={pathRef} mazeRef={mazeDotsRef} timeInSeconds={timeInSeconds} onClose={onClose} onNewMaze={onNewMaze} /> : <></>
      }


      {showIntro && <MazeIntroOverlay onClose={handleCloseIntro} />}


      <div className="top-bar">
        <div className="top-bar-controls-left">
          <button
            onClick={() => {setShowIntro(true); overlayOpenRef.current = true}}
            onTouchStart={() => {setShowIntro(true); overlayOpenRef.current = true}}

          >
            <HelpCircleIcon /> Help
          </button>

        </div>
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

      <div ref={canvasRef} style={{ pointerEvents: overlayOpenRef.current ? 'none' : 'all' }}
/>
    </div>
  );



}

export default App;
