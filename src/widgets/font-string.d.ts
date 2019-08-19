/// <reference path="./font-instance.d.ts" />
/// <reference path="./layered-region.d.ts" />

declare namespace WoWAPI {
  class FontString {
    // Get whether long strings without spaces are wrapped or truncated (added 1.11)
    CanNonSpaceWrap(): boolean;

    // Returns the height in pixels of the current string in the current font, without line wrapping. (added 2.3)
    GetStringHeight(): number;

    // Returns the width in pixels of the current string in the current font, without line wrapping.
    GetStringWidth(): number;

    // Get the displayed text.
    GetText(): string;

    // Create or remove an alpha gradient over the text.
    SetAlphaGradient(start: number, length: number): void;

    // Set the formatted display text. (added 2.3)
    SetFormattedText(format: string, ...args: string[]): string;

    // Set whether long strings without spaces are wrapped or truncated.
    SetNonSpaceWrap(wrapFlag: boolean): void;

    // Set the displayed text.
    SetText(text: string): void;

    // Set the height of the text by scaling graphics Note that can distort text.
    SetTextHeight(pixelHeight: number): void;
  }

  interface FontString extends LayeredRegion, FontInstance {}
}
