/// <reference path="./region.d.ts" />

declare namespace WoWAPI {

  type FilterMode = 'LINEAR' | 'BILINEAR' | 'TRILINEAR' | 'NEAREST';
  type Wrap = 'CLAMP' | 'CLAMPTOBLACK' | 'CLAMPTOBLACKADDITIVE' | 'CLAMPTOSHITE' | 'REPEAT' | true | 'MIRROR';

  class Texture extends LayeredRegion {
    // Return the blend mode set by SetBlendMode()
    GetBlendMode(): BlendMode;

    // Gets the 8 texture coordinates that map to the Texture's corners (added 1.11)
    /** @tupleReturn */
    GetTexCoord(): [number, number, number, number, number, number, number, number];

    // Gets this texture's current texture path.
    GetTexture(): string;

    // Gets the vertex color for the Texture.
    /** @tupleReturn */
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
    SetTexture(r: Color, g: Color, b: Color): void;
    /**
     * Changes the texture of a Texture widget.
     *
     * @param file Path to a texture image. | ID number specifying a Blizzard texture file. Returned by various API functions.
     * @param horizWrap Wrap behavior specifying what should appear when sampling pixels with an x coordinate outside the (0, 1) region of the texture coordinate space
     * @param vertWrap Wrap behavior specifying what should appear when sampling pixels with a y coordinate outside the (0, 1) region of the texture coordinate space.
     * @param filterMode Texture filtering mode to use
     */
    SetTexture(file: string | number, horizontalWrap?: Wrap, verticalWrap?: Wrap, filterMode?: FilterMode): void;

    // Sets the texture to be displayed to a solid color.
    SetColorTexture(r: Color, g: Color, b: Color, a?: Alpha): void;
  }

}
