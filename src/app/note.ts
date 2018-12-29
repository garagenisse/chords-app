export class Note {
    name: string;
    description: string;
    play: boolean;
    key: boolean;

    constructor(name: string, description: string, play: boolean, key: boolean) {
        this.name = name;
        this.description = description;
        this.play = play;
        this.key = key;
    }


    playClass(){
        return this.play ? "play" : "";
    }

    isKeyClass() {
        return this.key ? "key": "";
    }

    colorClass(){
        return (this.description.indexOf('#') != -1) ? "black " + this.name : "white " + this.name;
    }
  }