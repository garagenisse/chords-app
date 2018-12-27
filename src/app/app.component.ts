import { Component, OnInit } from '@angular/core';
import { Key } from './keys';
import { Chord } from './chord';
import { KeyRegistry } from '@angular/core/src/di/reflective_key';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Chords - Piano chords practice (garagenisse)';
  keys: Key[] = [];
  chords: Chord[] = [];

  constructor() {

    this.keys = new Array<Key>( 
      new Key("c","C", true),
      new Key("db","C#", true),
      new Key("d","D", false),
      new Key("eb","D#", false),
      new Key("e","E", false),
      new Key("f","F", true),
      new Key("gb","F#", false),
      new Key("g","G", true),
      new Key("ab","G#", false),
      new Key("a","A", false),
      new Key("bb","A#", false),
      new Key("b","B", false),
      );

      this.chords = new Array<Chord>(
        new Chord("Major", "Major chord", true, [0,4,7]),
        new Chord("Minor", "Minor chord", true,  [0,3,7])
      )
  }

  ngOnInit(){

  }

  onClickMe() {
    
    // Hit kommer man alltid när nåt ändras eller när man klickar på klaviaturen, då genereras ett nytt slumpvärde för Key och Chord sen triggar det allt annat typ...
    var selectedKeys = this.keys.filter(k => k.selected);
    var selectedChords = this.chords.filter(c => c.selected);
    var randomKey = Math.floor(Math.random() * selectedKeys.length);
    var randomChord = Math.floor(Math.random() * selectedChords.length);

    console.log("Random chord: " + selectedKeys[randomKey].description + " " + selectedChords[randomChord].description);
  }

}
