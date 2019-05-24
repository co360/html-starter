## About `ojet-starter` Project

This project is setup to explore Oracle JET framework, and few other front-end libraries.
See "Oracle JET Notes" below.

The `static` folder contains standalone static web application that are mainly
used to explore `HTML/CSS/JavaScript` web technologies. See `src/readme.md` for 
more details.

## Why your repository is full of "Update" commit messages?

Well, I am lazy. :)

This repository is just my pet project and wasn't intended to share 
to the public, but since you have asked nicely, I have shared with you. Now
just move on!

## Oracle JET Notes

OracleJET -  A front end library to development modern web application.

### References

- [OJET Docs](https://docs.oracle.com/en/middleware/developer-tools/jet/6.2/develop/index.html)
- [OJET JS API](https://www.oracle.com/webfolder/technetwork/jet/jsdocs/index.html)
- [OJET TS API](https://docs.oracle.com/en/middleware/developer-tools/jet/6.2/reference-typescript/index.html)
- [OJET Cookbook](https://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html)
- [VBCS UI](https://idcs-fb7cd79597024dc4a8ddabd92de517fb.identity.c9dev1.oc9qadev.com/ui/v1/signin)
- [VBCS Docs](https://docs.oracle.com/en/cloud/paas/app-builder-cloud/index.html)
- [ODCS Git](https://alm.oraclecorp.com/ec)

### How to Build

First install tools

```
npm install -g @oracle/ojet-cli
npm install -g typescript
```

Now you are ready:

```
cd ojet-starter
npm install
tsc
ojet build
```

To keep a server up and running while editing:
```
tsc -w &
ojet serve
```

### Development Tips

#### How to setup page screen size with Media Queries

Width=large, range=1024-1280, device=tablet landscape, desktop

https://docs.oracle.com//en/middleware/developer-tools/jet/6.2/develop/media-queries.html#GUID-73B2CFA1-91A5-41A4-804F-915481BDB636

#### Why CCA will not load apart from index?

Looks like "paths" injection only works with "main.js". It
seems to have been hardcoded by OJET framework? How to use
another file?

For now, if we are to use anything other than main.js, we
would need to manually apply the paths setup in "requirejs.config".

#### JET binding syntax

`[[...]]` One way binding

`{{..}}` Two ways binding

#### OJET CSS Reset

The JET CSS reset is based on 
`/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */` and 
you can use it by simply importing:

```
/ojet-starter/themes/alta/web/alta.css
```


#### What Are The `/ojet-starter/web` and `/ojet-starter/themes` Folders For?

These `web` and `theme` folders are generated after we run `ojet build`. 
Exploring these folders reveal what comes with OJET.

Here are few important third party libraries to explore:

* `/ojet-starter/web/js/libs/require/`
* `/ojet-starter/web/js/libs/jquery/`
* `/ojet-starter/web/js/libs/knockout/`
* `/ojet-starter/web/js/libs/oj/`

The OJET comes with some CSS themes that we may explore:

* `/ojet-starter/themes/alta/web/alta.css`
* `/ojet-starter/themes/alta/web/fonts`
* `/ojet-starter/themes/alta/web/images`
