class RubiksCube {
    constructor() {
        this.faces = {
            U: Array(9).fill('W'),
            D: Array(9).fill('Y'),
            F: Array(9).fill('G'),
            B: Array(9).fill('B'),
            L: Array(9).fill('O'),
            R: Array(9).fill('R'),
        }
    }

    getCubeSvg() {
        return this.faces.U.concat(
            this.faces.L,
            this.faces.F,
            this.faces.R,
            this.faces.B,
            this.faces.D
        ).join('');
    }

    printCube() {
        console.log(this.getCubeSvg());
    }

    rotate(move) {
        const f = this.faces;
        const clone = arr => JSON.parse(JSON.stringify(arr));

        switch (move) {
            // === U (Up) Face ===
            case "U":
                f.U = rotateFaceClockwise(f.U);
                {
                    const temp = clone(f.F.slice(0, 3));
                    f.F[0] = f.R[0]; f.F[1] = f.R[1]; f.F[2] = f.R[2];
                    f.R[0] = f.B[0]; f.R[1] = f.B[1]; f.R[2] = f.B[2];
                    f.B[0] = f.L[0]; f.B[1] = f.L[1]; f.B[2] = f.L[2];
                    f.L[0] = temp[0]; f.L[1] = temp[1]; f.L[2] = temp[2];
                }
                break;
            case "U'":
                f.U = rotateFaceCounterClockwise(f.U);
                {
                    const temp = clone(f.F.slice(0, 3));
                    f.F[0] = f.L[0]; f.F[1] = f.L[1]; f.F[2] = f.L[2];
                    f.L[0] = f.B[0]; f.L[1] = f.B[1]; f.L[2] = f.B[2];
                    f.B[0] = f.R[0]; f.B[1] = f.R[1]; f.B[2] = f.R[2];
                    f.R[0] = temp[0]; f.R[1] = temp[1]; f.R[2] = temp[2];
                }
                break;

            // === D (Down) Face ===
            case "D":
                f.D = rotateFaceClockwise(f.D);
                {
                    const temp = clone(f.F.slice(6, 9));
                    f.F[6] = f.L[6]; f.F[7] = f.L[7]; f.F[8] = f.L[8];
                    f.L[6] = f.B[6]; f.L[7] = f.B[7]; f.L[8] = f.B[8];
                    f.B[6] = f.R[6]; f.B[7] = f.R[7]; f.B[8] = f.R[8];
                    f.R[6] = temp[0]; f.R[7] = temp[1]; f.R[8] = temp[2];
                }
                break;
            case "D'":
                f.D = rotateFaceCounterClockwise(f.D);
                {
                    const temp = clone(f.F.slice(6, 9));
                    f.F[6] = f.R[6]; f.F[7] = f.R[7]; f.F[8] = f.R[8];
                    f.R[6] = f.B[6]; f.R[7] = f.B[7]; f.R[8] = f.B[8];
                    f.B[6] = f.L[6]; f.B[7] = f.L[7]; f.B[8] = f.L[8];
                    f.L[6] = temp[0]; f.L[7] = temp[1]; f.L[8] = temp[2];
                }
                break;

            // === F (Front) Face ===
            case "F":
                f.F = rotateFaceClockwise(f.F);
                {
                    const temp = [f.U[6], f.U[7], f.U[8]];
                    f.U[6] = f.L[8]; f.U[7] = f.L[5]; f.U[8] = f.L[2];
                    f.L[2] = f.D[0]; f.L[5] = f.D[1]; f.L[8] = f.D[2];
                    f.D[0] = f.R[6]; f.D[1] = f.R[3]; f.D[2] = f.R[0];
                    f.R[0] = temp[2]; f.R[3] = temp[1]; f.R[6] = temp[0];
                }
                break;
            case "F'":
                f.F = rotateFaceCounterClockwise(f.F);
                {
                    const temp = [f.U[6], f.U[7], f.U[8]];
                    f.U[6] = f.R[6]; f.U[7] = f.R[3]; f.U[8] = f.R[0];
                    f.R[0] = f.D[2]; f.R[3] = f.D[1]; f.R[6] = f.D[0];
                    f.D[0] = f.L[2]; f.D[1] = f.L[5]; f.D[2] = f.L[8];
                    f.L[2] = temp[0]; f.L[5] = temp[1]; f.L[8] = temp[2];
                }
                break;

            // === B (Back) Face ===
            case "B":
                f.B = rotateFaceClockwise(f.B);
                {
                    const temp = [f.U[0], f.U[1], f.U[2]];
                    f.U[0] = f.R[2]; f.U[1] = f.R[5]; f.U[2] = f.R[8];
                    f.R[2] = f.D[8]; f.R[5] = f.D[7]; f.R[8] = f.D[6];
                    f.D[6] = f.L[0]; f.D[7] = f.L[3]; f.D[8] = f.L[6];
                    f.L[0] = temp[2]; f.L[3] = temp[1]; f.L[6] = temp[0];
                }
                break;
            case "B'":
                f.B = rotateFaceCounterClockwise(f.B);
                {
                    const temp = [f.U[0], f.U[1], f.U[2]];
                    f.U[0] = f.L[6]; f.U[1] = f.L[3]; f.U[2] = f.L[0];
                    f.L[0] = f.D[6]; f.L[3] = f.D[7]; f.L[6] = f.D[8];
                    f.D[6] = f.R[8]; f.D[7] = f.R[5]; f.D[8] = f.R[2];
                    f.R[2] = temp[0]; f.R[5] = temp[1]; f.R[8] = temp[2];
                }
                break;

            // === R (Right) Face ===
            case "R":
                f.R = rotateFaceClockwise(f.R);
                {
                    const temp = [f.U[2], f.U[5], f.U[8]];
                    f.U[2] = f.F[2]; f.U[5] = f.F[5]; f.U[8] = f.F[8];
                    f.F[2] = f.D[2]; f.F[5] = f.D[5]; f.F[8] = f.D[8];
                    f.D[2] = f.B[6]; f.D[5] = f.B[3]; f.D[8] = f.B[0];
                    f.B[0] = temp[2]; f.B[3] = temp[1]; f.B[6] = temp[0];
                }
                break;
            case "R'":
                f.R = rotateFaceCounterClockwise(f.R);
                {
                    const temp = [f.U[2], f.U[5], f.U[8]];
                    f.U[2] = f.B[0]; f.U[5] = f.B[3]; f.U[8] = f.B[6];
                    f.B[0] = f.D[8]; f.B[3] = f.D[5]; f.B[6] = f.D[2];
                    f.D[2] = f.F[2]; f.D[5] = f.F[5]; f.D[8] = f.F[8];
                    f.F[2] = temp[0]; f.F[5] = temp[1]; f.F[8] = temp[2];
                }
                break;

            // === L (Left) Face ===
            case "L":
                f.L = rotateFaceClockwise(f.L);
                {
                    const temp = [f.U[0], f.U[3], f.U[6]];
                    f.U[0] = f.B[8]; f.U[3] = f.B[5]; f.U[6] = f.B[2];
                    f.B[2] = f.D[6]; f.B[5] = f.D[3]; f.B[8] = f.D[0];
                    f.D[0] = f.F[0]; f.D[3] = f.F[3]; f.D[6] = f.F[6];
                    f.F[0] = temp[0]; f.F[3] = temp[1]; f.F[6] = temp[2];
                }
                break;
            case "L'":
                f.L = rotateFaceCounterClockwise(f.L);
                {
                    const temp = [f.U[0], f.U[3], f.U[6]];
                    f.U[0] = f.F[0]; f.U[3] = f.F[3]; f.U[6] = f.F[6];
                    f.F[0] = f.D[0]; f.F[3] = f.D[3]; f.F[6] = f.D[6];
                    f.D[0] = f.B[8]; f.D[3] = f.B[5]; f.D[6] = f.B[2];
                    f.B[2] = temp[2]; f.B[5] = temp[1]; f.B[8] = temp[0];
                }
                break;

            default:
                console.warn("Invalid move: ", move);
        }
    }

