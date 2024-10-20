import {  Pattern, Color} from "./Util";

export class Block {
    pattern: Pattern;
    color: Color;

    x: number;
    y: number;

    constructor(pattern : Pattern, color : Color){
        this.pattern = pattern;
        this.color = color;
    }
    
}