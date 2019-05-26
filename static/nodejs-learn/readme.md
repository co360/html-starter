Explore NodeJS specific here.

## How To Install NodeJS

On MacOSX, run `brew install node` command to install. 

Usually you also want to setup `npm` along with `node` so that you can install
many of packages available to use as third party libraries. Note that `npm` 
will generate a `node_modules` folder to store these dependencies.

## How To Setup a NPM and Node based Project

```bash
npm init hello-node
cd hello-node
npm install
echo 'console.log("Hello");' > hello.js
node hello.js
```
