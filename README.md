# TypeScript declarations for the World of Warcraft API

> [!IMPORTANT]
> This project is archived in favor of https://github.com/martinjlowm/wow-ts-decl

May be used together with https://github.com/TypeScriptToLua/TypeScriptToLua to
transpile to Lua.

Add `@types/wow-api` to `tsconfig.json`:

```bash
{
  "compilerOptions": {
    ...
    "types": ["lua-types/5.3", "@types/wow-api"],
  }
}
```
