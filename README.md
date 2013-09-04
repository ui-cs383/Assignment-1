Assignment-1
============

This is a quick skeleton for the assignment one project. This should make it a little easier to work on this without 
all of us editing a single HTML page.

I will build the dist file when we are ready to turn it in, but to "see" what this looks like you can build it yourself:

`Note: these directions assume you are on a Debian flavor of Linux.`

Initial Setup
-------------

    $ sudo apt-get install nodejs
    $ sudo apt-get install npm
    $ sudo npm -g install grunt

Building the Dist
-------------

    $ cd "directory where you cloned the project"
    $ npm install
    $ grunt install
    $ grunt
    
This will result in a new `dist` folder, with a single `index.html` file in it.
