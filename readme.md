## About `ojet-starter` Project

This project is setup to explore Oracle JET framework. 
(mostly in `src` folder). And few other front end libraries (
mostly in `static` folder.)

- http://oraclejet.org
- https://www.oracle.com/webfolder/technetwork/jet/index.html

## References

- [ODCS Git](https://alm.oraclecorp.com/ec)
- [VBCS UI](https://idcs-fb7cd79597024dc4a8ddabd92de517fb.identity.c9dev1.oc9qadev.com/ui/v1/signin)
- [VBCS Docs](https://docs.oracle.com/en/cloud/paas/app-builder-cloud/index.html)
- [OJET Docs](https://docs.oracle.com/en/middleware/developer-tools/jet/6.2/develop/index.html)
- [OJET JS API](https://www.oracle.com/webfolder/technetwork/jet/jsdocs/index.html)
- [OJET TS API](https://docs.oracle.com/en/middleware/developer-tools/jet/6.2/reference-typescript/index.html)
- [OJET Cookbook](https://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html)

## Media Queries

https://docs.oracle.com//en/middleware/developer-tools/jet/6.2/develop/media-queries.html#GUID-73B2CFA1-91A5-41A4-804F-915481BDB636

Width=large, range=1024-1280, device=tablet landscape, desktop

## Questions: Why CCA will not load apart from index?

Looks like "paths" injection only works with "main.js". It
seems to have been hardcoded by OJET framework? How to use
another file?

For now, if we are to use anything other than main.js, we
would need to manually apply the paths setup in "requirejs.config".

## Quick Tips

`[[...]]` One way binding

`{{..}}` Two ways binding
