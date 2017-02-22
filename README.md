# HelloKitsular
The reason for this repository is to demonstrate some difference in Angular and Angular 2. As a start we are going to look at routing, this is because almost all web application uses some sort of navigation.

First off we are using node and if not already installed download it here: https://nodejs.org/en/
We are also using bower. 
Bower is a command linte utility and use npm to install it. 
	In Terminal run: 
		* npm install -g bower

More information about bower can be found here: https://bower.io


Clone this project to your own computer. 
	
	In Terminal run:
		* npm install
		* bower install
		* grunt serve

In this project we are also using yeoman and generator, just to make life a bit more easy.

If Yeoman not installed, you can follow this instructions:
	
	1.  Install Yeoman with npm (Node Package Manager).
		 * Open Terminal and write: npm install -g yo

	2.	Install the needed generator (cg-angular)
		* In Terminal write: npm install -g generator-cg-angular

If everything went well you now can use npm, yeoman and cg-angular.

There are a set of subgenerators to initialize empty Angular components. Each of these generators will:
	* 	Create one or more skeleton files (javascript, LESS, html, spec etc) for the component type.
	* 	Update index.html and add the necessary script tags.
	* 	Update app.less and add the @import as needed.
	* 	For partials, update the app.js, adding the necessary route call if a route was entered in 		the generator prompts.

There are generators for directive,partial,service, filter, module, and modal.

To run a generator use one of these commands in Terminal:

	* yo cg-angular:directive my-awesome-directive
	* yo cg-angular:partial my-partial
	* yo cg-angular:service my-service
	* yo cg-angular:filter my-filter
	* yo cg-angular:module my-module
	* yo cg-angular:modal my-modal

Read more at: https://github.com/cgross/generator-cg-angular

To start the project you can use these commands: 
	* grunt serve   #This will run a development server with watch & livereload enabled.
	* grunt test    #Run local unit tests.
	* grunt build   #Places a fully optimized (minified, concatenated, and more) in /dist

