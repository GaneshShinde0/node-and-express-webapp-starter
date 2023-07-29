const path = require('path');
const express = require('express');

const routes = require('./routes');

const app = express();

const port = 3000;

// EJS: Embedded JavaScript Templating. You can read more about it on https://ejs.co > docs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// This is how middlewares are handled in JS
app.use(express.static(path.join(__dirname, './static')));
app.use('/', routes());

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
