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
    "2025-08-24": [
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
    "2025-08-25": [
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
    "2025-08-26": [
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
    "2025-08-27": [
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
    "2025-08-28": [
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
    "2025-08-29": [
        ["start-red", "block", "block", "block", "block", "block", "block", "end-blue"],
        [null, null, null, null, null, "red", "block", "red"],
        [null, null, null, "block", "block", "block", "blue", null],
        ["block", "block", null, null, null, "red", "blue", null],
        ["block", "block", null, null, null, "block", "red", "block"],
        ["red", null, "blue", "block", "block", null, "block", "block"],
        ["blue", null, null, "block", "red", null, "blue", null],
        ["red", "block", null, null, null, "block", null, null],
        ["block", null, "blue", "blue", null, "block", "block", null],
        ["block", null, "red", null, "block", null, null, null],
        ["block", "block", null, null, null, null, null, null
        ]
    ],

    "2025-08-30": [
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
    "2025-08-31": [
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
    "2025-09-01": [
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
    "2025-09-02": [
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
    "2025-09-03": [

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

    "2025-09-04": [
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

    "2025-09-05": [
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

    "2025-09-06": [
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
    "2025-09-07": [
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

    "2025-09-08": [
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
    "2025-09-09": [
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
    "2025-09-10": [
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
    "2025-09-11": [
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

    "2025-09-12": [
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
    "2025-09-13": [
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
    "2025-09-14": [
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
    "2025-09-15": [
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
    "2025-09-16": [
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
    "2025-09-17": [
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
    "2025-09-18": [
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
    "2025-09-19": [
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
    "2025-09-20": [
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
    "2025-09-21": [
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
    "2025-09-22": [
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
    "2025-09-25": [
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
    "2025-09-26": [
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
    "2025-09-27": [
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
    "2025-09-28": [
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
    "2025-09-29": [
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
    "2025-09-30": [
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
    "2025-10-01": [
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
    "2025-10-02": [
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
    "2025-10-03": [
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
    "2025-10-04": [
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
    "2025-10-05": [
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
    "2025-10-06": [
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
    "2025-10-07": [
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
    "2025-10-08": [
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
    "2025-10-09": [
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
    "2025-10-10": [
        ["block", "block", "block", "block", "block", "block", "block", "block"],
        ["block", null, null, null, null, null, null, "red"],
        ["block", null, null, null, null, null, null, null],
        ["red", null, null, null, null, "block", null, null],
        ["block", null, null, null, null, null, "block", "red"],
        ["block", "block", null, null, "blue", "block", "block", null],
        ["red", "block", "blue", "block", null, null, null, null],
        ["block", null, "block", null, null, "blue", null, "block"],
        ["block", "block", "blue", null, "block", "block", "red", "block"],
        ["red", null, null, "block", "block", "red", "red", "blue"],
        ["end-blue", "block", null, null, null, null, null, "start-red"
        ]
    ],
    "2025-10-11": [
        ["start-red", null, null, null, "block", "block", "block", "block"],
        ["block", null, "block", null, "block", "red", "blue", "block"],
        ["block", null, null, "blue", "block", "red", "block", "block"],
        ["block", null, "block", "block", null, null, null, "block"],
        ["block", "red", "block", null, "blue", null, null, "block"],
        ["block", null, null, null, null, null, null, "block"],
        ["block", "red", null, "blue", "block", null, null, "block"],
        ["block", null, "block", null, null, "red", "block", "block"],
        ["block", null, null, "blue", "block", "block", "block", "block"],
        [null, "red", "block", "blue", null, null, null, "blue"],
        ["end-blue", "block", "block", "block", "block", "block", "blue", "block"
        ]
    ],
    "2025-10-12": [
        ["block", "block", "block", "block", "block", "block", "block", "block"],
        ["block", null, null, null, null, null, null, "block"],
        ["block", null, null, "block", null, null, null, "block"],
        ["block", "block", null, null, null, null, null, null],
        ["block", null, null, "red", null, "red", null, "red"],
        ["red", "red", "block", "blue", null, null, "block", null],
        ["block", null, "block", null, null, "block", "blue", null],
        [null, null, "block", "block", "blue", "block", null, "red"],
        [null, "block", null, null, "block", null, "block", null],
        [null, "block", null, null, null, "red", null, null],
        ["end-blue", "blue", "block", "blue", null, null, null, "start-red"
        ]
    ],
    "2025-10-13": [
        ["block", "block", "block", "block", null, null, null, "start-red"],
        ["block", "block", "block", null, null, "block", "red", "red"],
        [null, null, null, "red", null, null, null, "block"],
        ["red", "blue", "block", "block", "block", "block", null, "block"],
        ["blue", "blue", "red", null, null, null, null, "block"],
        ["red", null, null, "block", null, null, null, "block"],
        ["block", "blue", null, "blue", null, "block", null, "red"],
        ["block", null, null, "block", null, "red", "red", "blue"],
        ["block", null, "blue", null, "red", null, null, "red"],
        ["block", null, "block", "block", null, null, null, null],
        ["block", "block", "red", "block", "block", "block", "block", "end-blue"
        ]
    ],
    "2025-10-14": [
        ["block", "block", "block", "block", "block", "block", "block", "block"],
        [null, null, null, null, null, null, null, "block"],
        [null, null, null, null, "block", null, null, "block"],
        [null, null, null, "blue", null, null, null, "block"],
        [null, "block", null, null, "block", null, "blue", "block"],
        [null, null, "blue", "block", null, null, null, null],
        [null, null, null, "block", null, null, "block", null],
        ["block", "blue", "block", "red", "block", null, "red", null],
        [null, null, null, "red", "block", "blue", null, "red"],
        ["red", "block", "block", null, "block", "block", "block", "block"],
        ["end-blue", "block", "block", null, null, "blue", null, "start-red"
        ]
    ],
    "2025-10-15": [
        ["block", "block", "block", "block", "block", null, null, null],
        ["block", null, null, "block", null, null, "block", null],
        ["block", "blue", null, "block", null, "blue", null, null],
        ["block", null, null, null, null, "block", "block", null],
        ["block", "blue", "block", "red", "blue", "block", "block", "blue"],
        ["block", "block", null, "block", null, null, "block", null],
        ["block", "block", "block", "blue", null, "red", null, null],
        ["block", null, null, null, "blue", "blue", "red", null],
        ["block", null, "block", null, "block", "red", "red", "red"],
        ["blue", "red", "blue", null, "red", "blue", null, null],
        ["start-red", "block", "red", "blue", "block", "blue", "block", "end-blue"
        ]
    ],
    "2025-10-16": [
        ["start-red", null, null, null, null, null, "block", "block"],
        ["block", null, null, "block", "block", null, "blue", "block"],
        ["block", null, null, null, "block", "block", null, "red"],
        ["block", "block", "blue", "block", null, null, null, null],
        ["block", null, "block", null, null, null, null, null],
        ["block", null, null, "blue", null, "block", "block", "block"],
        ["block", null, null, null, "block", null, null, null],
        ["block", "block", null, null, "block", null, "blue", null],
        ["block", "block", null, null, null, "blue", "block", "red"],
        ["block", null, "red", "block", "blue", null, null, null],
        ["block", null, "blue", "block", "block", "block", "block", "end-blue"
        ]
    ],
    "2025-10-17": [
        ["block", null, null, "red", null, null, "blue", "start-red"],
        ["block", null, "block", "block", "blue", "block", "block", "block"],
        ["block", null, null, "red", null, null, null, "block"],
        ["block", null, null, "block", null, "block", "red", "block"],
        ["block", null, "block", null, null, null, null, "block"],
        ["block", null, null, "blue", "block", "blue", null, "block"],
        ["block", null, null, "block", null, null, "block", "red"],
        [null, null, "red", null, null, "block", "block", "block"],
        [null, "block", null, "block", "block", null, null, "block"],
        [null, null, null, "block", null, null, "red", null],
        [null, null, null, null, null, "block", "block", "end-blue"
        ]
    ],
    "2025-10-18": [
        ["block", "block", "block", "block", "block", "block", "block", "block"],
        ["block", "block", null, null, null, null, null, "block"],
        ["block", null, "block", null, "red", null, null, null],
        ["block", null, "block", null, null, "block", null, null],
        [null, null, null, null, null, null, "block", null],
        [null, null, "block", "blue", "block", "block", "block", null],
        [null, "block", null, "block", null, null, null, null],
        ["red", null, "block", null, null, "block", "red", "blue"],
        ["red", "blue", null, "block", "block", null, null, null],
        [null, null, "block", null, "block", "block", "block", "block"],
        ["end-blue", null, null, null, null, "blue", null, "start-red"
        ]
    ],
    "2025-10-19": [
        ["block", null, null, null, "block", "red", "block", "end-blue"],
        ["block", null, "block", null, null, "block", null, null],
        ["red", "blue", "block", null, null, null, "block", null],
        [null, "block", null, null, "red", null, "red", null],
        [null, null, "block", "red", "block", "block", "blue", null],
        [null, "block", "block", null, "blue", null, null, null],
        [null, null, null, "block", null, "block", null, "block"],
        ["block", "red", null, null, "blue", null, null, null],
        ["block", null, "red", "block", null, "block", "block", "blue"],
        ["blue", null, null, "blue", null, null, "block", null],
        ["block", null, null, null, null, "blue", "block", "start-red"
        ]
    ],
    "2025-10-20": [
        ["start-red", null, null, null, "block", "block", "red", "block"],
        ["block", null, "block", null, "block", "block", "blue", "block"],
        ["block", null, "block", "red", null, null, null, "blue"],
        ["block", "blue", "block", "block", "block", "block", null, null],
        [null, null, null, "block", null, null, "block", null],
        [null, "block", "block", "red", null, "blue", null, null],
        ["red", null, null, "block", null, null, "blue", null],
        [null, null, null, "block", null, "block", null, null],
        [null, null, "red", null, null, "blue", null, "block"],
        [null, null, "red", null, null, "block", null, null],
        [null, null, null, null, "block", "red", "block", "end-blue"
        ]
    ],
    "2025-10-21": [
        ["start-red", "block", "block", "block", "block", "block", "block", "end-blue"],
        [null, null, null, null, null, "red", "block", "red"],
        [null, null, null, "block", "block", "block", "blue", null],
        ["block", "block", null, null, null, "red", "blue", null],
        ["block", "block", null, null, null, "block", "red", "block"],
        ["red", null, "blue", "block", "block", null, "block", "block"],
        ["blue", null, null, "block", "red", null, "blue", null],
        ["red", "block", null, null, null, "block", null, null],
        ["block", null, "blue", "blue", null, "block", "block", null],
        ["block", null, "red", null, "block", null, null, null],
        ["block", "block", null, null, null, null, null, null
        ]
    ],
    "2025-10-22": [
        ["end-blue", null, "red", null, "block", "block", "block", "block"],
        ["block", "block", null, null, null, "block", null, "block"],
        [null, "red", null, null, null, null, null, "red"],
        ["blue", "block", null, null, null, null, null, "block"],
        [null, "block", "block", null, null, "blue", null, "red"],
        [null, "blue", "block", null, null, null, null, "block"],
        [null, null, "blue", "block", "block", null, "block", "block"],
        [null, null, null, null, "block", "block", null, "block"],
        [null, null, "block", null, null, null, null, null],
        ["blue", null, null, "blue", "block", null, "block", "red"],
        ["start-red", "blue", "block", "blue", "block", null, null, null
        ]
    ],
    "2025-10-23": [
        ["start-red", "block", "red", null, "red", null, "blue", "block"],
        [null, null, "blue", "blue", null, null, "block", "block"],
        ["block", "block", "block", null, null, "block", null, "block"],
        ["block", null, "blue", "block", null, "blue", null, "block"],
        ["block", "red", null, "block", "block", null, "block", "block"],
        ["block", null, "block", null, null, null, null, "red"],
        ["block", null, "red", "block", "block", null, null, "block"],
        ["block", null, null, null, null, "block", null, "block"],
        [null, null, null, "blue", null, "red", null, "block"],
        [null, "block", null, null, "red", null, null, "blue"],
        ["end-blue", "block", "block", "block", "block", "block", "block", "block"
        ]
    ],
    "2025-10-24": [
        ["end-blue", null, "blue", null, "block", null, "red", "start-red"],
        [null, null, "block", null, null, "blue", "blue", null],
        ["red", "blue", null, "blue", null, "blue", "block", "block"],
        [null, null, "block", "block", null, null, "block", "block"],
        ["block", "block", null, "red", "block", null, "red", "block"],
        ["block", "block", null, null, null, "block", null, "block"],
        ["block", null, null, null, null, null, null, "block"],
        ["block", null, "block", null, null, null, null, "block"],
        ["block", "blue", "blue", "block", "block", null, null, "red"],
        ["block", null, null, null, null, null, null, "block"],
        ["block", "block", "blue", "red", "block", "block", "block", "block"
        ]
    ],
    "2025-10-25": [
        ["end-blue", "block", "block", null, null, null, null, "start-red"],
        [null, null, "blue", null, "red", null, null, "block"],
        [null, "block", null, "red", null, "block", "block", "block"],
        ["red", "block", "block", "red", null, "blue", null, "blue"],
        [null, null, "red", null, null, null, null, "block"],
        ["blue", "block", "blue", "red", null, "block", null, "block"],
        [null, "block", "block", "red", "block", null, null, "block"],
        ["red", null, "block", "blue", null, "red", null, "block"],
        ["block", null, null, "red", null, null, null, "block"],
        ["block", null, null, null, null, null, "block", "block"],
        ["block", "block", "block", "block", "block", "block", "block", "block"
        ]
    ],
    "2025-10-26": [
        ["end-blue","block","block","block","block","block",null,"start-red"],
        ["red","block","blue","blue",null,"red",null,"red"],
        [null,null,"red","block","blue",null,null,"block"],
        ["blue","red",null,null,"red","blue","block","block"],
        ["blue","block","blue","block","block","block",null,"block"],
        ["red","block","red",null,null,null,null,"block"],
        ["block",null,"blue","block",null,null,"block","blue"],
        ["block",null,null,"block",null,null,"red","block"],
        [null,null,null,"red",null,null,null,"block"],
        [null,"block","block",null,null,null,null,"block"],
        [null,null,null,null,"block","block","block","block"
        ]
    ],
    "2025-10-27": [
        ["block","block","block","block","block","block","block","end-blue"],
        ["block","blue",null,null,null,null,"block",null],
        ["block","red",null,null,"blue",null,null,null],
        ["block","block",null,"blue",null,null,"red","block"],
        ["block",null,null,null,"blue","block",null,null],
        ["block","block","block","block","block",null,"block",null],
        ["block",null,null,null,null,"block","blue",null],
        [null,null,"red","block","block","red",null,"block"],
        [null,"blue",null,"block","blue",null,"block","block"],
        ["red",null,"block",null,"red",null,null,"block"],
        ["blue","blue",null,null,"block","block",null,"start-red"
        ]
    ],
    // "2025-10-28"
    // "2025-10-29"
    // "2025-10-30"
    // "2025-10-31"
    // "2025-08-01"
    // "2025-08-02"
    // "2025-08-03"
    // "2025-08-04"
    // "2025-08-05"
    // "2025-08-06"
    // "2025-08-07"
    // "2025-08-08"
    // "2025-08-09"
    // "2025-08-10"
    // "2025-08-11"
    // "2025-08-12"
    // "2025-08-13"
    // "2025-08-14"
    // "2025-08-15"
    // "2025-08-16"
    // "2025-08-17"
    // "2025-08-18"
    // "2025-08-19"
    // "2025-08-20"
    // "2025-08-21"
    // "2025-08-22"
    // "2025-08-23"
    // "2025-08-24"
    // "2025-08-25"
    // "2025-08-26"
    // "2025-08-27"
    // "2025-08-28"
    // "2025-08-29"
    // "2025-08-30"
    // "2025-08-31"
    // "2025-09-01"
    // "2025-09-02"
    // "2025-09-03"
    // "2025-09-04"
    // "2025-09-05"
    // "2025-09-06"
    // "2025-09-07"
    // "2025-09-08"
    // "2025-09-09"










}