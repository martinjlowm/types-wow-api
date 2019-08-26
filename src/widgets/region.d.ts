/// <reference path="./animation-group.d.ts" />

declare namespace WoWAPI {

  type BlendMode = 'OVERLAY' | 'ADD';
  type SetPointArguments = [string, WoWAPI.Region | string, string?, number?, number?];

  type Anchor =
    'BOTTOM' |
    'BOTTOMLEFT' |
    'BOTTOMRIGHT' |
    'CENTER' |
    'LEFT' |
    'RIGHT' |
    'TOP' |
    'TOPLEFT' |
    'TOPRIGHT';


  class Region extends UIObject {
    ClearAllPoints(): void;
    CreateAnimationGroup(name: string, inheritsFrom?: string): AnimationGroup;
    GetAnimationGroups(): AnimationGroup[];
    GetBottom(): number;
    /** @tupleReturn */
    GetCenter(): [number, number];
    GetHeight(): number;
    GetLeft(): number;
    GetNumPoints(): number;
    /** @tupleReturn */
    GetPoint(pointNum?: number): [Anchor, Region, Anchor, number, number];
    GetRect(): [number, number, number, number];
    GetRight(): number;
    GetSize(): number;
    GetTop(): number;
    GetWidth(): number;
    Hide(): void;
    IsDragging(): boolean;
    IsProtected(): boolean;
    IsShown(): boolean;
    IsVisible(): boolean;
    SetAllPoints(frameName?: Frame | string): void;
    SetHeight(height: number): void;
    SetParent(parentName: Frame | string): void;
    SetPoint(point: string, relativeFrame: UIObject | string, relativePoint: string, xOffset?: number, yOffset?: number): void;
    SetPoint(point: string, xOffset?: number, yOffset?: number): void;
    SetSize(width: number, height: number): void;
    SetWidth(width: number): void;
    Show(): void;
    StopAnimating(): void;
  }
}
