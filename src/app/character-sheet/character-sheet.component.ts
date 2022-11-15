import { Component, OnInit } from '@angular/core';
import Aspect from '../models/Aspect';
import CharacterSheet from '../models/CharacterSheet';
import CharacterSkill from '../models/CharacterSkill';
import { CharacterSheetInitializerService } from '../services/character-sheet-initializer.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss'],
})
export class CharacterSheetComponent implements OnInit {
  CharacterSheet: CharacterSheet;
  breakpoint = 6;
  constructor(characterSheetInitializer: CharacterSheetInitializerService) {
    this.CharacterSheet = characterSheetInitializer.Initialize();
  }

  ngOnInit(): void {   this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }

  AddAspect(): void{
    this.CharacterSheet.Aspects.push(new Aspect());
  }

  DeleteAspect(id: string){
    var value = this.CharacterSheet.Aspects.find(x=>x.Id == id);
    if(!value){
      return;
    }
    var index = this.CharacterSheet.Aspects.indexOf(value);
    this.CharacterSheet.Aspects.splice(index, 1);
  }

  get OrderedSkills(): CharacterSkill[]
  {
    return this.CharacterSheet.Skills.sort(x=>x.Value * -1);
  }
}
