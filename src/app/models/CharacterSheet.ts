import CharacterSkill from "./CharacterSkill";
import Consequence from "./Consequence";
import StressTrack from "./StressTrack";
import Stunt from "./Stunt";

export default class CharacterSheet{
  Name = "";
  Description = "";
  Refresh = 3;
  CurrentFatePoints = 3;
  Extras = "";
  Aspects: string[] = [];
  Skills: CharacterSkill[] = [];
  Stunts: Stunt[] = [];
  Consequences: Consequence[] = [];
  StressTracks: StressTrack[] = [];
}
