/** @noSelfInFile */

declare function debugstack(thread?: number, start?: number, numTopStack?: number, numBottomStack?: number): string;
declare function geterrorhandler(): (...args: any[]) => void;
