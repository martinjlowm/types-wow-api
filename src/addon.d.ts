/** @noSelfInFile */

/**
 * Returns name, title, notes, enabled, loadable, reason, security.
 * @tupleReturn
 */
declare function GetAddOnInfo(addonName: string): [string, string, string, boolean, boolean, string, string];

/**
 * @tupleReturn
 */
declare function GetAddOnInfo(index: number): [string, string, string, boolean, boolean, string, string];


declare function GetAddOnMetadata(addonName: string, tocEntry: string): string;
declare function IsAddOnLoaded(addonName: string): boolean;

/** @tupleReturn */
declare function GetBuildInfo(): [string, string, string, number];
