import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-king.png"
import whiteLogo from "../../assets/white-king.png";
import { Cell } from "../Cell";


export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false;
        if(this.cell.isEmptyVerticalKing(target)) return true;
        if(this.cell.isEmptyHorizontalKing(target)) return true;
        if(this.cell.isEmptyDiagonalKing(target)) return true;
        return false
    }
    isKingUnderAttack(target: Cell) {
        if(target.figure?.name === FigureNames.KING) {
         return false
        }
    }
}