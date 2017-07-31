# A (very) simple Node.js Hello World Example

![demo output](demo.png)

### Overview
- The `start` folder is empty, to be used when demonstrating the steps.
- The `finish` folder contains a finished example to reference.

### Dependencies & Tools
- Install [Node.js](https://nodejs.org/en/download/)
- Install a text editor like [Atom](http://atom.io)
- `GA Patterns v1.0.9` found here https://s3.amazonaws.com/ga-patterns/1.0.9/universal-kit.css

### Steps to create the finished product
#### The index.html
1. `cd start`
2. `npm init` and fill out the basic information
3. Open the `index.html` file within your editor (we used [Atom](http://atom.io) for this example)
4. type `html` and then `tab` to create a html document outline
5. add a title, like `Hello World`
6. include the Patterns css file as a link `<link href="https://s3.amazonaws.com/ga-patterns/1.0.9/universal-kit.css" rel="stylesheet" />` within the `<head></head>`
7. add some content that you want to display. I added a few `ga-row` and `ga-type` blocks. See the [Patterns](http://patterns.generalassemb.ly/kits/universal) docs for what you can use

#### The index.js
1. include the necessary packages `http` and `fs`
2. define the port to use for the server, we used `3000`
3. create an `httpServer` to respond with the `index.html`
4. within the callback load in the `index.html` file using `fs.readFile()`

#### The package.json
1. Add a start script to the `"scripts": {}` block within `package.json` with `"start": "node index.js",`

#### (Bonus) Push to heroku
1. create a [heroku account](https://signup.heroku.com/)
2. install the [heroku cli tool](https://devcenter.heroku.com/articles/heroku-cli)
3. create a file named `Procfile` in the `start` directory
4. paste `web: npm start` and save it
5. type `heroku apps:create` to add heroku as a git remote

Since our server is not located in the root directory you will have to push just the `start` directory to heroku using `git subtree push --prefix start heroku master`

### Test
To test make sure you are in the `start` directory and run `npm start`

### Finished Demo
To run the finished example type:
```
cd finish
npm start
```

### Resources
- https://nodejs.org/en/docs/
- https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm
- http://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/
- https://electron.atom.io/
- https://nodejs.org/en/download/
- https://brew.sh/
