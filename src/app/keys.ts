export class Key {
    name: string;
    description: string;
    selected: boolean;
    base: string;

    constructor(name: string, description: string, selected: boolean, base: string) {
        this.name = name;
        this.description = description;
        this.selected = selected;
        this.base = base;
    }
  }