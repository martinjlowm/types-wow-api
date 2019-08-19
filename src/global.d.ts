/// <reference path="./font.d.ts" />
/** @noSelfInFile */

declare function hooksecurefunc(table: any, method: string, hookFunc: (...args: any[]) => any): void;

/* @tupleReturn */
declare function smatch(input: string, pattern: string): string[];

declare const HIGHLIGHT_FONT_COLOR: WoWAPI.ColorObject;
declare const NORMAL_FONT_COLOR: WoWAPI.ColorObject;
declare const HIGHLIGHT_FONT_COLOR_CODE: string;
declare const FONT_COLOR_CODE_CLOSE: string;

declare const GameFontDisable: WoWAPI.FontObject;
declare const GameFontHighlight: WoWAPI.FontObject;
declare const GameFontHighlightSmall: WoWAPI.FontObject;
declare const GameFontNormal: WoWAPI.FontObject;
declare const GameFontNormalSmall: WoWAPI.FontObject;
declare const STANDARD_TEXT_FONT: WoWAPI.FontObject;

declare function ShowUIPanel(frameName: string): void;
declare function ShowUIPanel(frame: WoWAPI.Frame): void;

declare function HideUIPanel(frameName: string): void;
declare function HideUIPanel(frame: WoWAPI.Frame): void;

declare const GameMenuFrame: any;
declare const SlashCmdList: Record<string, any>;

declare const GameMenuButtonKeybindings: WoWAPI.Frame;

declare const UISpecialFrames: any[];

declare function SetPortraitTexture(texture: WoWAPI.Texture, unit: string): void;


declare function IsLoggedIn(): boolean;

declare function GetRealmName(): string;
