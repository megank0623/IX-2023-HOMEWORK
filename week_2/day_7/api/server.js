//first, import express and instantiate it 
//STUB: what does requiring something mean?
const express = require('express');
const app = express();

//STUB: might need to install cors

//make a port for the server to run on
const port = 3000;

//allow the app to accept get requests and respond
//STUB: i'm not exactly sure what this does though
app.get('/', (req, res) => {
    //when it gets a request or response
    res.send('hello world');
});

//STUB: i'm not sure what this does
app.post();

//If sending an http request, the req will be on this port
//STUB: not entirely sure what the anonymous arrow is doing here
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});