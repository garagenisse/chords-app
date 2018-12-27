import { Component, OnInit } from '@angular/core';
import { Key } from './keys';
import { Chord } from './chord';
import { Note } from './note';
import { KeyRegistry } from '@angular/core/src/di/reflective_key';
import { notStrictEqual } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Chords - Piano chords practice (garagenisse)';
  keys: Key[] = [];
  chords: Chord[] = [];
  notes: Note[] = [];
  constructor() {

    this.notes = new Array<Note>(
      new Note("a2","A",false,false),
      new Note("bb2","A#",false,false),
      new Note("b2","B",false,false),
      new Note("c3","C",true,false),
      new Note("db3","C#",false,false),
      new Note("d3","D",false,false),
      new Note("eb3","D#",false,false),
      new Note("e3","E",false,false),
      new Note("f3","F",false,false),
      new Note("gb3","F#",false,false),
      new Note("g3","G",false,false),
      new Note("ab3","G#",false,false),
      new Note("a3","A",false,false),
      new Note("bb3","A#",false,false),
      new Note("b3","B",false,false),
      new Note("c4","C",false,false),
      new Note("db4","C#",false,false),
      new Note("d4","D",false,false),
      new Note("eb4","D#",false,false),
      new Note("e4","E",false,false),
      new Note("f4","F",false,false),
      new Note("gb4","F#",false,false),
      new Note("g4","G",false,false),
      new Note("ab4","G#",false,false),
      new Note("a4","A",false,false),
      new Note("bb4","A#",false,false),
      new Note("b4","B",false,false),
      new Note("c5","C",false,false),
    );
    this.keys = new Array<Key>( 
      new Key("a","A", false, "a2"),
      new Key("bb","A#", false,"bb2"),
      new Key("b","B", false, "b2"),
      new Key("c","C", true, "c3"),
      new Key("db","C#", true, "db3"),
      new Key("d","D", false, "d3"),
      new Key("eb","D#", false, "eb3"),
      new Key("e","E", false, "e3"),
      new Key("f","F", true, "f3"),
      new Key("gb","F#", false, "gb3"),
      new Key("g","G", true, "g3"),
      new Key("ab","G#", false, "ab3"),
      );

      // Reference: https://www.pianochord.org
      this.chords = new Array<Chord>(
        // Two note chords
        new Chord("5", "Five chord", false, [0,7]),

        // Three note chords
        new Chord("Major", "Major chord", true, [0,4,7]),
        new Chord("Minor", "Minor chord", true,  [0,3,7]),
        new Chord("Sus2", "Suspended second chord", true,  [0,2,7]),
        new Chord("Sus4", "Suspended fourth chord", true,  [0,5,7]),
        new Chord("Dim", "Diminished chord", true,  [0,3,6]),
        new Chord("Aug", "Augmented fifth chord", true,  [0,4,8]),

        // // Four note chords
        // new Chord("Dominant seventh", "Major chord", true, [0,4,7,10]),
        // new Chord("Minor seventh", "Minor chord", true,  [0,3,7,10]),
        
      )
  }

  ngOnInit(){

  }

  onNextChord() {
    
    // Hit kommer man alltid när nåt ändras eller när man klickar på klaviaturen, då genereras ett nytt slumpvärde för Key och Chord sen triggar det allt annat typ...
    var selectedKeys = this.keys.filter(k => k.selected);
    var selectedChords = this.chords.filter(c => c.selected);
    var randomKey = Math.floor(Math.random() * selectedKeys.length);
    var randomChord = Math.floor(Math.random() * selectedChords.length);

    var key = selectedKeys[randomKey];
    var chord = selectedChords[randomChord];

    console.log("Random chord: " + key.description + " " + chord.description);

    // Reset keyboard classes
    this.notes.forEach(n => {n.play = false; n.key = false;});

    // Assign new classes
    var baseindex = this.notes.findIndex( n => n.name == key.base);
    this.notes[baseindex].key = true;
    chord.keys.forEach( c => {
      this.notes[baseindex + c].play = true;
    })


  }

}
