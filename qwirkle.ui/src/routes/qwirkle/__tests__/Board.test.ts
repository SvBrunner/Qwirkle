import { Board } from "../Board";
import { Block } from "../Block";
import { Direction, Pattern, Color } from "../Util";

describe("Board", () => {
    let board: Board;

    beforeEach(() => {
        board = new Board();
    });

    it("should add a block at a specific position", () => {
        const block = new Block(Pattern.Lion, Color.Red);
        const x = 0;
        const y = 0;

        board.addBlockAtPosition(block, x, y);

        expect(board.getBlockAtPosition(x, y)).toBe(block);
    });

  
});