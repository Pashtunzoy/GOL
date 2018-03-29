interface IConwaysGOL {
    letsGetStarted(): string;
    restart(): void;
    start(): void;
}
/**
 * The main function for the Conway's Game of Life implementation
 * 
 * @export
 * @class ConwaysGOL
 * @implements {IConwaysGOL}
 */
export default class ConwaysGOL implements IConwaysGOL {
    generation: number;
    alive: number;

    letsGetStarted(): string {
        return "Woohoo";
    }

    start(): void {
        this.restart();
    }

    restart(): void {
        this.generation = 0;
        this.alive = 0;
        this.letsGetStarted();
    }

}
