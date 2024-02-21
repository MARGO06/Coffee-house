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

**3.Implement Interfaces in TypeScript.**

**Main tips:**

1. JS doesn't support interfaces, but TS supports interfaces;
2. an interface only describes an object.

For example:

interface Employee {

    firstName: string;
    lastName: string;
    fullName(): string;

};

3. TS has a type alias.

For example:

type Employee = {

    firstName: string;
    lastName: string;
    fullName(): string;

};

4. properties can be required, optional(?), or read only;
5. interfaces can extend each other;
6. use interfaces that describe array types that you can index into.

For example:

interface IceCreamArray {
[index: number]: string;
}

A developer can define own type of an array, to apply it in future;

7. use interfaces to describe existing JS APIs.

**Conclusions** : interfaces are especially useful for checking the required shape of properties, objects passed as parameters, and objects returned from functions. There are differences between interface and type alias is that a developer can't reopen to add new properties in type alias, but a developer can describe a union or tuple using a type alias.

**4.Develop Typed Functions in TypeScript.**

**Main tips:**

1. a function accepts two parameters of type number and returns a number (this is only an example).

For example:
function addNumbers (x: number, y: number): number{};

2. a function can use an optional parameter(to add "?").

For example:
function addNumbers (x: number, y?: number): number{};

3. to enable named parameters, you can use a technique called deconstructed object parameters;

For example:

interface Message {
text: string;
sender: string;
}

function displayMessage({text, sender}: Message) {}

4. use interface for function;

interface Calculator {
(x: number, y: number): number;
}

let addNumbers: Calculator = (x: number, y: number): number => x + y.

**Conclusions** : adding types to functions helps prevent you from passing values that you shouldn't pass to your functions. A developer can use in function parameters: required, optional, default, rest, deconstructed object parameters. A developer can define a function type using a type alias or an interface and then use them for creating functions (if a developer wants to apply the same function type signature to more than one function).

**5.Declare and Instantiate Classes in TypeScript.**

**Main tip:** implement class from interface.

For example:

class Car implements Vehicle {}

**Conclusions** : as was said before TS has interfaces, so a developer can use an interface to ensure class instance shape. Class declarations may reference one or more interfaces in their implements clause. In TS an error may be raised because an interface can only describe the public side of a class and cannot include private members. One of the main features that a developer can use a interface without a class.

**6.Generics in TypeScript.**

**Main tips:**

1. generics define one or more type variables to identify the type or types that you will pass to the component, enclosed in angle brackets (< >);

For example:

function getArray<T>(items : T[]) : T[] {

    return new Array<T>().concat(items);

}

let numberArray = getArray<number>([5, 10, 15, 20]);

let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);

2. no limited to use a different types variables in generic components;

For example:

function identity<T, U> (value: T, message: U) : T {}

let returnNumber = identity<number, string>(100, 'Hello!');

3. use generic constraint, that means a developer can create a type variable and constrain with some types;

type ValidTypes = string | number;

function identity<T extends ValidTypes, U> (value: T, message: U) : T {}

4. also constrain a type to the property of another object;

For example:

function getPets<T, K extends keyof T>(pet: T, key: K) {

return pet[key];

}

5. use generic with custom types and classes;

For example:

class Car {

    make: string = 'Generic Car';
    doors: number = 4;

}

function accelerate<T extends Car> (car: T): T {

    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car

}

**Conclusions** : using generic when a code has several data types and using generic in different places, thanks for it a developer can use again the same code and reduce the use of 'any' type.
