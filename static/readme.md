## Why this `static` folder?

We want to quickly test static HTML, but with some libraries loaded.
We will reference "../web/js" folder for libraries. These libraries
will not exists until you run "ojet build" once.

The difference between this "static" folder vs "src" is that
this folder is not intended to use "node" to "build" the project.
We simply want a quick static folder to test out any html pages.

However some libraries such as "requirejs" or "ojet" requires
some local "js" files to be loaded, in that case we will use "static/js", but it will not be "build" like in "src" folder. 