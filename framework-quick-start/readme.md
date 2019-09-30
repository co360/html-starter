== How to setup and build CKEditor5 from Framework

https://ckeditor.com/docs/ckeditor5/latest/framework/guides/quick-start.html

```
mkdir framework-quick-start
cd framework-quick-start
npm init
npm install --save \
    postcss-loader@3 \
    raw-loader@3 \
    style-loader@1 \
    webpack@4 \
    webpack-cli@3
```

Now that framework base is setup, we can add more packages to build specific editor.
For example, here is how we setup "classic-editor"

```
npm install --save \
    @ckeditor/ckeditor5-dev-utils \
    @ckeditor/ckeditor5-editor-classic \
    @ckeditor/ckeditor5-essentials \
    @ckeditor/ckeditor5-paragraph \
    @ckeditor/ckeditor5-basic-styles \
    @ckeditor/ckeditor5-theme-lark
```

Next steps are need to package and build:
1. Add `webpack.config.js`
2. Add `app.js`
3. Add `"script": { "build": "webpack --mode development"}`
4. Run `npm run build`
