/// <reference path="./region.d.ts" />

declare namespace WoWAPI {
  class Texture extends Region {
    // Return the blend mode set by SetBlendMode()
    GetBlendMode(): BlendMode;
    // Gets the 8 texture coordinates that map to the Texture's corners (added 1.11)
    GetTexCoord(): [number, number, number, number, number, number, number, number];

    // Gets this texture's current texture path.
    GetTexture(): string;

    // Gets the vertex color for the Texture.
    GetVertexColor(): [Color, Color, Color];

    // Gets the desaturation state of this Texture. (added 1.11)
    IsDesaturated(): boolean;

    // Set the alphaMode of the texture.
    SetBlendMode(mode: BlendMode): void;

    // If should be displayed with no saturation. has a return value.
    SetDesaturated(flag: boolean): void;

    SetGradient(orientation: number, minR: Color, minG: Color, minB: Color, maxR: Color, maxG: Color, maxB: Color): void;

    SetGradientAlpha(orientation: number, minR: Color, minG: Color, minB: Color, maxR: Color, maxG: Color, maxB: Color, maxA: Alpha): void;

    // Shorthand for the appropriate 8 argument SetTexCoord rotation (in C++ so it's fast)
    SetRotation(angle: number, cx?: number, cy?: number): void;

    // Set the corner coordinates for texture display.
    SetTexCoord(minX: number, maxX: number, minY: number, maxY: number): void;
    SetTexCoord(ULx: number, ULy: number, LLx: number, LLy: number, URx: number, URy: number, LRx: number, LRy: number): void;

    // Sets the texture to be displayed from a file.
    SetTexture(texturePath: string): void;

    // Sets the texture to be displayed to a solid color.
    SetColorTexture(r: Color, g: Color, b: Color, a?: Alpha): void;
  }
}
