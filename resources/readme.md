## About

This project will use NPM to download resources dependencies used by
many of sub-projects in this repository.

NOTE: The "node_modules" directory is checkin into the repository on
purpose! We want a static copy of it for off-line demo purpose.

NOTE2: Not all node dependencies works directly as the browser script!
For example, the "splitjs" need to manually download the browser script 
version into "resources" folder.

NOTE3: The "jquery-ui" from "node_modules" contains source code but it's not
in a single file. We downloaded single script file into "resources/jquery-ui"
for convenience instead.
