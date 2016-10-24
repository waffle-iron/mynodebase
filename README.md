# My Node Base

This is my default framework for node applications I develop.  Most all apps 
I have developed that are node based will be based on this project.  Clone this
repository and remove the .git directory.  Then follow steps below.

```
npm init
```
This will prompt you with some questons to customize the software for your new project.

```
npm install
```
This will install all the modules needed.

The server has the below gulp tasks setup.
 * default - starts a server that has already been built
 * clean - cleans the build directory
 * build - converts the es6 files to older javascript and prepares server to run.
 * test - runs the tests to make sure code performs as expected.
 * start - same as default.
 * start-debug - runs the clean and build tasks then starts the server in debug mode to be used with a node debugger.
