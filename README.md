## Basics

- eslint can be used as linter
- npm i -D eslint : -D means it is in developer mode and when our code is deployed to prod it won't have any effect.
- it will be added to devDependencies in your package json.
- npx eslint --init : initializes eslint setup
- npm install -D prettier eslint-config-prettier eslint-plugin-prettier
- Add following configurations to .prettierrc

  {
  "trailingComma": "es5",
  "printWidth": 100,
  "singleQuote": true
  }

- Following configuration to .eslintrc.json

  "plugins": ["prettier"],
  "extends": ["airbnb-base", "prettier"],

- nodemon : node monitor, will watch our code and reload project whenver some change occurs, It is a developer dependency

  npm i -D nodemon

- Add `	"dev": "nodemon --ignore feedback.json server.js"` to Package.json > scripts
- `npm run dev` Can be used to run the code

### Template Design & Expresss

- Template engines provides template for showing data.
- EJS: Embedded JavaScript Templating. You can read more about it on https://ejs.co > docs

  npm install ejs

- Inside server .js we have to add

  app.set('view engine', 'ejs')

# ExpressRoute and MiddleWare

### Middlewares

- Syntax
  - app.use(callback);
  - app.use(path,callback);
  - app.[get|post|put|delete|...](path,callback)

### Express Middleware Can...

- Execute any code
- Change the request and response objects
- End the request-response cycle - mostly to send data back to the caller.
- Call the next middleware in the stack

### Express Middlewares

    app.use((req, res, next) => {
    	//do something
    	// You are inside Handler Function
    	return next();
    });

### Express Routing Middlewares

    app.verb('${path}', (req, res, next) => {
    	//do something
    	// You are inside Handler Function
    	return next();
    });

    - verb can be get, put, post ...
    - ${path} is api path

### Parameter Routes

- app.get(,/speakers/:speakername', handler);
  http://localhost:3000/users/ganesh
  http://localhost:3000/users/john

- app.get(,/speakers/:spearkername?',handler);
  http://localhost:3000/users
  http://localhost:3000/users/john

### Express Request LifeCycle

- App Init> Execute JS code (Register all middlewares) -> Start HTTP Server and listen on port -> Request Comes -> Express will execute all defined middlewares in order of their creation and based on conditions defined in middleware-> send response/ do whatever is defined.
  "# node-and-express-webapp-starter"

# Handing Errors Gracefully

- npm install http-errors
- npm i express-validator
- express-validator is a set of express.js middlewares that wraps the extensive collection of validators and sanitizers offered by validator.js.
