const { createServer } = require('http');
const express = require('express');
const next = require('next');
const path = require('path');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    const httpServer = createServer(server);
    
    server.get('/api/lang', (req, res) => {
        const lang = req.query.lang;
        const filePath = path.join(__dirname, 'locale', lang, 'language.json');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err) {
                res.status(200).json({ error : 'not found' });
            }else{
                res.json(JSON.parse(data));
            }
        })
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const port = process.env.PORT || 3000;

    httpServer.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});