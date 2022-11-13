import { Component, OnInit } from '@angular/core';
import CharacterSheet from '../models/CharacterSheet';
import { CharacterSheetInitializerService } from '../services/character-sheet-initializer.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss'],
})
export class CharacterSheetComponent implements OnInit {
  CharacterSheet: CharacterSheet;
  constructor(characterSheetInitializer: CharacterSheetInitializerService) {
    this.CharacterSheet = characterSheetInitializer.Initialize();
  }

  ngOnInit(): void {}
}
