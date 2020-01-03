import { Component, OnInit } from '@angular/core';
import { Key } from './keys';
import { Chord } from './chord';
import { Note } from './note';
// import { KeyRegistry } from '@angular/core/src/di/reflective_key';
// import { notStrictEqual } from 'assert';
// import { nextContext } from '@angular/core/src/render3';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  closeResult: string;

  title: String = 'Chords - Piano chords practice (garagenisse)';
  keys: Key[] = [];
  chords: Chord[] = [];
  notes: Note[] = [];
  currentChord: Chord = null;
  currentKey: Key = null;

  constructor(private modalService: NgbModal) {

    this.notes = new Array<Note>(
    //   new Note("a2","A",false,false),
    //   new Note("bb2","A#",false,false),
    //   new Note("b2","B",false,false),
    //   new Note("c3","C",true,false),
    //   new Note("db3","C#",false,false),
    //   new Note("d3","D",false,false),
    //   new Note("eb3","D#",false,false),
    //   new Note("e3","E",false,false),
    //   new Note("f3","F",false,false),
    //   new Note("gb3","F#",false,false),
    //   new Note("g3","G",false,false),
    //   new Note("ab3","G#",false,false),
    //   new Note("a3","A",false,false),
    //   new Note("bb3","A#",false,false),
    //   new Note("b3","B",false,false),
    //   new Note("c4","C",false,false),
    //   new Note("db4","C#",false,false),
    //   new Note("d4","D",false,false),
    //   new Note("eb4","D#",false,false),
    //   new Note("e4","E",false,false),
    //   new Note("f4","F",false,false),
    //   new Note("gb4","F#",false,false),
    //   new Note("g4","G",false,false),
    //   new Note("ab4","G#",false,false),
    //   new Note("a4","A",false,false),
    //   new Note("bb4","A#",false,false),
    //   new Note("b4","B",false,false),
	//   new Note("c5","C",false,false),
	
	new Note("g0","G",false,false),
	new Note("ab0","G#",false,false),
	new Note("a0","A",false,false),
	new Note("bb0","A#",false,false),
	new Note("b0","B",false,false),
	new Note("c1","C",true,false),
	new Note("db1","C#",false,false),
	new Note("d1","D",false,false),
	new Note("eb1","D#",false,false),
	new Note("e1","E",false,false),
	new Note("f1","F",false,false),
	new Note("gb1","F#",false,false),
	new Note("g1","G",false,false),
	new Note("ab1","G#",false,false),
	new Note("a1","A",false,false),
	new Note("bb1","A#",false,false),
	new Note("b1","B",false,false),
	new Note("c2","C",false,false),
	new Note("db2","C#",false,false),
	new Note("d2","D",false,false),
	new Note("eb2","D#",false,false),
	new Note("e2","E",false,false),
	new Note("f2","F",false,false),
	new Note("gb2","F#",false,false),
	new Note("g2","G",false,false),
	new Note("ab2","G#",false,false),
	new Note("a2","A",false,false),
	new Note("bb2","A#",false,false),
	new Note("b2","B",false,false),

    );
    this.keys = new Array<Key>( 
		new Key("c","C", true, "c1"),
		new Key("db","C#", true, "db1"),
		new Key("d","D", true, "d1"),
		new Key("eb","D#", true, "eb1"),
		new Key("e","E", true, "e1"),
		new Key("f","F", true, "f1"),
		new Key("gb","F#", true, "gb1"),
		new Key("g","G", true, "g1"),
		new Key("ab","G#", true, "ab1"),
		new Key("a","A", true, "a1"),
      	new Key("bb","A#", true,"bb1"),
      	new Key("b","B", true, "b1"),
      );

      // Reference: https://www.pianochord.org
      this.chords = new Array<Chord>(
        // Two note chords
        new Chord("5", "Five chord", true, [0,7]),

        // Three note chords
        new Chord("", "Major chord", true, [0,4,7]),
        new Chord("m", "Minor chord", true,  [0,3,7]),
        new Chord("Sus2", "Suspended second chord", true,  [0,2,7]),
        new Chord("Sus4", "Suspended fourth chord", true,  [0,5,7]),
        new Chord("Dim", "Diminished chord", true,  [0,3,6]),
        new Chord("Aug", "Augmented fifth chord", true,  [0,4,8]),

        // Four note chords
        new Chord("7", "Dominant seventh chord", true, [0,4,7,10]),
        new Chord("m7", "Minor seventh chord", true,  [0,3,7,10]),
        new Chord("maj7", "Major seventh chord", true,  [0,4,7,11]),
        new Chord("6", "Major sixth chord", true,  [0,4,7,9]),
        new Chord("m6", "Minor sixth chord", true,  [0,3,7,9]),

        // // Five note chords
        // new Chord("6add9", "Six add 9 chord", true, [0,4,7,9,14]),
        // new Chord("9", "Major ninth seventh chord", true, [0,4,7,10,14]),
        // new Chord("m9", "Minor ninth seventh chord", true, [0,3,7,10,14]),

      )
    }

  ngOnInit(){
    this.onNextChord();
  }

  onToggleInversions(evt) {
    this.chords.forEach(n => n.inversions = evt.target.checked);
  }

  onToggleChord(evt) {
    this.chords.forEach(n => n.selected = evt.target.checked);
  }

  openSettings(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  onNextChord() {
    
    // Hit kommer man alltid när nåt ändras eller när man klickar på klaviaturen, då genereras ett nytt slumpvärde för Key och Chord sen triggar det allt annat typ...
    var selectedKeys = this.keys.filter(k => k.selected);
    var selectedChords = this.chords.filter(c => c.selected);

    // Avoid same chord if possible
	let i = 10;
	var randomChordIX, randomKeyIX, randomInversionIX = 0

    do{
      randomKeyIX = Math.floor(Math.random() * selectedKeys.length);
      randomChordIX = Math.floor(Math.random() * selectedChords.length);
    }
    while(this.currentChord != null && i-->0 && this.currentChord.name === selectedChords[randomChordIX].name) 

    this.currentKey = selectedKeys[randomKeyIX];
    this.currentChord = selectedChords[randomChordIX];

    console.log("Random chord: " + this.currentKey.description + " " + this.currentChord.description);

    // Reset keyboard classes 
    this.notes.forEach(n => {n.play = false; n.key = false;});

	// Randomize inversion if active
	if(this.currentChord.inversions) {
		randomInversionIX = Math.floor(this.currentChord.keys.length * Math.random());
		console.log("Inversion: ", randomInversionIX)
	}

	// Calculate where to position the chord, given some ix'es like [0,4,7] and added octave for inversions like for this ones second inversion
	// we get [12,16,7], if we get max of this including base index greater then number of keys (=28) then we transpose down one octave that is 12
	var ixes = this.currentChord.keys.slice()
	console.log("Chorde indexes default:", ixes)
	ixes.forEach((k,ix) => {
		if(ix<randomInversionIX) ixes[ix] += 12;
	})
	console.log("Chorde indexes inversions:", ixes)

	// Base index (the key)
	var baseindex = this.notes.findIndex( n => n.name == this.currentKey.base);

	// Check if out of bounds
	if(baseindex + Math.max.apply(Math,ixes) > 21) {
		ixes = ixes.map((k,ix) => k - 12)
		console.log("Out of bounds, new indexes:", ixes)
	} 
    // Assign new classes
	console.log("Base index: ", baseindex)
	this.notes[baseindex + (randomInversionIX > 0 ? 12 : 0)].key = true;
	ixes.forEach( c => {
		try {
			this.notes[baseindex + c].play = true;
		} catch (error) {
			console.log("Failed setting play")	
		}
	})
	
	try {
		this.notes[ixes[0] + baseindex].key = true;
	} catch (error) {
		console.log("Failed setting key")		
	}



  }

}
