import {GeneralPartsInterface} from "../../interfaces/general-parts.interface";
import {Pumps} from "./pumps";
import {Jacks} from "./jacks";
import {MotorOils} from "./motorOils";
import {Antifreeze} from "./antifreeze";
import {Tires} from "./tires";
import {Discs} from "./discs";
import {SteeringWheel} from "./steeringWheel";
import {Batteries} from "./batteries";
import {Wipers} from "./wipers";
import {Engines} from "./engines";
import {Gearbox} from "./gearbox";
import {ShockAbsorbers} from "./shockAbsorbers";

export const GeneralParts: GeneralPartsInterface = {
  pumps: Pumps,
  jacks: Jacks,
  motorOils: MotorOils,
  antifreeze: Antifreeze,
  tires: Tires,
  discs: Discs,
  steeringWheel: SteeringWheel,
  batteries: Batteries,
  wipers: Wipers,
  engines: Engines,
  gearbox: Gearbox,
  shockAbsorbers: ShockAbsorbers
}
