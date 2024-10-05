class Block {
    pattern: string;
    color: string;

    leftBlock: Block;
    rightBlock: Block= null;
    upperBlock: Block= null;
    lowerBlock: Block= null;

    constructor(pattern : string, color : string){
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
enum Direction{
    Left, 
    Right, 
    Up, 
    Down
}