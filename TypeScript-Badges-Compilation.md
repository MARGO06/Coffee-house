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

**1.Getting Started with TypeScript.**

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

**2.Declare Variable Types in TypeScript.**

**Types TS:**

1. Any;
2. Primitive types:

- boolean;
- string;
- number;
- enum;
- void;
- null;
- undefined;

3. Object types:

- class;
- interface;
- array;
- literals;

4. Type parameters.

**Main tips:**

1. to declare an explicit type : **variableName: type**;
2. use a type _void_ when a function nothing is return like undefined in JS;
3. an _enum_ is a symbolic name for a set of values (use meaningful names).

For example:

enum Season { Winter, Spring, Summer, Autumn };

let current: Season = Season.Summer;

console.log(current); => 2

4. use a type _any_ accepts any type and don't need to check type before running a code;

5. use a type _unknown_ a developer can't interact with a variable of unknown type;

6. use a _type assertion_ if a developer wants to use the same variable as an another type.

For example:

let randomValue: unknown = 10;

(randomValue as string).toUpperCase();

7. a developer can union types, when a value can accept several types.

For example:

let multiType: number | boolean;

8. _an intersection type_ combines two or more types to create a new type that has all properties of the existing types.

For example:

type ManagementEmployee = Employee & Manager;

9. array type (has one type).

For example:

let list: number[] = [1, 2, 3];

10. tuple type is another sort of array type (has more than one type).

For example:

let person1: [string, number] = ['Marcia', 35].

**Conclusions** : TS has static type system, it allows to know which type we need to get or assign a value and check the correctness of а code before running a code. A developer can union several types in one.**Not recommended for use _any_ type when it's not necessary, because losing type safety**.
