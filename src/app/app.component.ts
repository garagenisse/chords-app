import { Component, OnInit } from '@angular/core';
import { Key } from './keys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Chords - Piano chords practice (garagenisse)';

  keys: Key[] = [];

  // keys: Hero = ["c", "db", "d", "eb", "e", "f", "gb", "g", "ab", "a", "bb", "b"];

  constructor() {

    this.keys = new Array<Key>( 
      new Key("c","C"),
      new Key("db","C#"),
      new Key("d","D"),
      new Key("eb","D#"),
      new Key("e","E"),
      new Key("f","F"),
      new Key("gb","F#"),
      new Key("g","G"),
      new Key("ab","G#"),
      new Key("a","A"),
      new Key("bb","A#"),
      new Key("b","B"),
      );
  }

  ngOnInit(){

  }
}
