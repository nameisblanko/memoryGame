const bulldog = require('pug');
const express = require('express');
const http = require('node:http');
// const bootstrap = require('bootstrap');
const app = express();
const port = 3000;

//Pug implementation

app.set('view engine', 'pug');
app.set('views', './views');

//Static files
app.use(express.static('public/images'));
app.use(express.static('public/css'));

////////////////////////////////
/*shit to do before render */
const datas_array = [];
//tailwind css

/*render */
app.get('/', (req, res) => res.render('./index.pug'));
app.get('/cards', (req, res) => {res.render('./cards.pug')});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/*shit to do after render */







