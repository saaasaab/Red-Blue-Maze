import { useEffect, useState } from 'react';
import './ScorePage.scss';
import OverlayCard from './OverlayCard';

interface ScoreData {
    streak: number;
    length: number;
    timeInSeconds?: number;


}

const LOCAL_STORAGE_KEY = 'maze-score';

export default function ScorePage({ pathRef, mazeRef, timeInSeconds, onClose, onNewMaze }: {
    pathRef: React.RefObject<[number, number][]>;
    mazeRef: React.RefObject<(string | null | 'block')[][]>;
    timeInSeconds: number;
    onClose: () => void;
    onNewMaze: () => void;
}) {

    const [score, setScore] = useState<ScoreData>({ streak: 0, length: 0, timeInSeconds: undefined });
    useEffect(() => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);

        const today = new Date().toISOString().split('T')[0];
        const currentLength = pathRef.current?.length || 0;

        let updatedScore: ScoreData & { lastCompleted: string } = {
            streak: 1,
            length: currentLength,
            lastCompleted: today,
            timeInSeconds
        };

        if (saved) {
            const parsed = JSON.parse(saved);

            const lastDate = parsed.lastCompleted;
            const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

            if (lastDate === today) {
                // already completed today
                updatedScore = parsed;
            } else if (lastDate === yesterday) {
                // streak continues
                updatedScore.streak = parsed.streak + 1;
            } else {
                // missed a day
                updatedScore.streak = 1;
            }
        }

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedScore));
        setScore(updatedScore);
    }, []);

    const shareScore = () => {
        // const emojiMap: Record<string, string> = {
        //     red: '🟥',
        //     blue: '🟦',
        //     empty: '⬜'
        // };

        const blocks = mazeRef.current?.map((row, i) =>
            row.map((cell, j) => {
                const inPath = pathRef.current?.some(([pi, pj]) => pi === i && pj === j);
                if (!inPath) return '⬛';
                if (cell === 'red') return '🟥';
                if (cell === 'blue') return '🟦';
                return '⬜';
            }).join('') + '\n'
        ).join('')

        const text = `Maze Challenge
Streak: ${score.streak} 🔥
Length: ${score.length} 📏

${blocks}

Play at: your-maze-game.com`;
        navigator.clipboard.writeText(text).then(() => alert('Score copied to clipboard!'));
    };

    return (

        <OverlayCard onClose={onClose}>
                <div className="score-card">
                   
                    <h2>🎉 CONGRATS! </h2>
                    <h2>Keep your streak going! Come back tomorrow.</h2>
                    <p><strong>Streak:</strong> {score.streak}</p>


                    {timeInSeconds !== undefined && (
                        <p><strong>Time:</strong> {timeInSeconds}s</p>
                    )}
                    <pre className="share-preview">
                        {mazeRef.current?.map((row, i) =>
                            row.map((cell, j) => {
                                const inPath = pathRef.current?.some(([pi, pj]) => pi === i && pj === j);
                                if (!inPath) return '⬛';
                                if (cell === 'red') return '🟥';
                                if (cell === 'blue') return '🟦';
                                return '⬜';
                            }).join('') + '\n'
                        ).join('')}
                    </pre>





                    <div className="new-puzzle">
                        <button onClick={shareScore} onTouchStart={shareScore}>Share the Path</button>
                        <button onClick={onNewMaze} onTouchStart={onNewMaze}>Generate New Puzzle</button>
                    </div>
                </div>
        </OverlayCard >

    );
}
