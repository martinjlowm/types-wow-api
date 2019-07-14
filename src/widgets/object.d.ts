/// <reference path="../general.d.ts" />

declare namespace WoWAPI {
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

  class Object {
    [key: string]: any;

    GetParent(): Object;
  }
}
