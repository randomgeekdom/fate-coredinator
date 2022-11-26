import { Injectable } from '@angular/core';
import CharacterSheet from '../models/CharacterSheet';
import { CharacterSheetInitializerService } from './character-sheet-initializer.service';
import { GeneratorsService } from './generators.service';
import {Gender} from '@randomgeekdom/rollbard';

@Injectable({
  providedIn: 'root'
})
export class CharacterSheetRandomizerService {

  constructor(
    private characterSheetInitializer: CharacterSheetInitializerService,
    private generators: GeneratorsService) {
  }

  RandomizeCharacter(): CharacterSheet{
    var characterSheet = this.characterSheetInitializer.Initialize();

    characterSheet.Name = this.generators.NameGenerator.GenerateName(Gender.Other);

    return characterSheet;
  }
}
