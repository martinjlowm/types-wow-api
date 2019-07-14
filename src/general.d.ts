declare namespace WoWAPI {
  type Color = number;
  type Alpha = number;
}

type Narrowable = string | number | boolean | undefined | null | void | {};

/** @vararg */
type FileArguments<A extends unknown[]> = A & { __luaVararg?: never };
declare const FILE_ARGUMENTS: FileArguments<[string, any]>;

declare namespace string {
  function split(separator: string, str: string, pieces?: number): string[];
}
