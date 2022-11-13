import { Injectable } from '@angular/core';
import CharacterSheet from 'src/app/models/CharacterSheet';
import CharacterSkill from '../models/CharacterSkill';
import Consequence from '../models/Consequence';
import DefaultSkills from '../models/DefaultSkills';

@Injectable({
  providedIn: 'root',
})
export class CharacterSheetInitializerService {
  Initialize(): CharacterSheet {
    var sheet = new CharacterSheet();

    sheet.Skills = DefaultSkills.Get().map(
      (x) =>
        {
          var skill =new CharacterSkill();
          skill.Name = x;
          return skill;
        }
    );

    sheet.Consequences = [
      {
        Level: 2,
        Value: '',
        LevelLabel: 'Mild',
      },
      {
        Level: 4,
        Value: '',
        LevelLabel: 'Moderate',
      },
      {
        Level: 6,
        Value: '',
        LevelLabel: 'Severe',
      },
    ];

    sheet.StressTracks = [
      {
        Name: "Physical",
        SkillBasis: "Physique",
        Stress: [
          {
            Level: 1,
            Value: false
          },
          {
            Level: 2,
            Value: false
          }
        ]
      },
      {
        Name: "Mental",
        SkillBasis: "Will",
        Stress: [
          {
            Level: 1,
            Value: false
          },
          {
            Level: 2,
            Value: false
          }
        ]
      }
    ];

    return sheet;
  }
}
