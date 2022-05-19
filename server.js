const express = require('express');
const indexRouter = require('./src/routes/index');

const routes = express.Router();
const app = express();
const port = process.env.PORT || 5000;


/*settings*/
require('./src/database/connect');
require('./src/database/object_model');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*routes*/
app.use('/', indexRouter);


app.listen(port, () => {
  console.log(`Server listening on localhost: ${port}`);
})