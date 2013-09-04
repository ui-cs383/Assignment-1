Usage
============

The project is broken into separate `sections`. This makes editing a single section much easier than editing on enormous 
HTML file.  

In order to get up and running, you'll need to fork this repository. These instructions assume you have git installed 
locally, and it's in your path:

    $ cd "some directory"
    $ git clone http://my-user-name.github.com/Assignment-1
    $ cd Assignment-1/sections
    
`Note: when running git clone make sure the URL you are cloning is your fork, not the main respository.`

This should give you a list of HTML files, broken into sections based on Dr. Jeffrey's requirements. I haven't added a 
section for extras at this point, because we haven't really discussed what they should be.

Building
============

I will try to keep an updated build at http://ui-cs383.github.io/Assignment-1/.

`Note: these directions assume you are on a Debian flavor of Linux.`

Sadly, wormulon doesn't have nodejs/npm installed so this won't work on there. If you are running OSX or Windows 
you can checkout installation instructions for nodejs at http://nodejs.org/. I believe npm is included by default 
on both platforms.


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
