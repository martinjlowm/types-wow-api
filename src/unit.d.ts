declare namespace WoWAPI {
  type LocalizedClass = string;
  type LocalizedFaction = string;
  type EnglishClass =
    'DRUID' |
    'MAGE' |
    'PALADIN' |
    'PRIEST' |
    'ROGUE' |
    'SHAMAN' |
    'WARLOCK' |
    'WARRIOR';
  type EnglishFaction =
    'Alliance' |
    'Horde';

  type UnitLevels = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60;

  type ClassIndex = number;

  type UnitClassOutput = [LocalizedClass, EnglishClass, ClassIndex];
  type UnitLevelOutput = UnitLevels;
  type UnitFactionGroupOutput = [EnglishFaction, LocalizedFaction];

  type UnitSexOutput =
    1 |                           // Unknown
    2 |                           // Make
    3;                            // Female
}

/** @tupleReturn */
declare function UnitClass(this: void, unit: string): WoWAPI.UnitClassOutput;
declare function UnitLevel(this: void, unit: string): WoWAPI.UnitLevelOutput;
declare function UnitSex(this: void, unit: string): WoWAPI.UnitSexOutput;
/** @tupleReturn */
declare function UnitFactionGroup(this: void, unit: string): WoWAPI.UnitFactionGroupOutput;



/** @forRange */
declare function forRange(start: number, limit: number, step?: number): number[];