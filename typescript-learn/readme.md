Explore `TypeScript` language and its `tsc` compiler.

TypeScript (TS) is a typed superset of JavaScript (JS) that compiles to plain 
JavaScript.

## How To Setup

Install `TypeScript` compiler tool using NPM:

```bash
npm install -g typescript
tsc --version
```

## How to Compile and Run Source File

```bash
echo 'class Hello { 
  name: string = "Hello" 
}
console.log(new Hello().name + " World");
' > hello.ts
tsc hello.ts
node hello.js
```

## Namespaces vs Modules

TypeScript (TS) has two ways to organize codes: "namespace" and "module".

See https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html

TS let you use "namespace" to group global code into logical groups and
avoid naming clashing. These that affect "namespace" in TS are:

    - Declare code with `namespace MySpace { ... }` in "MySpace.ts" file
    - Use/consume it as follow:
        ```
        /// <reference path="MySpace.ts">
        MySpace.doSomethingCool();
        ```
    - We can split the same `MySpace` in different files. Just keep add 
      to the `/// <reference...>` tag.
    - You may also combine multiple namespace files into single TS output `.js`
      file using the "--outFile" TS compiler option.
    - You can create namespace alias when comsuing it:
        ```
        import cool = MySpace.doSomethingCool;
        cool();
        
        NOTE: This is NOT the same as "import cool = require(name);", which is
        for "module" importing!
        ```
    - Ambient Namespace: We can use "namespace" to bring in other plain JS 
      libraries into TS using declaration files (`.d.ts`).
      
      NOTE: We call declarations that don’t define an implementation “ambient”.
      

TS module is different than "namespace", but can be used to organize code
into logical group as well. "module" however would dependent on module loader
that you intend to target to use.

    - Starting with ECMAScript 2015, JavaScript has a concept of modules. 
        TypeScript shares this concept.
    - Module is usually writter per each `.ts` file. You `export` on objects in 
    module to be consumed by users. And users use `import` to consume it.
    - There are many different forms of "export" and "import".
    - TS module needs a target "module loader" to be used. You can use TS compiler
    "module" option to specify which target to use. Well-known module loaders used in 
    JavaScript are Node.js’s loader for CommonJS modules and the RequireJS loader 
    for AMD modules in Web applications.
    - In TypeScript, just as in ECMAScript 2015, any file containing a top-level 
    import or export is considered a module. 

## Using Triple Slashes Directives

See https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html

- The `/// <reference path="..." />` directive is the most common of this group. It serves as a 
declaration of dependency between files.
- The `/// <reference types="node" />` directive declares a dependency on a package.
- The `/// <amd-module /> #` directive allows passing an optional module name to the compiler.
- The `/// <amd-dependency path="x" />` informs the compiler about a non-TS module dependency 
that needs to be injected in the resulting module’s require call.

## How to import variables used in RequireJS that has no .d.ts file

Option 1:
```
    /// <amd-dependency path="ojs/ojcore" name="oj">
    declare var oj: any;
```

Option 2:
```
    declare module "ojL10n!*" {
        let resource: {[key: string]: any};
        export = resource;
    }
    declare module "text!*" {
        let resource: string;
        export = resource;
    }
    declare module "css!*" {
        let resource: string;
        export = resource;
    }
```
