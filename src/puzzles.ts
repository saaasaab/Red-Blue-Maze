const RED = 'red';
const BLUE = 'blue';
const EMPTY = null;
const BLOCK = 'block';
const STARTRED = 'start-red'
const STARTBLUE = 'start-blue'
const ENDRED = 'end-red';
const ENDBLUE = 'end-blue'

export const defaultPuzzle = [
    [BLOCK, BLOCK, EMPTY, RED, EMPTY, BLUE, EMPTY, ENDRED],
    [BLOCK, BLOCK, EMPTY, BLOCK, BLUE, BLOCK, RED, BLOCK],
    [EMPTY, BLUE, EMPTY, RED, EMPTY, EMPTY, EMPTY, BLOCK],
    [EMPTY, BLOCK, RED, BLOCK, RED, BLOCK, EMPTY, BLOCK],
    [EMPTY, BLOCK, EMPTY, BLUE, EMPTY, EMPTY, EMPTY, BLOCK],
    [RED, BLOCK, EMPTY, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK],
    [EMPTY, BLOCK, EMPTY, RED, EMPTY, EMPTY, EMPTY, BLOCK],
    [EMPTY, BLOCK, BLUE, BLOCK, RED, BLOCK, EMPTY, BLOCK],
    [EMPTY, BLUE, EMPTY, RED, EMPTY, BLUE, EMPTY, BLOCK],
    [BLOCK, BLOCK, BLUE, BLOCK, BLUE, BLOCK, RED, BLOCK],
    [BLOCK, BLOCK, EMPTY, RED, EMPTY, BLUE, EMPTY, STARTRED],
]
export const puzzles: Record<string, (string | null)[][]> =
{
    "2025-03-30": [
        [BLOCK, BLOCK, BLOCK, BLOCK, RED, EMPTY, EMPTY, STARTBLUE],
        [BLOCK, RED, EMPTY, EMPTY, EMPTY, BLOCK, EMPTY, BLOCK],
        [BLOCK, EMPTY, BLOCK, BLUE, EMPTY, BLOCK, EMPTY, BLOCK],
        [BLOCK, EMPTY, EMPTY, EMPTY, RED, RED, EMPTY, BLOCK],
        [BLOCK, EMPTY, BLOCK, BLOCK, EMPTY, BLOCK, EMPTY, BLOCK],
        [BLOCK, BLUE, BLOCK, BLOCK, EMPTY, RED, EMPTY, BLOCK],
        [BLOCK, RED, EMPTY, EMPTY, BLUE, BLOCK, EMPTY, BLOCK],
        [BLOCK, BLOCK, BLOCK, RED, BLOCK, BLOCK, EMPTY, BLOCK],
        [BLOCK, BLOCK, RED, EMPTY, EMPTY, EMPTY, BLUE, BLOCK],
        [BLOCK, BLOCK, EMPTY, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK],
        [ENDRED, EMPTY, BLUE, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK],
    ],
    "2025-03-31": [
        [BLOCK, BLOCK, EMPTY, RED, EMPTY, BLUE, EMPTY, ENDRED],
        [BLOCK, BLOCK, EMPTY, BLOCK, BLUE, BLOCK, RED, BLOCK],
        [EMPTY, BLUE, EMPTY, RED, EMPTY, EMPTY, EMPTY, BLOCK],
        [EMPTY, BLOCK, RED, BLOCK, RED, BLOCK, EMPTY, BLOCK],
        [EMPTY, BLOCK, EMPTY, BLUE, EMPTY, EMPTY, EMPTY, BLOCK],
        [RED, BLOCK, EMPTY, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK],
        [EMPTY, BLOCK, EMPTY, RED, EMPTY, EMPTY, EMPTY, BLOCK],
        [EMPTY, BLOCK, BLUE, BLOCK, RED, BLOCK, EMPTY, BLOCK],
        [EMPTY, BLUE, EMPTY, RED, EMPTY, BLUE, EMPTY, BLOCK],
        [BLOCK, BLOCK, BLUE, BLOCK, BLUE, BLOCK, RED, BLOCK],
        [BLOCK, BLOCK, EMPTY, RED, EMPTY, BLUE, EMPTY, STARTRED],

    ],
    "2025-04-01": [
        ["start-red", "blue", null, null, null, null, null, null],
        [null, null, "block", null, null, null, "block", null],
        [null, "block", null, null, null, "block", null, null],
        ["block", null, "block", null, null, "block", null, null],
        [null, "block", null, "blue", null, "block", null, null],
        ["red", null, null, null, "block", null, null, "block"],
        [null, "block", null, "block", null, "block", null, null],
        [null, null, null, "block", "block", null, "blue", null],
        ["blue", null, null, "block", null, null, null, null],
        [null, "block", null, "block", "red", null, "block", null],
        ["end-blue", null, null, null, "block", null, null, null]
    ],
    "2025-04-02": [
        // This is the one from https://puzzling.stackexchange.com/questions/47243/a-blue-white-and-red-maze
        [ENDBLUE, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK],
        [EMPTY, BLUE, EMPTY, RED, EMPTY, EMPTY, EMPTY, BLOCK],
        [EMPTY, BLOCK, RED, BLOCK, EMPTY, BLOCK, RED, BLOCK],
        [EMPTY, EMPTY, EMPTY, BLUE, EMPTY, BLUE, EMPTY, BLOCK],
        [BLUE, BLOCK, EMPTY, BLOCK, EMPTY, BLOCK, EMPTY, BLOCK],
        [EMPTY, EMPTY, EMPTY, BLUE, EMPTY, EMPTY, EMPTY, BLOCK],
        [RED, BLOCK, BLUE, BLOCK, RED, BLOCK, BLUE, BLOCK],
        [EMPTY, RED, EMPTY, EMPTY, EMPTY, RED, EMPTY, BLOCK],
        [EMPTY, BLOCK, EMPTY, BLOCK, EMPTY, BLOCK, EMPTY, BLOCK],
        [EMPTY, EMPTY, EMPTY, RED, EMPTY, EMPTY, EMPTY, BLOCK],
        [BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK, STARTRED, BLOCK],
    ],
    "2025-04-03": [

        [BLOCK, BLOCK, BLOCK, BLOCK, BLUE, EMPTY, EMPTY, STARTRED],
        [BLOCK, BLUE, EMPTY, EMPTY, EMPTY, BLOCK, EMPTY, BLOCK],
        [BLOCK, EMPTY, BLOCK, EMPTY, EMPTY, BLOCK, EMPTY, BLOCK],
        [BLOCK, EMPTY, EMPTY, EMPTY, RED, EMPTY, EMPTY, BLOCK],
        [BLOCK, EMPTY, BLOCK, BLOCK, EMPTY, BLOCK, EMPTY, BLOCK],
        [BLOCK, EMPTY, BLOCK, BLOCK, EMPTY, RED, EMPTY, BLOCK],
        [BLOCK, RED, EMPTY, EMPTY, BLUE, BLOCK, EMPTY, BLOCK],
        [BLOCK, BLOCK, BLOCK, BLUE, BLOCK, BLOCK, EMPTY, BLOCK],
        [BLOCK, BLOCK, BLUE, EMPTY, EMPTY, EMPTY, RED, BLOCK],
        [BLOCK, BLOCK, EMPTY, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK],
        [ENDBLUE, EMPTY, RED, BLOCK, BLOCK, BLOCK, BLOCK, BLOCK],

    ],

    "2025-04-04": [
        [null, null, null, null, null, null, "blue", "start-blue"],
        [null, null, null, null, null, "block", null, null],
        [null, null, "block", "block", null, "blue", "block", null],
        [null, null, null, "block", null, "red", null, "red"],
        [null, null, null, null, null, "blue", "block", null],
        [null, "block", "red", null, null, "block", "block", null],
        ["block", null, "red", null, "red", null, null, null],
        [null, null, "red", "red", null, null, null, null],
        [null, "block", "block", null, null, null, "block", null],
        [null, null, null, "blue", "red", null, null, null],
        [null, null, "blue", null, "blue", "block", null, "end-red"]
    ],

    "2025-04-05": [
        ["start-red", null, null, null, null, "red", null, null],
        [null, null, "red", null, "red", null, null, null],
        ["block", "blue", null, "red", null, null, null, null],
        [null, "blue", "blue", "red", "red", "block", "blue", "blue"],
        [null, "red", null, null, "blue", "blue", null, "red"],
        [null, "block", "red", null, "red", "block", null, null],
        ["red", "blue", null, null, null, "block", "blue", "block"],
        [null, null, null, null, "block", null, "blue", null],
        [null, "blue", null, "red", "red", "blue", "red", "red"],
        ["red", null, null, null, null, null, "blue", "red"],
        [null, "block", null, null, "red", null, "blue", "start-blue"]
    ],

    "2025-04-06": [
        [null, null, null, null, null, null, null, null],
        [null, "block", null, null, null, "block", null, null],
        ["block", "block", null, null, "block", null, "block", null],
        [null, "red", null, "red", null, null, null, null],
        ["block", null, "block", null, "block", null, null, null],
        [null, null, "block", "block", null, "blue", null, "block"],
        [null, null, null, null, "blue", null, "block", null],
        [null, null, "blue", null, null, null, null, null],
        [null, "block", null, "block", "block", null, "block", null],
        ["block", null, null, null, "block", "blue", "red", null],
        ["end-red", null, null, null, "block", null, "blue", "start-blue"]
    ],
    "2025-04-07": [
        ["red", null, null, null, null, "block", null, "start-blue"],
        [null, "blue", null, null, "red", "red", null, "block"],
        [null, "blue", "block", null, "blue", "block", null, null],
        [null, null, null, "block", null, "red", "blue", null],
        [null, null, null, "blue", "red", "block", "block", null],
        [null, "red", null, null, "red", null, null, "red"],
        ["red", null, "red", "block", null, "red", "blue", null],
        ["blue", "block", null, null, "red", "red", null, null],
        [null, null, "block", "red", null, "red", "blue", null],
        ["red", "blue", null, null, "block", null, "blue", null],
        ["end-red", "blue", null, "red", "red", null, null, null]
    ],

    "2025-04-08": [
        [null, null, null, null, null, null, null, null],
        [null, null, null, "block", null, null, null, null],
        [null, "block", "block", "red", null, "blue", null, null],
        [null, "block", null, null, "red", null, null, "block"],
        ["blue", null, "block", "blue", "block", null, "block", null],
        ["block", null, null, "block", "block", "red", null, null],
        [null, "block", null, null, null, "red", null, null],
        [null, null, null, null, null, null, null, "block"],
        [null, null, "red", "block", null, "red", null, null],
        ["red", "block", null, "blue", "blue", "block", "block", null],
        ["end-blue", null, "blue", null, null, null, "blue", "start-red"]
    ],
    "2025-04-09": [
        [null, null, null, null, "blue", "blue", "block", "end-blue"],
        [null, null, "red", null, "red", "block", null, "red"],
        [null, "red", "blue", "block", "block", "red", "block", "blue"],
        [null, null, "blue", null, "blue", null, "red", "red"],
        [null, "block", null, "block", "blue", null, "red", null],
        ["block", null, null, "block", null, "blue", null, "blue"],
        [null, null, "block", null, null, "block", "red", null],
        [null, "red", null, null, null, null, "block", null],
        [null, "block", null, "block", "block", null, "block", "block"],
        ["red", "red", "blue", "red", "blue", null, null, null],
        ["start-red", "blue", null, "block", "block", null, null, null]
    ],
    "2025-04-10": [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, "block", null, null, null],
        [null, null, null, "blue", null, null, "block", null],
        [null, null, null, "block", null, null, null, "red"],
        [null, null, null, null, "block", null, "blue", null],
        [null, null, "block", "block", null, "block", null, null],
        [null, "blue", "block", "red", "blue", null, null, "block"],
        [null, "blue", "block", null, "block", null, "red", null],
        ["red", "red", "red", "blue", null, "red", null, null],
        ["block", null, "block", null, "block", null, null, null],
        ["end-blue", null, null, "blue", null, null, "block", "start-red"]
    ],
    "2025-04-11": [
        ["end-red", null, null, "block", null, null, null, "start-blue"],
        [null, "block", null, null, "block", "blue", null, null],
        ["block", null, "block", null, "block", null, "block", null],
        [null, null, null, null, null, "red", null, "red"],
        [null, null, "red", "block", "block", "block", "block", null],
        [null, null, "block", null, "blue", "block", null, null],
        [null, "blue", "block", null, null, "block", null, null],
        [null, "block", null, null, null, "block", null, null],
        ["block", null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
    ],

    "2025-04-12": [
        ["start-red", "blue", "blue", null, null, "red", null, null],
        [null, "red", null, null, "blue", null, null, null],
        [null, null, "red", null, "blue", null, null, null],
        [null, null, null, "blue", null, "red", "block", null],
        ["red", null, "blue", null, null, "block", null, null],
        [null, "red", "blue", null, "block", "blue", "red", "block"],
        [null, "block", null, "blue", "red", null, null, null],
        ["blue", "block", null, "blue", null, null, null, "blue"],
        ["red", null, "blue", null, "red", null, "blue", null],
        ["block", "red", "red", "blue", "red", null, null, null],
        ["end-blue", null, "red", "block", null, "red", null, null]
    ],
    "2025-04-13": [
        ["end-blue", "red", "blue", "red", null, null, "block", "start-red"],
        [null, "red", null, "blue", "blue", null, "block", "blue"],
        ["red", "blue", "block", null, "blue", null, "blue", null],
        [null, "red", null, "block", null, "blue", "blue", null],
        [null, "red", "block", null, "block", "blue", "block", "red"],
        ["red", null, null, "block", null, null, "red", null],
        [null, "red", null, "red", "blue", "block", null, null],
        ["blue", null, "block", null, null, null, null, "red"],
        [null, "block", "block", null, null, null, null, null],
        [null, null, "red", null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
    ],
    "2025-04-14": [
        ["start-blue", "block", "block", null, null, null, null, "end-red"],
        ["red", null, "red", null, "block", "red", "red", null],
        [null, "block", "blue", null, "red", "block", null, "red"],
        [null, "blue", null, "block", "block", "blue", "blue", null],
        [null, "block", null, null, null, "block", "red", null],
        ["block", "block", null, "blue", null, "block", "block", null],
        [null, null, null, null, null, "block", "block", null],
        [null, null, "block", null, "block", null, null, null],
        [null, null, null, null, "block", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
    ],
    "2025-04-15": [
        ["end-red", "block", null, null, null, null, "block", "start-blue"],
        [null, null, "block", null, null, "block", "blue", null],
        ["block", null, "block", null, "blue", "red", "blue", null],
        [null, null, null, "red", "block", null, null, null],
        ["block", "block", null, null, "block", "block", null, null],
        [null, "block", "block", null, null, "red", "block", null],
        [null, null, null, "block", null, null, "block", null],
        ["block", "blue", "red", "block", null, null, "block", null],
        [null, null, null, "block", null, null, null, "block"],
        [null, "block", null, "block", "block", null, null, null],
        [null, null, null, null, null, null, null, null]
    ],
    "2025-04-16": [
        [null, null, null, "red", null, null, null, "start-red"],
        ["block", null, null, "blue", "block", null, "block", null],
        [null, null, null, "block", null, "blue", "block", "block"],
        [null, "block", null, "block", "block", "red", null, null],
        [null, "block", "block", "red", null, null, null, null],
        [null, null, "red", "block", "block", null, "block", null],
        [null, null, "block", null, null, "block", null, null],
        [null, null, "block", null, null, "block", null, null],
        [null, "block", null, null, "block", null, "block", null],
        [null, null, null, "block", "blue", null, "red", null],
        ["end-blue", null, null, "block", null, null, null, null]
    ],
    "2025-04-17": [
        ["end-red", null, null, "block", null, "red", null, "blue"],
        [null, "block", "block", "blue", null, "block", null, null],
        [null, null, "block", "blue", null, "blue", null, null],
        [null, null, null, "red", null, null, "red", "red"],
        [null, null, null, "block", null, "blue", "block", "block"],
        [null, null, "block", "blue", "block", null, null, null],
        [null, null, null, null, null, "block", null, null],
        [null, null, null, "red", "block", null, null, "red"],
        ["blue", "red", null, null, "block", null, null, null],
        [null, "block", "red", null, null, "block", "block", null],
        ["start-blue", null, null, "red", null, null, null, null]
    ],
    "2025-04-18": [
        ["start-blue", "blue", null, "red", "blue", null, null, null],
        [null, null, "block", null, null, "block", null, null],
        [null, "block", null, null, null, "red", null, null],
        [null, "block", "block", null, null, "block", null, null],
        [null, null, null, "block", null, null, "block", "red"],
        ["block", null, "block", null, null, null, null, null],
        ["blue", null, null, "block", null, null, null, null],
        [null, "block", null, null, "block", "block", "block", null],
        [null, "block", "blue", null, "red", "block", null, null],
        [null, null, "blue", "block", "blue", null, null, null],
        ["end-red", "block", null, "block", null, null, null, null]
    ],
    "2025-04-19": [
        [null, "block", null, null, null, null, null, "end-red"],
        [null, "block", null, "block", null, "block", null, "block"],
        [null, null, null, "block", null, null, "block", null],
        [null, "red", null, "block", null, "block", "blue", null],
        [null, "block", null, null, "red", "block", "block", null],
        [null, null, "red", "block", null, null, "block", null],
        [null, "blue", "block", null, "blue", null, null, null],
        [null, "block", null, "block", "blue", "red", null, null],
        ["block", null, null, "blue", null, "block", "blue", "blue"],
        [null, "red", null, null, null, "blue", null, null],
        ["start-blue", "blue", null, null, "red", null, null, null]
    ],

    // HOLY COW, this one is awesome.
    "2025-04-20": [
        ["start-blue", "blue", null, "red", null, null, null, null],
        [null, "block", null, null, null, null, null, null],
        [null, "blue", null, "block", "block", null, null, null],
        [null, "block", "blue", null, null, null, null, "block"],
        [null, null, null, "block", null, null, "block", "red"],
        [null, null, null, null, "blue", "block", null, null],
        ["block", "blue", null, "block", null, "red", "blue", null],
        [null, null, "red", "block", "block", null, "red", "blue"],
        ["block", null, null, null, null, "block", null, null],
        [null, null, null, null, null, "block", "block", null],
        ["end-red", null, null, "block", null, null, null, null]
    ],
    "2025-04-21": [
        ["end-red", "blue", null, "block", null, null, null, null],
        ["block", null, "red", null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ["block", null, null, null, "block", "block", "block", "block"],
        [null, null, "block", "block", null, null, null, null],
        ["red", "block", "block", null, null, null, null, null],
        [null, null, null, null, "blue", null, null, "block"],
        [null, null, null, "block", null, "block", null, "blue"],
        [null, null, null, null, "blue", null, "block", null],
        [null, "blue", null, "block", null, null, "red", "red"],
        ["block", null, "block", null, null, "block", "block", "start-blue"]
    ],
    "2025-04-22": [
        ["start-blue", "blue", null, null, null, null, "red", null],
        [null, "blue", "block", null, "block", null, null, null],
        [null, "block", "red", null, "block", null, null, null],
        ["red", null, "block", null, null, "block", null, null],
        ["block", null, null, null, "block", "red", "blue", null],
        [null, "red", null, null, null, "red", null, null],
        [null, "block", "blue", "red", null, "block", "blue", null],
        [null, null, "blue", "block", "block", null, null, "block"],
        [null, "block", "block", null, "block", "block", null, "blue"],
        [null, null, "block", null, null, "red", "blue", null],
        [null, null, null, null, null, null, null, "end-red"]
    ],
    "2025-04-25": [
        ["block", "block", "block", "blue", null, null, null, "end-blue"],
        ["block", null, null, null, null, "blue", null, "block"],
        [null, null, "block", "blue", "block", null, "red", null],
        [null, "blue", null, null, "block", "block", null, "blue"],
        ["blue", null, "block", null, null, null, "block", "block"],
        [null, "block", "block", "block", null, null, "block", "block"],
        [null, null, "block", null, "block", null, null, "block"],
        ["block", null, null, "block", "block", "block", null, "block"],
        ["block", null, null, null, "red", null, "block", "block"],
        ["block", null, null, "blue", null, "block", null, "block"],
        ["block", "block", "block", "block", null, null, "blue", "start-red"]
    ],
    "2025-04-26": [
        [null, null, null, "block", null, null, "red", "end-blue"],
        ["blue", null, null, null, null, "block", null, "block"],
        ["blue", "block", null, "block", null, null, "block", "block"],
        ["block", null, null, null, null, null, null, "block"],
        ["red", "block", null, null, null, "red", null, "block"],
        ["block", "red", null, "block", "blue", "block", null, "block"],
        ["block", "block", "red", "block", "block", null, "block", "block"],
        ["block", "block", null, "block", null, "block", "blue", null],
        ["block", "blue", null, null, null, null, null, null],
        ["block", "block", "red", "block", null, "block", null, "block"],
        ["start-red", null, null, null, null, "block", "block", "block"]
    ],
    "2025-04-27": [
        ["start-red", "block", "blue", "block", "block", "block", "block", "end-blue"],
        [null, null, null, "block", "red", null, null, null],
        ["blue", "block", "blue", "block", null, "block", null, null],
        [null, null, null, "block", null, null, "block", "red"],
        [null, null, "red", null, "red", "red", null, null],
        ["block", "block", null, null, null, null, null, "block"],
        ["blue", null, null, "block", "red", null, "red", "block"],
        ["red", "block", "block", "block", null, null, null, "blue"],
        ["block", "red", "block", "block", "blue", "red", "block", "block"],
        ["block", null, "red", null, null, null, null, "block"],
        ["block", "block", "block", "block", "blue", "block", "block", "block"]
    ],
    "2025-04-28": [
        ["block", null, null, "red", null, null, null, null],
        ["block", null, "red", "block", null, null, null, null],
        [null, null, "block", null, null, null, null, "blue"],
        [null, "block", null, null, null, null, "block", null],
        [null, "block", null, null, null, "block", "red", null],
        [null, null, null, null, null, null, "block", null],
        ["block", null, null, "block", "red", "block", "red", null],
        ["block", "blue", "block", null, "blue", "block", null, null],
        ["block", null, "block", null, null, null, "red", "block"],
        ["blue", null, null, null, "block", "block", "red", null],
        ["start-red", "block", "block", null, "blue", null, null, "end-blue"]
    ],
    "2025-04-29": [
        ["end-blue", "block", "block", "block", "block", "block", null, "start-red"],
        [null, "red", "block", null, null, "block", "blue", "block"],
        ["blue", null, "block", null, "block", null, null, null],
        [null, "block", null, null, null, null, "block", null],
        [null, "block", "block", null, "block", "block", "red", null],
        [null, "block", null, null, "blue", null, null, null],
        [null, null, null, "block", null, null, null, "block"],
        ["block", null, "blue", "block", null, "red", null, "block"],
        ["block", null, "block", null, "blue", null, null, "block"],
        ["block", "block", null, null, "blue", null, null, "block"],
        ["block", "blue", "block", "block", "block", "block", "block", "block"]
    ],
    "2025-04-30": [
        ["start-red", null, "red", null, null, "block", "block", "block"],
        ["blue", "blue", null, "block", null, null, "block", "block"],
        ["block", null, "blue", "block", "blue", "block", "red", "block"],
        ["block", null, "block", null, "red", "blue", "block", "block"],
        ["block", "block", null, null, null, null, null, "block"],
        ["block", null, null, "block", null, null, null, "red"],
        ["block", "red", null, null, "red", null, null, "block"],
        ["block", null, "block", "red", "red", "block", "block", "block"],
        ["block", "block", null, null, null, null, null, "block"],
        ["red", "blue", null, "block", "block", null, null, "block"],
        ["end-blue", "block", "block", "block", "block", "block", "block", "block"]
    ],
    "2025-05-01": [
        ["start-red", "red", null, "block", "block", "red", "block", "block"],
        [null, "blue", null, "block", "blue", null, null, "block"],
        ["red", "block", null, null, "block", "block", null, "block"],
        [null, "blue", "block", "block", "block", null, "blue", "block"],
        ["block", "red", "blue", null, null, "blue", "blue", "block"],
        ["block", null, null, "block", null, null, "red", "block"],
        ["block", null, "red", null, "block", null, "block", "block"],
        ["block", "red", null, null, null, "red", "block", "block"],
        ["block", null, "blue", null, null, null, null, "block"],
        ["block", null, "blue", "block", null, null, null, "red"],
        ["block", "block", "block", "block", "block", "block", "block", "end-blue"]
    ],
    "2025-05-02": [
        ["start-red", null, "block", "block", "block", "block", null, "end-blue"],
        ["block", null, null, null, null, "block", null, "block"],
        ["block", null, null, "block", null, null, "red", "block"],
        ["block", null, null, null, "block", "block", "block", "block"],
        [null, "red", "red", null, null, null, "red", "block"],
        [null, null, "block", "block", null, "block", null, "block"],
        [null, null, "block", null, null, null, null, "block"],
        [null, null, "blue", "block", "block", null, "block", "block"],
        [null, null, null, null, "block", null, null, "block"],
        [null, null, null, null, null, "block", null, "block"],
        ["block", "block", "block", "blue", "blue", null, null, "block"]
    ],
    "2025-05-03": [
        ["end-blue", null, "block", "block", "block", "block", "block", "blue"],
        ["block", null, null, null, null, null, null, "block"],
        [null, null, null, null, null, null, "block", "block"],
        [null, null, null, null, "blue", "block", null, "block"],
        [null, null, null, "block", null, null, null, "block"],
        [null, "block", null, "block", null, "blue", null, null],
        [null, "blue", "block", null, null, null, null, "red"],
        [null, null, null, "blue", null, null, null, "red"],
        ["block", null, null, "red", "block", null, null, "red"],
        ["block", "block", null, "block", null, null, null, "block"],
        ["start-red", "blue", null, "blue", "block", "block", "block", "block"]
    ],
    "2025-05-04": [
        ["block", "block", "block", null, null, null, null, "end-blue"],
        ["block", "blue", null, null, "blue", null, null, "block"],
        ["block", null, "blue", null, null, null, null, "block"],
        ["block", "block", null, null, "block", null, "block", "red"],
        [null, null, "red", "block", "block", null, "blue", "red"],
        [null, null, "red", null, null, "block", "block", null],
        ["blue", "block", null, null, null, null, "block", "blue"],
        [null, null, "block", null, "blue", "block", null, null],
        [null, null, null, null, "red", null, null, "block"],
        ["block", "block", "block", "block", null, null, "block", "block"],
        ["block", "blue", "block", "block", "block", null, null, "start-red"]
    ],
    "2025-05-05": [
        ["block", "block", "block", "block", "block", "block", "block", "block"],
        ["block", null, "blue", null, "block", null, null, "block"],
        ["block", null, null, "block", "blue", null, null, "block"],
        ["block", "block", "blue", null, null, null, "blue", "block"],
        ["block", null, null, null, null, "red", null, "block"],
        ["block", null, "block", null, null, null, null, "block"],
        ["block", "red", "block", "red", null, "block", "red", null],
        ["blue", null, null, "block", null, null, "blue", "blue"],
        ["block", "block", null, "block", "red", "block", null, "red"],
        ["red", "block", "blue", null, "block", null, null, "block"],
        ["start-red", null, null, "blue", "block", "block", null, "end-blue"]
    ],
    "2025-05-06": [
        ["start-red", "block", "block", "block", "block", "block", "block", "end-blue"],
        ["blue", "red", null, null, null, "red", "blue", null],
        [null, "red", "block", null, null, "block", "block", "red"],
        ["blue", null, "red", null, "red", "blue", "blue", null],
        ["blue", null, null, "block", null, null, "block", null],
        [null, null, "block", null, null, "block", null, null],
        ["blue", "block", null, "blue", "block", null, null, "block"],
        [null, null, "block", null, null, null, "red", "block"],
        [null, null, null, "block", null, "blue", null, "block"],
        [null, null, null, null, null, null, null, "block"],
        ["block", "block", "block", "blue", "block", "block", "block", "block"]
    ],
    "2025-05-07": [
        ["start-red", "blue", null, null, null, null, null, null],
        ["block", null, "block", null, "blue", null, null, null],
        ["block", "blue", "blue", null, "block", null, null, null],
        ["block", "block", null, "blue", "block", null, "block", null],
        ["block", null, null, "blue", "block", null, null, "red"],
        ["block", null, "red", null, "block", "block", "block", "block"],
        ["block", "block", null, null, "red", "block", "red", "block"],
        ["block", null, "block", "block", null, null, null, "block"],
        ["block", null, null, "blue", null, "block", null, "block"],
        ["block", null, "blue", null, null, null, "block", "block"],
        ["end-blue", "red", "block", "block", "blue", "block", "block", "block"]
    ],
    "2025-05-08": [
        ["start-red", "blue", null, "block", "block", "red", "block", "block"],
        ["block", "block", null, null, "blue", null, null, "blue"],
        ["block", "block", null, null, "block", null, null, "block"],
        ["block", null, null, "block", "blue", null, null, "block"],
        [null, null, "block", null, null, null, null, "block"],
        [null, "block", null, null, "red", null, null, "block"],
        [null, "red", null, "red", "block", null, null, "block"],
        ["block", null, "red", null, "block", null, null, "block"],
        ["block", "block", "blue", "block", null, "block", "blue", "block"],
        ["block", null, null, "red", null, null, "red", "block"],
        ["end-blue", null, "blue", "block", "block", null, "blue", "block"]
    ],
    "2025-05-09": [
        ["block", "block", "block", "blue", "block", "block", "blue", "start-red"],
        ["red", null, null, "red", null, null, null, "block"],
        ["block", null, null, null, "block", "block", "block", "block"],
        ["block", null, null, null, null, "block", "block", "block"],
        ["block", null, null, "blue", null, "block", null, "block"],
        ["block", "blue", "block", "block", "red", null, "block", "block"],
        [null, null, null, null, null, null, "blue", "block"],
        [null, "blue", "block", null, "blue", null, "blue", "block"],
        ["blue", "block", null, "block", null, "block", null, "block"],
        [null, "red", "blue", null, "blue", "blue", null, "block"],
        ["end-blue", "red", "red", null, "red", "block", "block", "block"]
    ],
    "2025-05-10":[
        [
            "block",
            "block",
            "block",
            "block",
            "block",
            "block",
            "block",
            "block"
        ],
        [
            "block",
            null,
            null,
            null,
            null,
            null,
            null,
            "red"
        ],
        [
            "block",
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        [
            "red",
            null,
            null,
            null,
            null,
            "block",
            null,
            null
        ],
        [
            "block",
            null,
            null,
            null,
            null,
            null,
            "block",
            "red"
        ],
        [
            "block",
            "block",
            null,
            null,
            "blue",
            "block",
            "block",
            null
        ],
        [
            "red",
            "block",
            "blue",
            "block",
            null,
            null,
            null,
            null
        ],
        [
            "block",
            null,
            "block",
            null,
            null,
            "blue",
            null,
            "block"
        ],
        [
            "block",
            "block",
            "blue",
            null,
            "block",
            "block",
            "red",
            "block"
        ],
        [
            "red",
            null,
            null,
            "block",
            "block",
            "red",
            "red",
            "blue"
        ],
        [
            "end-blue",
            "block",
            null,
            null,
            null,
            null,
            null,
            "start-red"
        ]
    ],
    "2025-05-11":[
        [
            "start-red",
            null,
            null,
            null,
            "block",
            "block",
            "block",
            "block"
        ],
        [
            "block",
            null,
            "block",
            null,
            "block",
            "red",
            "blue",
            "block"
        ],
        [
            "block",
            null,
            null,
            "blue",
            "block",
            "red",
            "block",
            "block"
        ],
        [
            "block",
            null,
            "block",
            "block",
            null,
            null,
            null,
            "block"
        ],
        [
            "block",
            "red",
            "block",
            null,
            "blue",
            null,
            null,
            "block"
        ],
        [
            "block",
            null,
            null,
            null,
            null,
            null,
            null,
            "block"
        ],
        [
            "block",
            "red",
            null,
            "blue",
            "block",
            null,
            null,
            "block"
        ],
        [
            "block",
            null,
            "block",
            null,
            null,
            "red",
            "block",
            "block"
        ],
        [
            "block",
            null,
            null,
            "blue",
            "block",
            "block",
            "block",
            "block"
        ],
        [
            null,
            "red",
            "block",
            "blue",
            null,
            null,
            null,
            "blue"
        ],
        [
            "end-blue",
            "block",
            "block",
            "block",
            "block",
            "block",
            "blue",
            "block"
        ]
    ],
    "2025-05-12":[
        [
            "block",
            "block",
            "block",
            "block",
            "block",
            "block",
            "block",
            "block"
        ],
        [
            "block",
            null,
            null,
            null,
            null,
            null,
            null,
            "block"
        ],
        [
            "block",
            null,
            null,
            "block",
            null,
            null,
            null,
            "block"
        ],
        [
            "block",
            "block",
            null,
            null,
            null,
            null,
            null,
            null
        ],
        [
            "block",
            null,
            null,
            "red",
            null,
            "red",
            null,
            "red"
        ],
        [
            "red",
            "red",
            "block",
            "blue",
            null,
            null,
            "block",
            null
        ],
        [
            "block",
            null,
            "block",
            null,
            null,
            "block",
            "blue",
            null
        ],
        [
            null,
            null,
            "block",
            "block",
            "blue",
            "block",
            null,
            "red"
        ],
        [
            null,
            "block",
            null,
            null,
            "block",
            null,
            "block",
            null
        ],
        [
            null,
            "block",
            null,
            null,
            null,
            "red",
            null,
            null
        ],
        [
            "end-blue",
            "blue",
            "block",
            "blue",
            null,
            null,
            null,
            "start-red"
        ]
    ],
    "2025-05-13":[
        [
            "block",
            "block",
            "block",
            "block",
            null,
            null,
            null,
            "start-red"
        ],
        [
            "block",
            "block",
            "block",
            null,
            null,
            "block",
            "red",
            "red"
        ],
        [
            null,
            null,
            null,
            "red",
            null,
            null,
            null,
            "block"
        ],
        [
            "red",
            "blue",
            "block",
            "block",
            "block",
            "block",
            null,
            "block"
        ],
        [
            "blue",
            "blue",
            "red",
            null,
            null,
            null,
            null,
            "block"
        ],
        [
            "red",
            null,
            null,
            "block",
            null,
            null,
            null,
            "block"
        ],
        [
            "block",
            "blue",
            null,
            "blue",
            null,
            "block",
            null,
            "red"
        ],
        [
            "block",
            null,
            null,
            "block",
            null,
            "red",
            "red",
            "blue"
        ],
        [
            "block",
            null,
            "blue",
            null,
            "red",
            null,
            null,
            "red"
        ],
        [
            "block",
            null,
            "block",
            "block",
            null,
            null,
            null,
            null
        ],
        [
            "block",
            "block",
            "red",
            "block",
            "block",
            "block",
            "block",
            "end-blue"
        ]
    ],
    // "2025-05-14":
    // "2025-05-15":
    // "2025-05-16":
    // "2025-05-17":
    // "2025-05-18":
    // "2025-05-19":









}