lcd-test: A simple command-line program that print numbers the LCD screen way
=============================================================================

For convenience, two setups are available.

You may install, test and run the application directly with node, but it requires you to install the adequate version of node on your computer.

Or you may simply use Docker. If you choose that way, no need to deal with tedious docker commands, a Makefile is provided for that purpose.
With this setup, you only need to have Make and Docker installed, for both testing or running the program.

Install & Run with node
-----------------------

Please use node 9.11.1 or higher.

Then run the usual command to install dependencies : `npm install`.

This application has some unit tests you can run using `npm run test`.

When you want to use the application, two commands must be run : `npm run build` and `npm link`.
Then you can run the programm using `lcd-test 123456789` for example.

Install & Run with docker
-------------------------

You have three make targets `make` (all), `make tu`, `make install`.

The first target will build the docker image used to run some node command, and then install all dependencies localy. It is required before runing the second target.

`Make tu` simply runs the unit tests.

The third target, `make install` will 'install' the program following the docker way : by building an image ! Once this is done, you can run the program using
`docker run --rm lcd-test 123456789` for example.

Source files
------------

The sources are under /src, the tests under /test.

Makefile contains all used docker commands.

Dockerfile_build is for the image we use for installing dependencies localy and running test.

Dockerfile is for the image we use to run the program.
