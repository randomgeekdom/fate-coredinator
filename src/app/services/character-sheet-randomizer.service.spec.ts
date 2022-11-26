import { TestBed } from '@angular/core/testing';

import { CharacterSheetRandomizerService } from './character-sheet-randomizer.service';

describe('CharacterSheetRandomizerService', () => {
  let service: CharacterSheetRandomizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterSheetRandomizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
