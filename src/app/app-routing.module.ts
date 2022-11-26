import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { RandomizeComponent } from './randomize/randomize.component';

const routes: Routes = [
  {
    path: "",
    component: RandomizeComponent
  },
  {
    path: "character-sheet",
    component: CharacterSheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
