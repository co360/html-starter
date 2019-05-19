## Why this `static` folder?

We want to quickly test static HTML/CSS/JavaScript quickly, but only with 
minimal libraries loaded. We will reference `../web` (this is generated when
you ran `ojet build` on parent directory.) folder for many demos. These 
files `../web` contains libraries that comes built-in for JET development.

The difference between this `static` folder vs `src` is that
this folder is not intended to use `ojet` command as full JET project.
We simply want to load a quick static file to test a single features.
