## Getting Started

```
npm install
npm run build
open dist/index.html
```

## Doc

https://webpack.js.org/configuration/output/#outputlibrary

The config option for `output.library` and `output.libraryTarget` works together.

To enable AMD, configure like this:

```
output: {
    library: 'bundle',
    libraryTarget: 'amd'
}
```

Then you may use the generated main.js like this:

```
require('bundle', function (bundle) {
    // use main here.
});
```