const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
const mainRouter =require('./routers/main');

app.use('/', mainRouter);
app.use('/about', mainRouter);

app.listen(3000, ()=>{
    console.log('Servidor funcionando en localhost:'+ port);
});