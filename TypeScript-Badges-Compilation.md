# My TypeScript training.

## My achievements:

**1.Getting Started with TypeScript:** [badge-link](https://learn.microsoft.com/api/achievements/share/en-us/MargaritaMasko-4018/FZ9UK3AX?sharingId=8BB0169F9B90EC28);

**2.Declare Variable Types in TypeScript:** [badge-link](https://learn.microsoft.com/api/achievements/share/en-us/MargaritaMasko-4018/UFSLN8T3?sharingId=8BB0169F9B90EC28);

**3.Implement Interfaces in TypeScript:** [badge-link](https://learn.microsoft.com/api/achievements/share/en-us/MargaritaMasko-4018/9NTLR4ZU?sharingId=8BB0169F9B90EC28);

**4.Develop Typed Functions in TypeScript:** [badge-link](https://learn.microsoft.com/api/achievements/share/en-us/MargaritaMasko-4018/8RG84J4W?sharingId=8BB0169F9B90EC28);

**5.Declare and Instantiate Classes in TypeScript:** [badge-link](https://learn.microsoft.com/api/achievements/share/en-us/MargaritaMasko-4018/WACR77DN?sharingId=8BB0169F9B90EC28);

**6.Generics in TypeScript:** [badge-link](https://learn.microsoft.com/api/achievements/share/en-us/MargaritaMasko-4018/J6EGWX5T?sharingId=8BB0169F9B90EC28);

**7.Work with External Libraries in TypeScript:** [badge-link](https://learn.microsoft.com/api/achievements/share/en-us/MargaritaMasko-4018/WACM4JUN?sharingId=8BB0169F9B90EC28);

**8.Organize Code with Namespaces in TypeScript:** [badge-link](https://learn.microsoft.com/api/achievements/share/en-us/MargaritaMasko-4018/ZPFLMB72?sharingId=8BB0169F9B90EC28).

## Reflections:

**1.Getting Started with TypeScript**

**TypeScript(TS)** is an extended version of JavaScript(JS). The main feature of TS is its type system. It provides better documentation and allows TS to validate that a code is working correctly.

Browsers understand JavaScript only. It must be compiled a code and convert to JavaScript.

**Main tips:**

1. install TS global: **npm install -g typescript**;

2. check TS was successfully installed : **tsc**;

3. transform TS code into JS code by using the TS compiler, or using a TS-compatible transpiler, such as _Babel, swc, or Sucrase_;

4. run TS compiler command :

- **tsc** for all files js in a current folder;
- **tsc file_name.ts** for a specific file;

5. add tsconfig.json : **tsc --init**;

6. main compiler options:

- _noImplicitAny_ (false(default)) - check type any;
- _noEmitOnError_ (false(default)) - a JS file should not be generated if errors occurred during compilation;
- _target_ (ES3 (default))- compiled JS file to need version ES (just need to indicate);

**Conclusions** : before working with TS need to install TS and write necessary options in tsconfig.json. A developer can use acquired skills in JS. TS catches code issues early than JS, thanks to using type hint (through static type checking).
