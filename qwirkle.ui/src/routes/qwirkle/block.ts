import {  Direction, Pattern, Color} from "./Util";

export class Block {
    pattern: Pattern;
    color: Color;

    x: number;
    y: number;

    leftBlock: Block;
    rightBlock: Block= null;
    upperBlock: Block= null;
    lowerBlock: Block= null;

    constructor(pattern : Pattern, color : Color){
        this.pattern = pattern;
        this.color = color;
    }

    public isBlockColorValid(other : Block, direction : Direction ){
        //Block is allowed if it is the same color and the pattern is unique in the row
        if(other.color != this.color || other.pattern == this.pattern)
            return false;
        let dirBlock : Block;
        switch (direction) {
            case Direction.Up:
                dirBlock = this.upperBlock;
                break;
            case Direction.Down:
                dirBlock = this.lowerBlock;
                break;
            case Direction.Left:
                dirBlock = this.leftBlock;
                break;
            case Direction.Right:
                dirBlock = this.rightBlock;
                break;
        }

        return dirBlock == null || dirBlock.isBlockColorValid(other, direction)
    }

    public isBlockPatternValid(other : Block, direction : Direction){
        //Block is allowed if it is the same pattern and the color is unique in the row
        if(other.pattern != this.pattern || other.color == this.color)
            return false;
        let dirBlock : Block;
        switch (direction) {
            case Direction.Up:
                dirBlock = this.upperBlock;
                break;
            case Direction.Down:
                dirBlock = this.lowerBlock;
                break;
            case Direction.Left:
                dirBlock = this.leftBlock;
                break;
            case Direction.Right:
                dirBlock = this.rightBlock;
                break;
        }

        return dirBlock == null || dirBlock.isBlockPatternValid(other, direction)
    }

    public addBlock(other : Block, direction : Direction){
        switch (direction) {
            case Direction.Up:
                this.upperBlock = other;                
                break;
            case Direction.Down:
                this.lowerBlock = other;
            case Direction.Left :
                this.leftBlock = other;
            case Direction.Right : 
                this.rightBlock = other;
        }

    }




    
}