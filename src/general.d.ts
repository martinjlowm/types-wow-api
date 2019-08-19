declare namespace WoWAPI {
  type Color = number;
  type Alpha = number;

  interface ColorObject {
    r: WoWAPI.Color;
    g: WoWAPI.Color;
    b: WoWAPI.Color;
  }
}

type Narrowable = string | number | boolean | undefined | null | void | {};

/** @vararg */
type FileArguments<A extends unknown[]> = A & { __luaVararg?: never };
declare const FILE_ARGUMENTS: FileArguments<[string, any]>;
