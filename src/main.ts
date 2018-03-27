interface IConwaysGOL {
    letsGetStarted(): string;
}

export default class ConwaysGOL implements IConwaysGOL {
    letsGetStarted(): string {
        return "Woohoo";
    }
}
