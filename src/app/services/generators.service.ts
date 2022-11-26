import { Injectable } from '@angular/core';
import { NameGenerator, Randomizer } from '@randomgeekdom/rollbard';

@Injectable({
  providedIn: 'root',
})
export class GeneratorsService {
  Randomizer: Randomizer;
  NameGenerator: NameGenerator;

  constructor() {
    this.Randomizer = new Randomizer();
    this.NameGenerator = new NameGenerator(this.Randomizer);
  }
}
