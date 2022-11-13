import { TestBed } from '@angular/core/testing';

import { CharacterSheetInitializerService } from './character-sheet-initializer.service';

describe('CharacterSheetInitializerService', () => {
  let service: CharacterSheetInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterSheetInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
