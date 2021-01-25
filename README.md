#About the project:
This is a basic Webdriver io Test project implemented using cucumber framework.
The automation practice is a online shopping application allows.The customers are allowed to create an account and login to the website using the registered.The webdriverio is the project created for the functional testing of user registration and login modules.The test scripts are implemented using the concepts of webdriver io with cucumber framework.

#Pre-requisites:
JDK
JRE
Node Js
Visual studio code

#Installation:
Use npm install for the installation of dependencies

#Browsers supported:
Chrome

#Files:
Login.feature
The login feature and the test scenarios are written in the feature file.

Login.stepdef.js
The javascript file written with the definitions for the steps defined in the feature file scenarios of login module.This includes the successfull and unsuccessfull login of the user.

Registration.feature
The feature file with scenarios of new user registration

Registration.stepdef.js
The step definition of feature file scenarios are written in the registration.stepdef.js file

#Execution
To execute the scripts, use ./node_modules/.bin/wdio wdio.conf.js
