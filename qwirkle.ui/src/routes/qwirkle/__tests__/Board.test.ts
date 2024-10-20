import { Board } from "../Board";
import { Block } from "../Block";
import { Pattern, Color } from "../Util";

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

    it("should add 2 blocks next to each other", () => {
        const block1 = new Block(Pattern.Lion, Color.Red);
        const block2 = new Block(Pattern.Lion, Color.Green);
        const x = 0;
        const y = 0;

        board.addBlockAtPosition(block1, x, y);
        expect(board.addBlockAtPosition(block2, x + 1, y)).toBe(true);

        expect(board.getBlockAtPosition(x + 1, y)).toBe(block2);
        expect(board.getBlockAtPosition(x, y)).toBe(block1);
    });
  

    it("should return false on adding a block at a position that is already occupied", () => {
        const block1 = new Block(Pattern.Lion, Color.Red);
        const block2 = new Block(Pattern.Lion, Color.Green);
        const x = 0;
        const y = 0;

        board.addBlockAtPosition(block1, x, y);
        expect(board.addBlockAtPosition(block2, x, y)).toBe(false);
        expect(board.getBlockAtPosition(x, y)).toBe(block1);
    });

    it("should return false on adding a block next to a block with different color and pattern", () => {
        const block1 = new Block(Pattern.Lion, Color.Red);
        const block2 = new Block(Pattern.Elephant, Color.Green);
        const x = 0;
        const y = 0;

        board.addBlockAtPosition(block1, x, y);
        expect(board.addBlockAtPosition(block2, x + 1, y)).toBe(false);
        expect(board.getBlockAtPosition(x + 1, y)).toBe(undefined);
    });

    it("should return false on adding duplicate of block next to each other", () => {
        const block1 = new Block(Pattern.Lion, Color.Red);
        const block2 = new Block(Pattern.Lion, Color.Red);

        board.addBlockAtPosition(block1, 0, 0);
        expect(board.addBlockAtPosition(block2, 1, 0)).toBe(false);
    });

    it("should return false on adding a block with no adjacent member", () => {
        const block = new Block(Pattern.Elephant, Color.Blue);

        expect(board.addBlockAtPosition(block, 1,0)).toBe(false);
    });


    it("should return false on adding a block between pattern row and color row", () => {
        

        board.addBlockAtPosition(new Block(Pattern.Lion, Color.Red), 0, 0);
        board.addBlockAtPosition(new Block(Pattern.Elephant, Color.Red), 1, 0);
        board.addBlockAtPosition(new Block(Pattern.Elephant, Color.Green), 1, 1);
        board.addBlockAtPosition(new Block(Pattern.Elephant, Color.Yellow), 1, 2);
        board.addBlockAtPosition(new Block(Pattern.Monkey, Color.Yellow), 0, 2);
        board.addBlockAtPosition(new Block(Pattern.Zebra, Color.Yellow), 0, 3);
        board.addBlockAtPosition(new Block(Pattern.Lion, Color.Green), 0, -1);


        console.log(board.Blocks);
        expect(board.Blocks.length).toBe(7);
        expect(board.addBlockAtPosition(new Block(Pattern.Lion, Color.Yellow), 0, 1)).toBe(false);
    });




});