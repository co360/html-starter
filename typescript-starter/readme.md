Explore `TypeScript` language and its `tsc` compiler.

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
