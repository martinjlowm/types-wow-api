/** @noSelfInFile */

declare function GetContainerItemLink(bag: number, slot: number): string;
declare function GetContainerNumSlots(bag: number): number;
declare function UseContainerItem(bag: number, slot: number): void;

/** @tupleReturn */
declare function GetContainerItemInfo(bag: number, slot: number): [string, number, boolean, number, boolean, boolean, string, boolean, boolean, number];
declare function GetContainerNumSlots(): number;
declare function IsEquippableItem(itemLink: string): boolean;


declare const NUM_CONTAINER_FRAMES: number;
declare const NUM_BAG_FRAMES: number;
declare const NUM_BAG_SLOTS: number;

declare function IsBagOpen(bagNumber: number): boolean;

declare function GetContainerItemID(bag: number, slot: number): string;
