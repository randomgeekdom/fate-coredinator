import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss'],
})
export class CharacterSheetComponent implements OnInit {
  Skills: string[] = [
    'Athletics',
    'Burglary',
    'Contacts',
    'Crafts',
    'Deceive',
    'Drive',
    'Empathy',
    'Fight',
    'Investigate',
    'Lore',
    'Notice',
    'Physique',
    'Provoke',
    'Rapport',
    'Resources',
    'Shoot',
    'Stealth',
    'Will',
  ];

  constructor() {}

  ngOnInit(): void {}
}
