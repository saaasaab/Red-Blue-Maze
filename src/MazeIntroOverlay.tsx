import OverlayCard from './OverlayCard';
import './MazeIntroOverlay.scss'
import alternating from './assets/alternating.svg?url';
import inOut from './assets/in-out.svg?url'

export default function MazeIntroOverlay({ onClose }: { onClose: () => void }) {
  return (
    <OverlayCard onClose={onClose}>

      <div className="maze-intro-card">

        <h1>🧠 How to Play</h1>
        <div className="rule"> 
          <h2>Objective: </h2>
          {/* <img src={alternating} alt="Alternating path rule" /> */}
          <h3>Draw a path from <strong>start</strong> to <strong>end</strong>.</h3>
        </div>

        <div className="rule"> 
          <h2>Rule 1:</h2>
          <img src={alternating} alt="Alternating path rule" />
          <h3>Your path must <strong>alternate</strong> between <span className="red-dot">red</span> and <span className="blue-dot">blue</span> dots.</h3>
        </div>


        <div className="rule"> 
          <h2>Rule 2:</h2>
          <img src={inOut} alt="Maze example"  />
          <h3>You cannot go into a dot and then back out the same way (no quick bounce-backs).</h3>
        </div>


        {/* <ul>
          <li>You can pass through white spaces, but not black tiles.</li>
          <li>You <strong>cannot</strong> step on two of the same color dots in a row.</li>
          <li></li>
        </ul> */}

        <button className="begin-btn" onClick={onClose}>Start Maze</button>
      </div>
    </OverlayCard>
  );
}