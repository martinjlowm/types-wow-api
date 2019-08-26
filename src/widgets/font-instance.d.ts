/// <reference path="./object.d.ts" />

declare namespace WoWAPI {

  type HorizontalAlignment = 'LEFT' | 'CENTER' | 'RIGHT';
  type VerticalAlignment = 'TOP' | 'MIDDLE' | 'BUTTOM';

  /**
   * comma separated list of enabled flags
   */
  type FontInstanceFlags = 'OUTLINE' | 'MONOCHROME' | 'THICKOUTLINE';

  class FontInstance extends Object {
    /**
     * Returns detailed information on a font object.
     * @returns MultipleReturnValues:
     *  fontName: Path to font file
     *  fontHeight: Font height in pixels. Due to internal graphics engine workings, this will be ridiculously close to an integer number, but not quite ever fully.
     *  fontFlags: See FontInstance:SetFont().
     *
     * @tupleReturn
     */
    GetFont(): [string, number, FontInstanceFlags];

    /**
     * Gets the text color of of a Font Instance.
     * @return MultipleReturnValues:
     *  r: The red color
     *  g: The green color
     *  b: The blue color
     *  a?: the alpha (opacity)
     *
     * @tupleReturn
     */
    GetTextColor(): [number, number, number, number?];

    /**
     * The function is used to set the font to use for displaying text.
     *
     * @param font path to the font file, relative to the WoW base directory.
     * @param size size in points.
     * @param flags any comma-delimited combination of "OUTLINE", "THICKOUTLINE" and "MONOCHROME".
     */
    SetFont(font: string, size: number, flags?: FontInstanceFlags): void;

    /**
     * Sets horizontal text justification
     *
     * @param align the new align
     */
    SetJustifyH(align: HorizontalAlignment): void;

    /**
     * Sets vertical text justification
     *
     * @param align the new align
     */
    SetJustifyV(align: VerticalAlignment): void;

    /**
     * Sets the default text color.
     *
     * @param r red color
     * @param g green color
     * @param b blue color
     * @param a alpha (opacity)
     */
    SetTextColor(r: number, g: number, b: number, a?: number): void;
  }
}
