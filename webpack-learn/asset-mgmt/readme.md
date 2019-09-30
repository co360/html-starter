## Getting Started

```
npm install
npm run build
open build/index.html
```

## Webpack Asset Manament

https://webpack.js.org/guides/asset-management

NOTE: The main goal of webpack will bundle files into single .js.
By loading css or images from code (`app.js`) we have control
on loading them programmatically. If you do not need this degree
of file loading, then you can simply place them into "build" folder.

NOTE: For images, it will be packaged and renamed with a uuid as 
file name!
