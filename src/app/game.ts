export class Game {
    name: string;
    _deaths: string[];
    _log: Action[];
}

export class Action {
    action: string;
    timestamp: string;
}