    scrambleCube() {
        const possibleMoves = ["U", "U'", "D", "D'", "F", "F'", "B", "B'", "L", "L'", "R", "R'"];
        const scrambleLength = 25;
        const scramble = [];

        let lastMove = '';

        for (let i = 0; i < scrambleLength; i++) {
            let move;
            do {
                move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            } while (move[0] === lastMove[0]); // avoid repeating same face

            scramble.push(move);
            lastMove = move;
        }

        // console.log("Scrambling cube with moves:");
        scramble.forEach(move => {
            // console.log("Move:", move);
            this.rotate(move);
        });

        console.log("Scramble complete.");
        this.printCube();
    }

    solveWhiteCross() {
        console.log("Solving White Cross:");

        // Example moves — in reality, you'd search for white edge positions and apply correct moves
        const moves = ["F", "U", "R", "U'", "R'"];

        moves.forEach(move => {
            console.log("Move:", move);
            this.rotate(move);
            this.printCube();
        });

        console.log("White Cross solved (example moves).");
    }

    solveWhiteCorners() {
        console.log("Solving White Corners:");

        // Example moves for placing white corners, you'd detect and solve accordingly
        const moves = ["U", "R", "U'", "R'"];

        moves.forEach(move => {
            console.log("Move:", move);
            this.rotate(move);
            this.printCube();
        });

        console.log("White corners solved (example moves).");
    }

    solveMiddleLayer() {
        console.log("Solving Middle Layer:");

        // Example moves to insert edges in middle layer
        const moves = ["U", "R", "U'", "R'", "U'", "F'", "U", "F"];

        moves.forEach(move => {
            console.log("Move:", move);
            this.rotate(move);
            this.printCube();
        });

        console.log("Middle layer solved (example moves).");
    }

    solveLastLayer() {
        console.log("Solving Last Layer:");

        // Example moves to orient last layer (OLL)
        const ollMoves = ["F", "R", "U", "R'", "U'", "F'"];
        ollMoves.forEach(move => {
            console.log("Move (OLL):", move);
            this.rotate(move);
            this.printCube();
        });

        // Example moves to permute last layer (PLL)
        const pllMoves = ["R'", "F", "R'", "B2", "R", "F'", "R'", "B2", "R2"];
        pllMoves.forEach(move => {
            console.log("Move (PLL):", move);
            this.rotate(move);
            this.printCube();
        });

        console.log("Last layer solved (example moves).");
    }

    solveCube() {
        this.solveWhiteCross();
        this.solveWhiteCorners();
        this.solveMiddleLayer();
        this.solveLastLayer();

        console.log("Cube solved (demo moves).");
    }

}

function rotateFaceClockwise(face) {
    return [
        face[6], face[3], face[0],
        face[7], face[4], face[1],
        face[8], face[5], face[2]
    ];
}

function rotateFaceCounterClockwise(face) {
    return [
        face[2], face[5], face[8],
        face[1], face[4], face[7],
        face[0], face[3], face[6]
    ];
}

const cube = new RubiksCube();

console.log("Initial State : ");
cube.printCube(); // initial state

cube.scrambleCube()

cube.printCube();
cube.solveCube();
