export class Chord {
    name: string;
		description: string;
		selected: boolean;
		keys: number[];
		inversions: boolean;

    constructor(name: string, description: string, selected: boolean, keys: number[]) {
		this.name = name;
		this.description = description;
		this.selected = selected;
		this.keys = keys;
		this.inversions = false;
    }
  }