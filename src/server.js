const express = require('express')
const server = express();

server.get('/', (req, res) => {
    res.send('<h1>ok here we are</h1>')
})

const PORT = 3000;
server.listen(PORT, () => console.log('server listening'))