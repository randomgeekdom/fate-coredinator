import { v4 as uuidv4 } from 'uuid';

export default class Aspect{
  Id = uuidv4() || "";
  Text = "New Aspect";
}
