import { useEffect, useState } from 'react';
import './ScorePage.scss';

interface ScoreData {
    streak: number;
    length: number;
    timeInSeconds?: number;
    // difficulty: string;
    
}

const LOCAL_STORAGE_KEY = 'maze-score';

export default function ScorePage({ pathRef, mazeRef, timeInSeconds }: {
    pathRef: React.RefObject<[number, number][]>;
    mazeRef: React.RefObject<(string | null | 'block')[][]>;
    timeInSeconds: number;
}) {
    const [score, setScore] = useState<ScoreData>({ streak: 0, length: 0, timeInSeconds: undefined }); //, difficulty: 'Easy' 

    useEffect(() => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        const today = new Date().toISOString().split('T')[0];
        const currentLength = pathRef.current?.length || 0;
        // const difficulty = currentLength < 10 ? 'Easy' : currentLength < 20 ? 'Medium' : 'Hard';

        let updatedScore: ScoreData & { lastCompleted: string } = {
            streak: 1,
            length: currentLength,
            // difficulty,
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
        <div className="score-overlay">


            <div className="score-card">
                <h2>🎉 Your Maze Score</h2>
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

                <p><strong>Streak:</strong> {score.streak}</p>
                <p><strong>Path Length:</strong> {score.length}</p>
                {timeInSeconds !== undefined && (
                    <p><strong>Time:</strong> {timeInSeconds}s</p>
                )}
                <button onClick={shareScore} style={{ marginTop: '1rem' }}>Share Your Score</button>
            </div>

        </div>
    );
}
