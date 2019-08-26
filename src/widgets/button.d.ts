/** @noSelfInFile */

/// <reference path="./script-object.d.ts" />
/// <reference path="./texture.d.ts" />
/// <reference path="./font-string.d.ts" />
/// <reference path="./frame.d.ts" />

declare namespace WoWAPI {

  type ButtonWidgetHandlerEvent = 'OnClick' | 'OnDoubleClick' | 'PostClick' | 'PreClick';

  class Button {
    Click(): void;
    Disable(): void;
    Enable(): void;
    GetButtonState(): void;
    GetDisabledFontObject(): void;
    GetDisabledTexture(): Texture;
    GetFontString(): void;
    GetHighlightFontObject(): void;
    GetHighlightTexture(): Texture;
    GetMotionScriptsWhileDisabled(): void;
    GetNormalFontObject(): void;
    GetNormalTexture(): Texture;
    GetPushedTextOffset(): void;
    GetPushedTexture(): Texture;
    GetText(): void;
    GetTextHeight(): void;
    GetTextWidth(): void;
    IsEnabled(): void;
    LockHighlight(): void;
    RegisterForClicks(...args: MouseButton[]): void;
    SetButtonState(): void;
    SetDisabledAtlas(): void;
    SetDisabledFontObject(obj: FontObject): void;
    SetDisabledTexture(texture: string): void;
    SetEnabled(): void;
    SetFontString(): void;
    SetFormattedText(): void;
    SetHighlightAtlas(): void;
    SetHighlightFontObject(obj: FontObject): void;
    SetHighlightTexture(texture: string): void;
    SetMotionScriptsWhileDisabled(): void;

    SetNormalAtlas(): void;
    SetNormalFontObject(): void;
    SetNormalTexture(texture: string): void;

    SetPushedAtlas(): void;
    SetPushedTextOffset(): void;
    SetPushedTexture(texture: string): void;

    // Set the displayed text.
    SetText(text: string): void;

    UnlockHighlight(): void;
  }

  interface Button<Inheritor = {}, T = {}> extends Frame<Inheritor extends {} ? Inheritor : Button, T extends {} ? ButtonWidgetHandlerEvent : ButtonWidgetHandlerEvent | T> {}

}

declare function CreateFrame(frameType: 'Button'): WoWAPI.Button;
declare function CreateFrame(frameType: 'Button', frameName: string | null): WoWAPI.Button;
declare function CreateFrame(frameType: 'Button', frameName: string | null, parentObject?: WoWAPI.Object | string, inheritsFrom?: WoWAPI.Object | string): WoWAPI.Button;
