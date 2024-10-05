import { Direction } from "./Util";
import { Block } from "./Block";

export class Board {
    Blocks: Block[];

    constructor() {
        this.Blocks = [];
    }

    addBlockAtPosition(block: Block, x: number, y: number) {


        if(this.checkIfBlockCanBePlaced(block, x, y)){
            block.x = x;
            block.y = y;
            this.Blocks.push(block);
            return true;
        }
        return false;
    }

    getBlockAtPosition(x: number, y: number) {
        return this.Blocks.find(b => b.x == x && b.y == y);
    }

    checkIfBlockCanBePlaced(block: Block, x: number, y: number) {
        let valid = true;

        if (this.getBlockAtPosition(x, y) != null)
            return false;

       return this.checkIfColorCanBePlaced(block, x, y) || this.checkIfPatternCanBePlaced(block, x, y);
    }

    checkIfColorCanBePlaced(block: Block, x: number, y: number) {

        let leftBlock = this.getBlockAtPosition(x - 1, y);
        let rightBlock = this.getBlockAtPosition(x + 1, y);
        let topBlock = this.getBlockAtPosition(x, y - 1);
        let bottomBlock = this.getBlockAtPosition(x, y + 1);

        return (leftBlock == null || leftBlock.isBlockColorValid(block, Direction.Left))
            && (rightBlock == null  || rightBlock.isBlockColorValid(block, Direction.Right))
            && (topBlock == null || topBlock.isBlockColorValid(block, Direction.Up))
            && (bottomBlock == null || bottomBlock.isBlockColorValid(block, Direction.Down));
    }


    checkIfPatternCanBePlaced(block: Block, x: number, y: number) {

        let leftBlock = this.getBlockAtPosition(x - 1, y);
        let rightBlock = this.getBlockAtPosition(x + 1, y);
        let topBlock = this.getBlockAtPosition(x, y - 1);
        let bottomBlock = this.getBlockAtPosition(x, y + 1);

        return (leftBlock == null || leftBlock.isBlockPatternValid(block, Direction.Left))
            && (rightBlock == null  || rightBlock.isBlockPatternValid(block, Direction.Right))
            && (topBlock == null || topBlock.isBlockPatternValid(block, Direction.Up))
            && (bottomBlock == null || bottomBlock.isBlockPatternValid(block, Direction.Down));
    }

}