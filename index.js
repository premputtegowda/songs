const express = require('express');

server = express();

server.use(express.json());

server.get('/', (req, res) => {
    const songs = [{id: 1, name: "Final count down"}]
    res.status(200).json(songs);
})

const port = 5001;

server.listen(port, () => console.log(`server is running on ${port}`))