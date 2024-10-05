import { Board } from '../Board';
import { Block } from '../Block';
import { Direction, Pattern, Color } from '../Util';

describe('Board', () => {
    let board: Board;

    beforeEach(() => {
        board = new Board();
    });

    it('should place first block correctly', () => {

        const block = new Block(Pattern.Lion, Color.Red);
     
        board.addBlockAtPosition(block, 0,0);
    

        const result = board.Blocks.length === 1 && board.Blocks[0] === block;
        expect(result).toBe(true);
    });
});