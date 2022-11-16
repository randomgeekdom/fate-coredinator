import { v4 as uuidv4 } from 'uuid';

export default class Stunt{
  Id = uuidv4() || "";
  Name = "New Stunt";
  RollableSkill = "";
  Modifier = 0;
  Cost = 0;
}
