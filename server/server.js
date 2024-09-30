const { createServer } = require('http');
const express = require('express');
const next = require('next');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql2');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const connection = mysql.createConnection({
    host: '1.248.227.179',
    user: 'hde2024',
    password: 'adrian130322@',
    database: 'hde2024'
});

app.prepare().then(() => {
    const server = express();
    const httpServer = createServer(server);
    
    // const dotsAdminRoutes = require(`./routes/dotsAdmin`);
    // server.use(`/api/dotsAdmin`, dotsAdminRoutes)

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

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        console.log('Connected to MySQL');
    });

    httpServer.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});