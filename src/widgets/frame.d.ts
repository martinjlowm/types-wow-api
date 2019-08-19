/** @noSelfInFile */

/// <reference path="./script-object.d.ts" />
/// <reference path="./texture.d.ts" />
/// <reference path="./font-string.d.ts" />

declare namespace WoWAPI {

  type FrameStrata =
    'TOOLTIP' |
    'FULLSCREEN_DIALOG' |
    'FULLSCREEN' |
    'DIALOG' |
    'HIGH' |
    'MEDIUM' |
    'LOW' |
    'BACKGROUND' |
    'WORLD';

  type FrameWidgetHandlerEvent =
    'OnAttributeChanged' |
    'OnChar' |
    'OnDisable' |
    'OnDragStart' |
    'OnDragStop' |
    'OnEnable' |
    'OnEnter' |
    'OnEvent' |
    'OnHide' |
    'OnHyperlinkClick' |
    'OnHyperlinkEnter' |
    'OnHyperlinkLeave' |
    'OnKeyDown' |
    'OnKeyUp' |
    'OnLeave' |
    'OnMouseDown' |
    'OnMouseUp' |
    'OnMouseWheel' |
    'OnReceiveDrag' |
    'OnShow' |
    'OnSizeChanged';

  class Frame {
    CreateFontString(name?: string, layer?: string, inheritsFrom?: Region | string): FontString;
    CreateTexture(name?: string, layer?: string, inheritsFrom?: Region): Texture;
    CreateTitleRegion(): void;
    DisableDrawLayer(layer: string): void;
    EnableDrawLayer(layer: string): void;
    EnableKeyboard(enableFlag?: boolean): void;
    EnableMouse(enableFlag?: boolean): void;
    EnableMouseWheel(enableFlag?: boolean): void;
    GetAttribute(prefix: string, name: string, suffix: string): string | number | null;
    GetAttribute(name: string): string | number | null;
    SetAttribute(attribute: string, value: string | number | null): void;
    GetBackdrop(): any;
    GetBackdropBorderColor(): [Color, Color, Color, Alpha];
    GetBackdropColor(): [Color, Color, Color, Alpha];
    GetChildren(): Frame[];
    GetClampRectInsets(): [number, number];
    GetDepth(): number;
    GetEffectiveAlpha(): number;
    GetEffectiveDepth(): number;
    GetEffectiveScale(): number;
    GetFrameLevel(): number;
    GetFrameStrata(): number;
    GetFrameType(): string;
    GetHitRectInsets(): [number, number];
    GetID(): number;
    GetMaxResize(): [number, number];
    GetMinResize(): [number, number];
    GetNumChildren(): number;
    GetNumRegions(): number;
    GetRegions(): Region[];
    GetScale(): number;
    /* GetScript(handler: FrameWidgetHandler): HandlerFunction; */
    GetTitleRegion(): Region;
    /* HasScript(handler: FrameWidgetHandler): boolean; */
    /* HookScript(handler: FrameWidgetHandler, func: HandlerFunction): HandlerFunction; */
    IgnoreDepth(ignoreFlag: boolean): void;
    IsClampedToScreen(): boolean;
    IsEventRegistered(event: string): boolean;
    IsFrameType(type: UIObjectFrame): boolean;
    IsIgnoringDepth(): boolean;
    IsKeyboardEnabled(): boolean;
    IsMouseEnabled(): boolean;
    IsMouseWheelEnabled(): boolean;
    IsMovable(): boolean;
    IsResizable(): boolean;
    IsToplevel(): boolean;
    IsUserPlaced(): boolean;
    Lower(): void;
    Raise(): void;
    RegisterAllEvents(): void;
    RegisterEvent(event: string): void;
    RegisterForDrag(buttonType: MouseButton, ...buttonTypes: MouseButton[]): void;
    SetBackdrop(backdropTable?: any): void;
    SetBackdropBorderColor(r: Color, g: Color, b: Color, a?: Alpha): void;
    SetBackdropColor(r: Color, g: Color, b: Color, a?: Alpha): void;
    SetClampedToScreen(clamped: boolean): void;
    SetClampRectInsets(left: number, right: number, top: number, bottom: number): void;
    SetDepth(depth: number): void;
    SetFrameLevel(level: number): void;
    SetFrameStrata(strata: FrameStrata): void;
    SetHitRectInsets(left: number, right: number, top: number, bottom: number): void;
    SetPropagateKeyboardInput(enableFlag?: boolean): void;
    SetID(id: string): void;
    SetMaxResize(maxWidth: number, maxHeight: number): void;
    SetMinResize(minWidth: number, minHeight: number): void;
    SetMovable(isMovable: boolean): void;
    SetResizable(isResizable: boolean): void;
    SetScale(scale: number): void;
    /* SetScript(handler: FrameWidgetHandler, func: HandlerFunction): void; */
    SetToplevel(isTopLevel: boolean): void;
    SetUserPlaced(isUserPlaced: boolean): void;
    StartMoving(): void;
    StartSizing(point: string): void;
    StopMovingOrSizing(): void;
    UnregisterAllEvents(): void;
    UnregisterEvent(event: string): void;
  }

  interface Frame<Inheritor = {}, T = {}> extends Region, ScriptObject<Inheritor extends {} ? Inheritor : Frame, T extends {} ? FrameWidgetHandlerEvent | T : FrameWidgetHandlerEvent> {}

  type MouseButton =
    'LeftButtonUp' |
    'RightButtonUp' |
    'MiddleButtonUp' |
    'Button4Up' |
    'Button5Up' |
    'LeftButtonDown' |
    'RightButtonDown' |
    'MiddleButtonDown' |
    'Button4Down' |
    'Button5Down' |
    'AnyUp' |
    'AnyDown';

}

declare function CreateFrame(frameType: 'Frame'): WoWAPI.Frame;
declare function CreateFrame(frameType: 'Frame', frameName: string | null): WoWAPI.Frame;
declare function CreateFrame(frameType: 'Frame', frameName: string | null, parentObject?: WoWAPI.Object | string, inheritsFrom?: WoWAPI.Object | string): WoWAPI.Frame;
