/** @noSelfInFile */

declare namespace WoWAPI {
  type LocalizedClass = string;
  type LocalizedFaction = string;
  type LocalizedRace = string;
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
  type EnglishRace =
    'Dwarf' |
    'Gnome' |
    'Human' |
    'Night Elf' |
    'Orc' |
    'Tauren' |
    'Troll' |
    'Undead';

  type UnitLevels = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60;

  type ClassIndex = number;
  type RaceIndex = number;

  type UnitClassOutput = [LocalizedClass, EnglishClass, ClassIndex];
  type UnitRaceOutput = [LocalizedRace, EnglishRace, RaceIndex];
  type UnitLevelOutput = UnitLevels;
  type UnitFactionGroupOutput = [EnglishFaction, LocalizedFaction];

  type UnitSexOutput =
    1 |                           // Unknown
    2 |                           // Make
    3;                            // Female
}

/** @tupleReturn */
declare function UnitClass(unit: string): WoWAPI.UnitClassOutput;
/** @tupleReturn */
declare function UnitRace(unit: string): WoWAPI.UnitRaceOutput;
/** @tupleReturn */
declare function UnitLevel(unit: string): WoWAPI.UnitLevelOutput;
/** @tupleReturn */
declare function UnitSex(unit: string): WoWAPI.UnitSexOutput;
declare function UnitName(unit: string): string;

/** @tupleReturn */
declare function UnitFactionGroup(unit: string): WoWAPI.UnitFactionGroupOutput;

/** @forRange */
declare function forRange(start: number, limit: number, step?: number): number[];
