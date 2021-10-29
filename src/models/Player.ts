import IPlayer from "./IPlayer";

class Player implements IPlayer { // class of Player uses IPlayer interface layout
    // implements (used for interfaces) vs extends (extends inheriting classes)
    // Interfaces do not have the ability to add functionality, like classes, and abstracts
    constructor(
        public name: string, 
        public teamName: string, 
        public position: string, 
        public starting: boolean, 
        public injuredReserve: boolean = false
    ) {}

}

export default Player;