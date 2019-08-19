/** @noSelfInFile */

declare function GetContainerItemLink(bag: number, slot: number): string;
declare function GetContainerNumSlots(bag: number): number;
declare function UseContainerItem(bag: number, slot: number): void;

/** @tupleReturn */
declare function GetContainerItemInfo(bag: number, slot: number): [string, number, boolean, number, boolean, boolean, string, boolean, boolean, number];
