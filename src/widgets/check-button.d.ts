/** @noSelfInFile */

/// <reference path="./script-object.d.ts" />
/// <reference path="./texture.d.ts" />
/// <reference path="./font-string.d.ts" />
/// <reference path="./frame.d.ts" />

declare namespace WoWAPI {

  type CheckButtonWidgetHandlerEvent = 'OnDisable';

  class CheckButton {
    GetChecked(): boolean;
    GetCheckedTexture(): Texture;
    GetDisabledCheckedTexture(): Texture;
    SetChecked(): boolean;
    SetCheckedTexture(texture: string): void;
    SetDisabledCheckedTexture(texture: string): void;
  }

  interface CheckButton extends Button<CheckButtonWidgetHandlerEvent> {}

}

declare function CreateFrame(frameType: 'CheckButton'): WoWAPI.CheckButton;
declare function CreateFrame(frameType: 'CheckButton', frameName: string | null): WoWAPI.CheckButton;
declare function CreateFrame(frameType: 'CheckButton', frameName: string | null, parentObject?: WoWAPI.Object | string, inheritsFrom?: WoWAPI.Object | string): WoWAPI.CheckButton;
