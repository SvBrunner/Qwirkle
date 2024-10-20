import {  Pattern } from "./Util";
import { Block } from "./Block";

export class Board {
    Blocks: Block[];

    constructor() {
        this.Blocks = [];
    }

    addBlockAtPosition(block: Block, x: number, y: number) {
        if (this.checkIfBlockCanBePlaced(block, x, y)) {
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
        if (this.getBlockAtPosition(x, y) != null 
            || (!this.isStartingPos(x, y) && !this.checkIfThereIsAdjacentBlock(x, y)))
            return false;

        return this.checkIfBlockCanBePlacedHorizontally(block, x, y) && this.checkIfBlockCanBePlacedVertically(block, x, y);
    }

    checkIfBlockCanBePlacedHorizontally(block: Block, x: number, y: number) {
        return this.checkIfSamePatternDifferentColorHorizontally(block, x, y) || this.checkIfSameColorDifferentPatternHorizontally(block, x, y);
    }

    checkIfBlockCanBePlacedVertically(block: Block, x: number, y: number) {
        return this.checkIfSamePatternDifferentColorVertically(block, x, y) || this.checkIfSameColorDifferentPatternVertically(block, x, y);
    }

    checkIfSamePatternDifferentColorHorizontally(block: Block, x: number, y: number): boolean {
        const colors = new Set();
        colors.add(block.color);

        let leftBlock = this.getBlockAtPosition(x - 1, y);
        while (leftBlock != null) {
            if (leftBlock.pattern !== block.pattern || colors.has(leftBlock.color)) {
                return false;
            }
            colors.add(leftBlock.color);
            leftBlock = this.getBlockAtPosition(leftBlock.x - 1, y);
        }

        let rightBlock = this.getBlockAtPosition(x + 1, y);
        while (rightBlock != null) {
            if (rightBlock.pattern !== block.pattern || colors.has(rightBlock.color)) {
                return false;
            }
            colors.add(rightBlock.color);
            rightBlock = this.getBlockAtPosition(rightBlock.x + 1, y);
        }

        return true;
    }

    checkIfSamePatternDifferentColorVertically(block: Block, x: number, y: number): boolean {
        const colors = new Set();
        colors.add(block.color);

        let topBlock = this.getBlockAtPosition(x, y - 1);
        while (topBlock != null) {
            if (topBlock.pattern !== block.pattern || colors.has(topBlock.color)) {
                return false;
            }
            colors.add(topBlock.color);
            topBlock = this.getBlockAtPosition(x, topBlock.y - 1);
        }

        let bottomBlock = this.getBlockAtPosition(x, y + 1);
        while (bottomBlock != null) {
            if (bottomBlock.pattern !== block.pattern || colors.has(bottomBlock.color)) {
                return false;
            }
            colors.add(bottomBlock.color);
            bottomBlock = this.getBlockAtPosition(x, bottomBlock.y + 1);
        }

        return true;
    }

    checkIfSameColorDifferentPatternHorizontally(block: Block, x: number, y: number): boolean {
        const patterns = new Set<Pattern>();
        patterns.add(block.pattern);

        // Check patterns on the left
        let leftBlock = this.getBlockAtPosition(x - 1, y);
        while (leftBlock != null) {
            if (leftBlock.color !== block.color || patterns.has(leftBlock.pattern)) {
                return false;
            }
            patterns.add(leftBlock.pattern);
            leftBlock = this.getBlockAtPosition(leftBlock.x - 1, y);
        }

        // Check patterns on the right
        let rightBlock = this.getBlockAtPosition(x + 1, y);
        while (rightBlock != null) {
            if (rightBlock.color !== block.color || patterns.has(rightBlock.pattern)) {
                return false;
            }
            patterns.add(rightBlock.pattern);
            rightBlock = this.getBlockAtPosition(rightBlock.x + 1, y);
        }

        return true;
    }

    checkIfSameColorDifferentPatternVertically(block: Block, x: number, y: number): boolean {
        const patterns = new Set();
        patterns.add(block.pattern);

        let topBlock = this.getBlockAtPosition(x, y - 1);
        while (topBlock != null) {
            if (topBlock.color !== block.color || patterns.has(topBlock.pattern)) {
                return false;
            }
            patterns.add(topBlock.pattern);
            topBlock = this.getBlockAtPosition(x, topBlock.y - 1);
        }

        let bottomBlock = this.getBlockAtPosition(x, y + 1);
        while (bottomBlock != null) {
            if (bottomBlock.color !== block.color || patterns.has(bottomBlock.pattern)) {
                return false;
            }
            patterns.add(bottomBlock.pattern);
            bottomBlock = this.getBlockAtPosition(x, bottomBlock.y + 1);
        }

        return true;
    }

    

    checkIfThereIsAdjacentBlock(x: number, y: number) {
        const left = this.getBlockAtPosition(x - 1, y);
        const right = this.getBlockAtPosition(x + 1, y);
        const top = this.getBlockAtPosition(x, y - 1);
        const bottom = this.getBlockAtPosition(x, y + 1);

        return left != null || right != null || top != null || bottom != null;
    }

    isStartingPos(x: number, y: number) {
        return x == 0 && y == 0;
    }
}