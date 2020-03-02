Slugly -- The Simple Slug Generator
A simple Flask application that is deployed to Heroku.

Feel free to see Slugly running here Slugly

Deployment
You can just pull the source code and use

python server.py
to deploy Slugly locally.

By default, Flask is set to port 5000. Feel free to update server.py to change that.

Built with
If you dig into the code, you'll find that Slugly is comprised of nothing but

Flask -- the web server framework used
Python -- for handling processing of the data
Vanilla Javascript -- that's right, plain ol' Javascript providing the functionality for the front-end

...but wait! There's more!

The front-end was actually written in TypeScript, compiled to JavaScript by the typescript compiler package from npm

Authors
Christopher D. Jativa