/* @noSelfInFile */
/// <reference path="./unit.d.ts" />

declare namespace WoWAPI {
  type SpecializationIdentifier =
    250 |                       // Blood
    251 |                       // Frost
    252 |                       // Unholy
    // Icon Legion 18x18 Demon Hunter
    577 |                       // Havoc
    581 |                       // Vengeance
    // Druid
    102 |                       // Balance
    103 |                       // Feral
    104 |                       // Icon Mists 34x18 Guardian
    105 |                       // Restoration
    // Hunter
    253 |                       // Beast Mastery
    254 |                       // Marksmanship
    255 |                       // Survival
    // Mage
    62 |                        // Arcane
    63 |                        // Fire
    64 |                        // Frost
    // Icon Mists 34x18 Monk
    268 |                       // Brewmaster
    269 |                       // Windwalker
    270 |                       // Mistweaver
    // Paladin
    65 |                        // Holy
    66 |                        // Protection
    70 |                        // Retribution
    // Priest
    256 |                       // Discipline
    257 |                       // Holy
    258 |                       // Shadow
    // Rogue
    259 |                       // Assassination
    260 |                       // Icon Legion 18x18 Outlaw
    261 |                       // Subtlety
    // Shaman
    262 |                       // Elemental
    263 |                       // Enhancement
    264 |                       // Restoration
    // Warlock
    265 |                       // Affliction
    266 |                       // Demonology
    267 |                       // Destruction
    // Warrior
    71 |                        // Arms
    72 |                        // Fury
    73;                         // Protection

  type SpecializationName = string;
  type SpecializationDescription = string;
  type SpecializationRole =
    'DAMAGER' |
    'TANK' |
    'HEALER';

  type GetSpecializationOutput = [SpecializationIdentifier, SpecializationName, SpecializationDescription, string, string, SpecializationRole];
}

/** @tupleReturn */
declare function GetSpecializationInfo(this: void, specIndex: number, isInspect?: boolean, isPet?: boolean, genderCode?: WoWAPI.UnitSexOutput): WoWAPI.GetSpecializationOutput;
declare function GetNumSpecializations(this: void, isInspect?: boolean, isPet?: boolean): number;
declare function GetSpecialization(this: void, isInspect?: boolean, isPet?: boolean, specGroup?: number): number;
